/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import UseQueryOrder from "../../../common/hooks/order/UseQueryOrder";
import IOrder from "../../../common/interface/order";
import axios from "axios";
import Swal from "sweetalert2";

const Listorder = () => {
  const { data } = UseQueryOrder();
  console.log(data);
  const { mutate: deleteOrder } = useMutation({
    mutationFn: async (order: IOrder) => {
      await axios.delete(`http://localhost:3000/orders/${order}`);
    },
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

  const delOrder = async (product: any) => {
    if (window.confirm("bạn có muốn xoá sản phẩm không ?")) {
      deleteOrder(product);
    }
  };

  return (
    <div className="Category">
      <h1 className="font-bold text-center my-10 text-4xl ">Order</h1>
      <div>
        <table className="border-2 border-black m-auto w-96">
          <tr className="border-2 border-black">
            <th className="border-2 border-black p-3  ">STT</th>
            <th className="border-2 border-black p-3  ">userId</th>
            <th className="border-2 border-black p-3  ">items</th>
            <th className="border-2 border-black p-3  ">orderNumber</th>
            <th className="border-2 border-black p-3  ">customerName</th>
            <th className="border-2 border-black p-3  ">totalPrice</th>
            <th className="border-2 border-black py-3 ">tatus</th>
            <th className="border-2 border-black py-3  ">createdAt</th>
            <th className="border-2 border-black py-3  ">Action</th>
          </tr>
            return (
              <tr className="border-2 border-black">
                <td className="border-2 border-black p-3  "></td>
                <td className="border-2 border-black p-3  "></td>
                <td className="border-2 border-black p-3  "></td>
                <td className="border-2 border-black p-3  "></td>
                <td className="border-2 border-black p-3  "></td>
                <td className="border-2 border-black p-3  "></td>
                <td className="border-2 border-black p-3  "></td>
                <td className="border-2 border-black p-3  "></td>

                <td className="border-2 border-black p-3  ">
                  <button
                    className="border-2 border-red-700 px-6 py-2 m-2 rounded font-bold bg-red-700"
                    onClick={() => delOrder()}
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
        </table>
      </div>
    </div>
  );
};

export default Listorder;
