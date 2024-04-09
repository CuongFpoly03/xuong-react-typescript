/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseproductMutation from "../../../common/hooks/product/UseproductMutation";
import { UseProductQuery } from "../../../common/hooks/product/UseProductQuery";
import React, { useState } from "react";
import { Pagination } from "antd";
import { IProduct } from "../../../common/interface/product";

const Listproduct: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = UseProductQuery(currentPage);
  // console.log(data);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  // console.log(data);
  const { mutate: deleteProduct } = UseproductMutation({
    actions: "DELETE",
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Xoá thành công !",
        position: "top-end",
        showConfirmButton: true,
        showCloseButton: true,
        timer: 1000,
        customClass: {
          popup: "my-toast",
        },
      }).then(() => {
        window.location.reload();
      });
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = (product: any) => {
    if (window.confirm("Bạn có chắc muốn xoá k ?")) {
      console.log(product);
      deleteProduct(product);
    }
  };

  return (
    <div className="Category">
      <h1 className="font-bold text-center my-10 text-4xl ">PRORUCTS</h1>
      <div>
        <table className="border-2 border-black m-auto w-96">
          <tr className="border-2 border-black text-xs">
            <th className="border-2 border-black p-3  ">STT</th>
            <th className="border-2 border-black p-3  ">NAMEPRODUCT</th>
            <th className="border-2 border-black p-3  ">PRICEPRODUCT</th>
            <th className="border-2 border-black p-3  ">THUMBNAIL</th>
            <th className="border-2  border-black px-10">IMAGEPRODUCT</th>
            <th className="border-2 border-black p-3  ">QUANTITYPRODUCT</th>
            <th className="border-2 border-black p-3  ">COLOR</th>
            <th className="border-2 border-black p-3  ">DESCRIPTION</th>
            <th className="border-2 border-black px-4">
              {" "}
              <Link
                className="border-2 border-blue-700  px-2 py-1 mx-2 rounded font-bold   bg-blue-700 "
                to="/admin/product/add"
              >
                Add
              </Link>
            </th>
          </tr>
          {data?.map((item: IProduct, index: number) => (
            <tr className="border-2 border-black" key={item._id}>
              <td className="border-2 border-black p-3  ">{index + 1}</td>
              <td className="border-2 border-black p-3  ">{item.namePro}</td>
              <td className="border-2 border-black p-3  ">{item.pricePro} </td>
              <td>
                {" "}
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  className="w-20 h-20 p-2"
                />
              </td>
              <td className="border-2 border-black p-3  ">
                {" "}
                {item.imgPro &&
                  item.imgPro.map((imgUrl: string, imgIndex: number) => (
                    <img
                      key={imgIndex}
                      src={imgUrl}
                      className="h-10 w-10 float-left m-1"
                      alt={`Image ${imgIndex + 1}`}
                    />
                  ))}
              </td>
              <td className="border-2 border-black p-3  ">
                {item.quantityPro}
              </td>
              <td className="border-2 border-black px-3  ">
                <span
                  style={{ backgroundColor: item.color, border: item.color }}
                  className="border px-3 py-1 rounded-full"
                ></span>
              </td>
              <td className="border-2 border-black p-3  ">
                {item.descriptionPro}
              </td>
              <td className="border-2 border-black p-3  ">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="border-2 border-black px-2 py-1 text-white rounded font-bold bg-black"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link
                  className="text-white border-2 border-black m-1 px-2 py-1 rounded font-bold bg-black"
                  to={`/admin/product/update/${item._id}`}
                >
                  <i className="fa-solid fa-angles-up"></i>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="text-center my-5">
        <Pagination
          defaultCurrent={1}
          total={40}
          current={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Listproduct;
