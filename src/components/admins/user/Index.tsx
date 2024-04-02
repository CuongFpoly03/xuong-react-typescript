/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton } from "antd";
import UseQueryUser from "../../../hooks/user/UseQueryUser";
import { IUser } from "../../../interface/user";
import UserMutationUser from "../../../hooks/user/UserMutationUser";
import Swal from "sweetalert2";

const Index = () => {
  const { data, isLoading } = UseQueryUser();
  const { mutate: deleteUser } = UserMutationUser({
    action: "DELETE",
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

  const handleDelete = (user: any) => {
    if (window.confirm("bạn có muốn xoá user không ?")) {
      console.log(user)
      deleteUser(user);
    }
  };
  return (
    <div className="user">
      <Skeleton loading={isLoading}>
        <h1 className="font-bold text-center my-10 text-4xl ">USERS</h1>
        <div>
          <table className="border-2 border-black m-auto">
            <tr className="border-2 border-black">
              <th className="border-2 border-black py-3">STT</th>
              <th className="border-2 border-black py-3">USERNAME</th>
              <th className="border-2 border-black py-3">EMAIL</th>
              <th className="border-2 border-black py-3">PASSWORD</th>
              <th className="border-2 border-black py-3">ROLE</th>
              <th className="border-2 border-black py-3">ACTION</th>
            </tr>
            {data?.map((item: IUser, index: number) => (
              <tr className="border-2 border-black" key={item._id}>
                <td className="border-2 border-black py-3">{index + 1}</td>
                <td className="border-2 border-black py-3">{item.username}</td>
                <td className="border-2 border-black py-3">{item.email}</td>
                <td className="border-2 border-black py-3">{item.password}</td>
                <td className="border-2 border-black py-3">1</td>
                <td className="border-2 border-black py-3">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="border-2 border-red-700 px-6 py-2 m-2 rounded font-bold bg-red-700 "
                  >
                    Del
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Skeleton>
    </div>
  );
};

export default Index;
