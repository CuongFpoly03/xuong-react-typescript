/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UsequeryCategory from "../../../common/hooks/category/UsequeryCategory";
import UseproductMutation from "../../../common/hooks/product/UseproductMutation";
import { ICategory } from "../../../common/interface/category";

const Addproduct = () => {
  const navigate = useNavigate();
  const { form, onSubmit } = UseproductMutation({
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
    },
  });

  const { data: categories } = UsequeryCategory();


 
  
  return (
    <div className="addcate">
      <h1 className="font-bold text-center my-10 text-4xl dark:text-white">
        ADD PRODUCTS
      </h1>
      <div className="m-auto w-72">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="namePro"
            type="text"
            {...form.register("namePro", { required: true })}
          />
          <br />
          {form.formState.errors.namePro && (
            <span className="text-red-500">Vui lòng nhập namePro !</span>
          )}
          <br />
          <input
            type="file"
            accept="image/*"
            id="thumbnailInput"
            {...form.register("thumbnail", { required: true })}
          />
          <br />
          {form.formState.errors.thumbnail && (
            <span className="text-red-500">Vui lòng nhập thumbnail !</span>
          )}
          <br />
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            multiple
            {...form.register("imgPro", { required: true })}
          /><br/>
         
          <br />
          {form.formState.errors.imgPro && (
            <span className="text-red-500">Vui lòng nhập imgPro !</span>
          )}
          <br />
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="pricePro"
            type="number"
            {...form.register("pricePro", { required: true })}
          />
          <br />
          {form.formState.errors.pricePro && (
            <span className="text-red-500">Vui lòng nhập number !</span>
          )}
          <br />
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="quantityPro"
            type="number"
            {...form.register("quantityPro", { required: true })}
          />
          <br />
          {form.formState.errors.quantityPro && (
            <span className="text-red-500">Vui lòng nhập quantityPro !</span>
          )}
          <br />
          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="color"
            type="color"
            {...form.register("color", { required: true })}
          />
          <br />
          {form.formState.errors.color && (
            <span className="text-red-500">Vui lòng nhập color !</span>
          )}
          <br />

          <input
            className="border-2 border-black p-2 rounded w-72"
            placeholder="descriptionPro"
            type="text"
            {...form.register("descriptionPro", { required: true })}
          />
          <br />
          {form.formState.errors.descriptionPro && (
            <span className="text-red-500">Vui lòng nhập descriptionPro !</span>
          )}
          <br />
          <select
            className="border-2 border-black p-2 rounded w-72"
            id=""
            {...form.register("category", { required: true })}
          >
            <option value="">Mời bạn nhập loại</option>
            {categories?.map((cate: ICategory) => (
              <option key={cate._id} value={cate._id}>
                {cate.name}
              </option>
            ))}
          </select>
          <br />
          {form.formState.errors.category && (
            <span className="text-red-500">Vui lòng nhập loại !</span>
          )}
          <br />
          <button
            className="ml-16 my-4 border-2 bg-black  text-white dark:bg-white dark:text-black font-bold text-base border-black p-1 rounded"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
