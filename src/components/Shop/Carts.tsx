/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseCart from "../../common/hooks/cart/UseCart";
import { useLocalStorage } from "../../common/hooks/cart/UseStorage";
import { ChangeEvent } from "react";

const Carts = () => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  // console.log(userId);
  const { data, mutate, handleQuantity, calculateTotal } = UseCart();
  // console.log(data);

  const deleteCart = useMutation({
    mutationFn: async (productId) => {
      const { data } = await axios.post(`http://localhost:3000/carts/delete`, {
        userId,
        productId,
      });
      return data;
    },
  });

  const handleDeleteClick = async (productId: any) => {
    const result = await Swal.fire({
      title: "Bạn có chắc muốn xoá không?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xoá",
      cancelButtonText: "Hủy",
      customClass: {
        popup: "my-toasts",
      },
    });
    if (result.isConfirmed) {
      try {
        await deleteCart.mutateAsync(productId);
        Swal.fire({
          icon: "success",
          title: "Xoá phẩm thành công!",
          position: "center",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "my-toasts",
          },
        });
        queryClient.invalidateQueries({
          queryKey: ["CART", userId],
        });
      } catch (error) {
        console.error("Lỗi khi xoá sản phẩm:", error);
      }
    }
  };

  return (
    <div className="container-cart">
      <div className="container">
        <div className="cart-both">
          <div className="list-cart">
            <table className="border text-center">
              <thead>
                <tr className="border border-[#f9f1e7] bg-[#f9f1e7] ">
                  <th className="py-4 px-9">#</th>
                  <th className="py-4 px-9">Name product</th>
                  <th className="py-4 px-9">Img </th>
                  <th className="py-4 px-9">Price</th>
                  <th className="py-4 px-10 w-56">Quantity</th>
                  <th className="py-4 px-9">Total</th>
                  <th className="py-4 px-9">Action</th>
                </tr>
              </thead>
              <tbody >
                {data?.products.map((product: any, index: number) => {
                  return (
                    <tr className="border" key={index}>
                      <td>{index + 1}</td>
                      <td>{product.namePro}</td>
                      <td>
                        <img
                          src={product.imgPro}
                          className="w-24 h-24 rounded-xl"
                          alt=""
                        />
                      </td>
                      <td>{product.pricePro}</td>

                      <td>
                        <button
                          className="py-1 px-2 bg-black text-white"
                          onClick={() =>
                            mutate({
                              action: "DECREMENT",
                              productId: product.productId,
                            })
                          }
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        {product.quantity}
                        <input
                          type="number"
                          placeholder="update"
                          className="border w-20 h-6 m-auto"
                          onInput={(e) =>
                            handleQuantity(
                              product.productId,
                              e as ChangeEvent<HTMLInputElement>
                            )
                            
                          }
                        />
                        <button
                          className="py-1 px-2 bg-black text-white"
                          onClick={() =>
                            mutate({
                              action: "INCREMENT",
                              productId: product.productId,
                            })
                          }
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </td>

                      <td>{product.pricePro * product.quantity}</td>
                      <td>
                        {" "}
                        <button
                          className="py-1 px-2 rounded-lg bg-green-500 text-white"
                          onClick={() => handleDeleteClick(product.productId)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="checkout-cart">
            <h3 className="title my-4 font-bold">Cart Totals</h3>
            <div className="subtotal">
              <span className="font-bold">Subtotal:</span>
              <span className="span">${calculateTotal()}đ</span>
            </div>
            <div className="total">
              <span className="font-bold">Total:</span>
              <span className="span">${calculateTotal()}đ</span>
            </div>
            <button className="mx-5 w-56">
              <Link className="link" to="/checkout">
                Check Out
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
