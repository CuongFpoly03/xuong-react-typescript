import { useMutation } from "@tanstack/react-query"
import { IProduct, Inputs } from "../../interface/product"
import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form";

type Useproductmutation = {
    actions: "CREATE" | "UPDATE" | "DELETE",
    onSuccess?: () => void;
}
const UseproductMutation = ({actions, onSuccess}: Useproductmutation) => {
  const {mutate, ...rest} = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async(product:IProduct | any) => {
        switch(actions) {
            case "CREATE" : 
            await axios.post(`http://localhost:3000/products/add`, product);
            break;
            case "UPDATE" : 
            await axios.put(`http://localhost:3000/products/update/${product._id}`, product);
            break;
            case "DELETE" : 
            await axios.delete(`http://localhost:3000/products/delete/${product}`);
            break;
        }
    },
    onSuccess: () => {
        onSuccess && onSuccess();
    }
  });
  const form = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async(product) => {
    mutate(product);
  }
  return {form, onSubmit, mutate, ...rest}
}

export default UseproductMutation