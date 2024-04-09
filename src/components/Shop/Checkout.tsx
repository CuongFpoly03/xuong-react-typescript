/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import UseCart from "../../common/hooks/cart/UseCart";
import { useLocalStorage } from "../../common/hooks/cart/UseStorage";
import axios from "axios";
import { ICheckout } from "../../common/interface/user";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import IOrder from "../../common/interface/order";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  // const queryClient = useQueryClient();
  const { data: cartData, calculateTotal, resetCart } = UseCart();
  console.log(cartData);
  const navigate = useNavigate();
  const [user] = useLocalStorage("user", {});
  console.log(user);
  const userId = user?.user?._id;
  // console.log(userId);
  const [userInfo, setUserInfo] = useState<ICheckout | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          const response = await axios.get<ICheckout>(
            `http://localhost:3000/users/${userId}`
          );
          const userData = response.data;
          setUserInfo(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  console.log(userInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICheckout>();
  // console.log(userInfo)
  const { mutate } = useMutation({
    mutationFn: async (order: IOrder) => {
      const { data } = await axios.post(
        "http://localhost:3000/orders/add",
        order
      );
      return data;
    },
    onSuccess: () => {
      localStorage.removeItem("cartItems");
      Swal.fire({
        icon: "success",
        title: "bạn đã order thành công !",
        position: "center",
        showConfirmButton: true,
        showCloseButton: false,
        timer: 3500,
        customClass: {
          popup: "my-toasts",
        },
      }).then(() => {
        resetCart();
        navigate("/shop");
      });
    },
  });

  const onSubmit: SubmitHandler<ICheckout> = (data: ICheckout | any) => {
    console.log(data);
    try {
      const orderData: any = {
        userId: "66043acef6505d441efa5ace",
        // items: cartData.products,
        items: [
          {
            _id: "661411105361c89170a7c28f",
            name: "Product 1",
            price: 10,
            quantity: 2,
          },
          {
            _id: "661411105361c89170a7c290",
            name: "Product 2",
            price: 15,
            quantity: 1,
          },
        ],
        orderNumber: 18,
        customerName: "John Doe",
        totalPrice: calculateTotal(),
        status: "pending",
      };
      mutate(orderData);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="container-checkout">
      <div className="container">
        <div className="all-checkout">
          <div className="checkout-left">
            <h3>Bingling details</h3>
            <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputlname">
                <label htmlFor="">Username</label>
                <br></br>
                <input
                  type="text"
                  defaultValue={userInfo?.user?.username ?? ""}
                  {...register("username")}
                  readOnly
                />
                <br />
              </div>
              <div className="inputlname">
                <label htmlFor="">Phone</label>
                <br></br>
                <input
                  defaultValue={userInfo?.user?.phone ?? ""}
                  type="number"
                  {...register("phone")}
                  readOnly
                />
              </div>
              <div className="inputlname">
                <label htmlFor="">Email address</label>
                <br></br>
                <input
                  type="email"
                  defaultValue={userInfo?.user?.email ?? ""}
                  {...register("email")}
                  readOnly
                />
              </div>
              <div className="inputlname">
                <label htmlFor="">Address</label>
                <br></br>
                <input
                  type="type"
                  value={userInfo?.user?.address ?? ""}
                  {...register("address")}
                  readOnly
                />

                <br />
              </div>
              <div className="inputlname">
                <label htmlFor="">CustomName</label>
                <br></br>
                <input
                  type="type"
                  {...register("customerName", { required: true })}
                />
                {errors.customerName && (
                  <span className="text-red-600">
                    This field is required customerName !
                  </span>
                )}
                <br />
              </div>
              <div className="inputlname">
                <label htmlFor="">orderNumber</label>
                <br></br>
                <input
                  type="number"
                  {...register("orderNumber", { required: true })}
                />
                {errors.orderNumber && (
                  <span className="text-red-600">
                    This field is required orderNumber !
                  </span>
                )}
                <br />
              </div>
              {/* <input
                type="hidden"
                value={JSON.stringify(data.products)}
                {...register("items")}
              />
               */}
              <div className="inputlname">
                <label htmlFor="">Total Price</label>
                <br></br>
                <input type="number" value={calculateTotal()} 
                  {...register("totalPrice")}
                readOnly />
              </div>

              <button
                type="submit"
                className="px-3 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white"
              >
                Place order
              </button>
            </form>
          </div>
          <div className="checkout-right">
            <div className="checkout-new">
              <div className="mt-32">
                <table className="border w-100% text-center text-xs">
                  <thead>
                    <tr className="border border-[#f9f1e7] bg-[#f9f1e7] ">
                      <th className="py-4 px-9">#</th>
                      <th className="py-4 px-9">Name product</th>
                      <th className="py-4 px-9">Img </th>
                      <th className="py-4 px-9">Price</th>
                      <th className="py-4 px-10 w-56">Quantity</th>
                      <th className="py-4 px-9">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData?.products.map((product: any, index: number) => {
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
                          <td>{product.quantity}</td>
                          <td>{product.pricePro * product.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="all-right-checkout my-4">
                <div className="product-checkout-one">
                  <h3 className="text-xl font-bold">Product</h3>
                  <p className="text-xl font-bold">Total</p>
                </div>
                <div className="product-checkout-two my-2">
                  <h3 className="text-xl font-bold">Subtotal</h3>
                  <p>{calculateTotal()}đ</p>
                </div>
              </div>
              <div className="direc-bank">
                <li>Direct Bank Transfer</li>
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <div className="radio-new">
                  <input type="radio" />
                  <label htmlFor="">Direct Bank Transfer</label>
                  <br></br>
                  <input type="radio" />
                  <label htmlFor="">Cash On Delivery</label>
                </div>
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
