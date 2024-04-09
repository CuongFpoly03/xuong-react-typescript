import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UsequeryCategory from "../../../common/hooks/category/UsequeryCategory";
import { UserOneProductQuery } from "../../../common/hooks/product/UseProductQuery";
import UseproductMutation from "../../../common/hooks/product/UseproductMutation";
import { ICategory } from "../../../common/interface/category";

const Updateproduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { data: productData  } = UserOneProductQuery(id);
  console.log(productData);
  const { form, onSubmit } = UseproductMutation(
    {
      actions: "UPDATE",
      onSuccess: () => { 
        Swal.fire({
          icon: "success",
          title: "cập nhập phẩm thành công!",
          position: "top-end",
          showConfirmButton: true,
          showCloseButton: true,
          timer: 5000,
          customClass: {
            popup: "my-toast",
          },
        }).then(() => {
          navigate("/admin/product");
        });
      },
    }
  );
  // console.log(data);
  useEffect(() => {
    if (productData ) {
     form.reset(productData );
    }
  }, [id, form, productData ]);

  const { data: categoriesData } = UsequeryCategory();

  // const onSubmit: SubmitHandler<IProduct> = async (product) => {
  //   // console.log(product);
  //   // const fileInput = document.getElementById(
  //   //   "fileInput"
  //   // ) as HTMLInputElement | null;
  //   // const thumbnailInput = document.getElementById(
  //   //   "thumbnailInput"
  //   // ) as HTMLInputElement | null;
  //   // const files: File[] | null = fileInput
  //   //   ? Array.from(fileInput.files || [])
  //   //   : null;
  //   // const thumbnailFile: File | null =
  //   //   thumbnailInput && thumbnailInput.files ? thumbnailInput.files[0] : null;

  //   // if (!files || files.length === 0 || !thumbnailFile) {
  //   //   throw new Error("Please select files and thumbnail");
  //   // }

  //   // // Tạo một đối tượng FileList từ mảng File[]
  //   // const fileList = new DataTransfer();
  //   // files.forEach((file) => fileList.items.add(file));

  //   // // Truyền đối số fileList vào hàm uploadManyFiles
  //   // const uploadedUrls = await uploadManyFiles(fileList.files);
  //   // const thumbnailUrl = await uploadThumbnail(thumbnailFile);
  //   // // Thêm các URL hình ảnh và thumbnail vào đối tượng product
  //   // product.imgPro = uploadedUrls;
  //   // product.thumbnail = thumbnailUrl;

  //   // // Gửi dữ liệu sản phẩmzz với thumbnail lên server
  //   mutate(product);
  // };
  return (
    <div className="addcate">
      <h1 className="font-bold text-center my-10 text-4xl">UPDATE PRODUCT</h1>
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
          />
          <br />

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
            {categoriesData &&
              categoriesData.map((cate: ICategory) => (
                <option key={cate._id} value={cate._id}>
                  {cate.name}
                </option>
              ))}
          </select>
          {form.formState.errors.category && (
            <span className="text-red-500">Vui lòng nhập loại !</span>
          )}
          <br />
          <button
            className="ml-16 my-4 border-2 bg-black  text-white dark:bg-white dark:text-black font-bold text-base border-black p-1 rounded"
            type="submit"
          >
            update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updateproduct;
