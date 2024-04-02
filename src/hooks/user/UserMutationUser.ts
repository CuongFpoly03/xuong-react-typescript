/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { IUser } from "../../interface/user";
import axios from "axios";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
type useMutations = {
  action: "DELETE" | "LOGIN" | "LOGOUT";
  onSuccess?: () => void;
  onErrors?: () => void;
};
const UserMutationUser = ({ action, onSuccess, onErrors }: useMutations) => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (user: IUser | any) => {
      switch (action) {
        case "DELETE":
          await axios.delete(`http://localhost:3000/users/delete/${user}`);
          break;
        case "LOGIN":
          const response = await axios.post(
            `http://localhost:3000/auths/signin`,
            user
          );
          const token = response.data.token;
          // lưu token vào cooki
          // console.log(token);
          Cookies.set("token", token);
          break;
        case "LOGOUT":
          Cookies.remove("token");
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
