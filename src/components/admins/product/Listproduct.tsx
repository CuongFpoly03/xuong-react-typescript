import { Link } from "react-router-dom";
import UseProductQuery from "../../../hooks/product/UseProductQuery";
import { IProduct } from "../../../interface/product";
import UseproductMutation from "../../../hooks/product/UseproductMutation";
import Swal from "sweetalert2";

const Listproduct = () => {
  const { data } = UseProductQuery();
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
          <tr className="border-2 border-black">
            <th className="border-2 border-black p-3  ">STT</th>
            <th className="border-2 border-black p-3  ">NAMEPRODUCT</th>
            <th className="border-2 border-black p-3  ">IMAGEPRODUCT</th>
            <th className="border-2 border-black p-3  ">PRICEPRODUCT</th>
            <th className="border-2 border-black p-3  ">QUANTITYPRODUCT</th>
            <th className="border-2 border-black p-3  ">DESCRIPTION</th>
            <th className="border-2 border-black py-3 px-36  ">ACTION</th>
          </tr>
          {data?.map((item: IProduct, index: number) => (
            <tr className="border-2 border-black" key={item._id}>
              <td className="border-2 border-black p-3  ">{index + 1}</td>
              <td className="border-2 border-black p-3  ">{item.namePro}</td>
              <td className="border-2 border-black p-3  ">{item.pricePro} </td>
              <td className="border-2 border-black p-3  ">
                {" "}
                <img src={item.imgPro} className="h-32 w-32" alt="" />
              </td>
              <td className="border-2 border-black p-3  ">
                {item.quantityPro}
              </td>
              <td className="border-2 border-black p-3  ">
                {item.descriptionPro}
              </td>

              <td className="border-2 border-black p-3  ">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="border-2 border-red-700 px-6 py-2 m-2 rounded font-bold bg-red-700 "
                >
                  Del
                </button>
                <Link
                  className="border-2 border-green-700 p-2 m-2 rounded font-bold bg-green-700 "
                  to={`/admin/product/update/${item._id}`}
                >
                  Update
                </Link>
                <Link
                  className="border-2 border-blue-700 px-4 py-2 m-2 rounded font-bold   bg-blue-700 "
                  to="/admin/product/add"
                >
                  Add
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Listproduct;
