import { useNavigate, useParams } from "react-router-dom";
import UseProductQuery from "../../../hooks/product/UseProductQuery";
import UseproductMutation from "../../../hooks/product/UseproductMutation";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Updateproduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = UseProductQuery(id);
  const { form, onSubmit } = UseproductMutation({
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
  });
  useEffect(() => {
    if (data) {
      form.reset(data);
    }
  }, [id, form, data]);
  return (
    <div className="addcate">
      <h1 className="font-bold text-center my-10 text-4xl">UPDATE PRODUCT</h1>
      <div className="m-auto w-72">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              <input
                className="border-2 border-black p-2 rounded w-72"
                placeholder="namePro"
                type="text"
                {...form.register("namePro", { required: true })}
              />
              <br></br>
              {form.formState.errors.namePro && (
                <span className="text-red-500"> Vui lòng nhập namePro !</span>
              )}
              <br></br>
              <input
                className="border-2 border-black p-2 rounded w-72"
                placeholder="namePro"
                type="text"
                {...form.register("imgPro", { required: true })}
              />
              <br></br>
              {form.formState.errors.imgPro && (
                <span className="text-red-500">Vui lòng nhập namePro !</span>
              )}
              <br></br>
              <input
                className="border-2 border-black p-2 rounded w-72"
                placeholder="pricePro"
                type="number"
                {...form.register("pricePro", { required: true })}
              />
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
              />
              <br></br>
              {form.formState.errors.quantityPro && (
                <span className="text-red-500">
                  Vui lòng nhập quantityPro !
                </span>
              )}
              <br></br>
              <input
                className="border-2 border-black p-2 rounded w-72"
                placeholder="descriptionPro"
                type="text"
                {...form.register("descriptionPro", { required: true })}
              />
              <br></br>
              {form.formState.errors.descriptionPro && (
                <span className="text-red-500">
                  Vui lòng nhập descriptionPro !
                </span>
              )}

              <br></br>
              <button
                className="ml-16 my-4 border-2 bg-black  text-white dark:bg-white dark:text-black font-bold text-base border-black p-1 rounded"
                type="submit"
              >
                UPDATE VOCABULARY
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Updateproduct;
