import { useQuery } from "@tanstack/react-query"
import { getAllUser } from "../../services/User"

const UseQueryUser = () => {
    const {data, ...rest} = useQuery({
        queryKey: ["USERS"],
        queryFn: async() => {
            return await getAllUser();
        }
    })
    // console.log(data);
    return {data, ...rest};
}

export default UseQueryUser
