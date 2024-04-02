import { useQuery } from "@tanstack/react-query";
import { getAllProduct, getOneProduct } from "../../services/Product";

const UseProductQuery = (id?: string | number | undefined) => {
  const { data, ...rest } = useQuery({
    queryKey: ["product_key", id],
    queryFn: async () => {
      return id ? await getOneProduct(id) : getAllProduct();
    },
  });
  return { data, ...rest };
};

export default UseProductQuery;
