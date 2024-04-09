/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../common/hooks/cart/UseStorage";
import { UseProductQuery } from "../../common/hooks/product/UseProductQuery";
import { IProduct } from "../../common/interface/product";
import Swal from "sweetalert2";
import { useState } from "react";
import { Skeleton } from "antd";
const Product = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [user] = useLocalStorage("user", {});
  const token = user?.token;
  if (!token) {
    Swal.fire({
      icon: "warning",
      title: "Vui lòng đăng nhập!",
      position: "center",
      showConfirmButton: true,
      showCloseButton:false,
      timer: 3500,
      customClass: {
        popup: "my-toasts",
      },
    }).then(() => {
      navigate("/login");
    });
  }

  const userId = user?.user?._id;

  // console.log(token)
  // console.log(userId)

  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = UseProductQuery(currentPage);
  // console.log(data);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  // console.log(data);

  const { mutate: addToCart } = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: any;
      quantity: number;
    }) => {
      try {
        const { data } = await axios.post(
          `http://localhost:3000/carts/addtocart`,
          { userId, productId, quantity }
        );
        // console.log("produc:", data);
        queryClient.invalidateQueries({ queryKey: ["cart", userId] });
        return data;
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Thêm sản phẩm thành công!",
        position: "center",
        showConfirmButton: true,
        showCloseButton: false,
        timer: 1500,
        customClass: {
          popup: "my-toasts",
        },
      });
    },
  });

  return (
    <div className="page-product">
      <Skeleton loading={isLoading}>
        <div className="container">
          <div className="page-products">
            {data?.map((pro: IProduct, index: number) => (
              <div className="product-item" key={index}>
                <div className="product__thumbnail">
                  <img src={pro.thumbnail} alt="" />
                  <span className="product__sale">New</span>
                </div>
                <div className="product-content">
                  <h3 className="product__name">
                    <a href="" className="product__link">
                      {pro.namePro}
                    </a>
                  </h3>
                  <a className="product__cate">Stylish cafe chair</a>
                  <div className="product-price">
                    <span className="product-price__new">{pro.pricePro}đ</span>
                  </div>
                </div>
                <div className="product-content-extra">
                  <Link to={`/detail/${pro._id}`} className="btn__viewproduct">
                    View product
                  </Link>
                  <button
                    className="btn__addtocart"
                    onClick={() =>
                      addToCart({ productId: pro._id, quantity: 1 })
                    }
                  >
                    Add to cart
                  </button>
                  <div className="new-icon">
                    <span>
                      <i className="fa-solid fa-share-nodes"></i>Share
                    </span>
                    <span>
                      <i className="fa-solid fa-right-left"></i>
                    </span>
                    <span>
                      <i className="fa-regular fa-heart"></i>Like
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="next-page">
            <button
              className="next-page-shop"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button className="next-page-shop" disabled>
              {currentPage}
            </button>
            <button className="next-page-shop" onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </Skeleton>
    </div>
  );
};

export default Product;
