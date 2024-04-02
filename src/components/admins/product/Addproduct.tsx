import UseproductMutation from "../../../hooks/product/UseproductMutation";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Addproduct = () => {
  const navigate = useNavigate();
  const {form, onSubmit} = UseproductMutation({
    actions: "CREATE",
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Thêm sản phẩm thành công!",
        position: "top-end",
        showConfirmButton: true,
        showCloseButton: true,
        timer: 1000,
        customClass: {
          popup: "my-toast",
        },
      }).then(() => {
        navigate("/admin/product");
      });
    }
  })
  return (
    <div className="addcate">
      <h1 className="font-bold text-center my-10 text-4xl dark:text-white">
        ADD PRODUCTS
      </h1>
      <div className="m-auto w-72">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="namePro"
            type="text"
            {...form.register("namePro", { required: true })}
          />{" "}
          <br></br>
          {form.formState.errors.namePro && (
            <span className="text-red-500">Vui lòng nhập namePro !</span>
          )}
          <br></br>
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="imgPro"
            type="text"
            {...form.register("imgPro", { required: true })}
          />{" "}
          <br></br>
          {form.formState.errors.imgPro && (
            <span className="text-red-500">Vui lòng nhập imgPro !</span>
          )}
          <br></br>
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="pricePro"
            type="number"
            {...form.register("pricePro", { required: true })}
          />{" "}
          <br></br>
          {form.formState.errors.pricePro && (
            <span className="text-red-500">Vui lòng nhập number !</span>
          )}
          <br></br>
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="quantityPro"
            type="number"
            {...form.register("quantityPro", { required: true })}
          />{" "}
          <br></br>
          {form.formState.errors.quantityPro && (
            <span className="text-red-500">Vui lòng nhập quantityPro !</span>
          )}
          <br></br>
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="descriptionPro"
            type="text"
            {...form.register("descriptionPro", { required: true })}
          />{" "}
          <br></br>
          {form.formState.errors.descriptionPro && (
            <span className="text-red-500">Vui lòng nhập descriptionPro !</span>
          )}
          <br></br>
          <button
            className="ml-16 my-4 border-2 bg-black  text-white dark:bg-white dark:text-black font-bold text-base border-black p-1 rounded"
            type="submit"
          >
            Add VOCABULARY
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
