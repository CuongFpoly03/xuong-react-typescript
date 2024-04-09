/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../interface/user";
import { useLocalStorage } from "../cart/UseStorage";
import Cookies from "js-cookie";
type useMutations = {
  action: "DELETE" | "LOGIN" | "LOGOUT";
  onSuccess?: () => void;
  onErrors?: () => void;
};
const UserMutationUser = ({ action, onSuccess, onErrors }: useMutations) => {
  const [, setUser] = useLocalStorage("user", {});
  const { mutate, ...rest } = useMutation({
    mutationFn: async (user: IUser | any) => {
      switch (action) {
        case "DELETE":
          await axios.delete(`http://localhost:3000/users/delete/${user}`);
          break;
        case "LOGIN":
          try {
            const response = await axios.post(
              `http://localhost:3000/auths/signin`,
              user
            );
            const data = response.data;
            setUser(data); // Lưu thông tin người dùng vào localStorage
            Cookies.set("token", data.token); // Lưu token vào cookie
            return data;
          } catch (error) {
            throw new Error("Đăng nhập thất bại"); // Ném lỗi để xử lý ở onError
          }
        case "LOGOUT":
          Cookies.remove("token");
          setUser(null);
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: () => {
      onErrors && onErrors();
    },
  });

  const form = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = (user) => {
    mutate(user);
  };
  const logout = () => {
    mutate({} as any);
  };
  return { form, onSubmit, logout, mutate, ...rest };
};

export default UserMutationUser;
