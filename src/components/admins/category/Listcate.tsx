/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { ICategory } from "../../../common/interface/category";
import Swal from "sweetalert2";
import UsequeryCategory from "../../../common/hooks/category/UsequeryCategory";
import UsemutationCategory from "../../../common/hooks/category/UsemutationCategory";

const Listcate = () => {
  const { data } = UsequeryCategory();
  const { mutate: deleteCategory } = UsemutationCategory({
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
  const handleDelete = (product : any) => {
    if(window.confirm("Bạn muốn xoá sản phẩm không ?")){
    deleteCategory(product);
    }
  }

  return (
    <div className="Category">
      <h1 className="font-bold text-center my-10 text-4xl ">CATEGORYS</h1>
      <div>
        <table className="border-2 border-black m-auto">
          <tr className="border-2 border-black">
            <th className="border-2 border-black p-10">STT</th>
            <th className="border-2 border-black p-10">NAME</th>

            <th className="border-2 border-black p-10">ACTION</th>
          </tr>
          {data?.map((item: ICategory, index: number) => (
            <tr className="border-2 border-black" key={item._id}>
              <td className="border-2 border-black p-10">{index + 1}</td>
              <td className="border-2 border-black p-10">{item.name}</td>
              <td className="border-2 border-black p-10">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="border-2 border-red-700 px-6 py-2 m-2 rounded font-bold bg-red-700 "
                >
                  del
                </button>
                <Link
                  className="border-2 border-green-700 p-2 m-2 rounded font-bold   bg-green-700 "
                  to={`/admin/category/update/${item._id}`}
                >
                  Update
                </Link>
                <Link
                  className="border-2 border-blue-700 px-4 py-2 m-2 rounded font-bold   bg-blue-700 "
                  to="/admin/category/add"
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

export default Listcate;
