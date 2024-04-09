import { useQuery } from "@tanstack/react-query"
import { getAllOrder, getOneOrder } from "../../../services/Order"

const UseQueryOrder = (id?: string) => {
    const {data, ...rest} = useQuery({
        queryKey : ['ORDER', id],
        queryFn: async() => {
            return  id ? await  getOneOrder(id) : getAllOrder;
        }
    })
    return {data, ...rest}
}

export default UseQueryOrder