import Footeradmin from "../../../components/admins/Footeradmin"
import Navadmin from "../../../components/admins/Navadmin"
import Listorder from "../../../components/admins/order/Listorder"

const Order = () => {
  return (
    <div className=" px-10">
      <Navadmin/>
      <Listorder/>
      <Footeradmin/>
    </div>
  )
}

export default Order
