import { useQuery } from "@tanstack/react-query"
import { getAllCategory, getOneCategory } from "../../../services/Category";

const UsequeryCategory = (id?: number | string | undefined) => {
 const {data, ...rest} = useQuery({
    queryKey: ["CATEGORY",id],
    queryFn : async() => {
        return id ? await getOneCategory(id) : getAllCategory();
    }
 })
 return {data, ...rest};
}

export default UsequeryCategory
