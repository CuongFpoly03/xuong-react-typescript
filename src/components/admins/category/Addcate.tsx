import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UsemutationCategory from "../../../common/hooks/category/UsemutationCategory";

const Addcate = () => {
  const navigate = useNavigate();
  const { form, onSubmit } = UsemutationCategory({
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
        navigate("/admin/category");
      });
    },
  });

  return (
    <div className="addcate">
      <h1 className="font-bold text-center my-10 text-4xl ">ADD CATEGORYS</h1>
      <div className="m-auto w-72">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="name"
            type="text"
            {...form.register("name", { required: true })}
          />{" "}
          <br></br>
          {form.formState.errors.name && (
            <span className="text-red-500">Vui lòng nhập name !</span>
          )}
          <br></br>
          <button
            className="ml-20 my-4 border-2 bg-black  text-white  font-bold text-base border-black p-1 rounded"
            type="submit"
          >
            Add category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcate;
