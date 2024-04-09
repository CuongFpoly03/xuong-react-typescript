import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { insntance } from "../../../configs/instance";
import { ICategory } from "../../interface/category";
import { Inputs } from "../../interface/category";

type useMutonCate = {
  actions: "CREATE" | "UPDATE" | "DELETE";
  onSuccess?: () => void;
};
const UsemutationCategory = ({ actions, onSuccess }: useMutonCate) => {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (category: ICategory) => {
      switch (actions) {
        case "CREATE":
          await insntance.post("categorys/add", category);
          break;
        case "UPDATE":
          await insntance.put(`/categorys/update/${category._id}`, category);
          break;
        case "DELETE":
          await insntance.delete(`/categorys/delete/${category._id}`);
      }
    },
    onSuccess: () => {
      onSuccess && onSuccess();
    },
  });

  const form = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (product) => {
    mutate(product);
  };

  return { form, onSubmit, mutate, ...rest };
};

export default UsemutationCategory;
