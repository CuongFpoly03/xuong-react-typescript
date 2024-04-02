import Footeradmin from "../../../components/admins/Footeradmin"
import Navadmin from "../../../components/admins/Navadmin"
import User from '../../../components/admins/user/Index'
const Users = () => {
  return (
    <div className="px-10">
        <Navadmin/>
        <User/>
        <Footeradmin/>
    </div>
  )
}

export default Users