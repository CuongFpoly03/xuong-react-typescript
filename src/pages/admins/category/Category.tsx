import Footeradmin from "../../../components/admins/Footeradmin"
import Navadmin from "../../../components/admins/Navadmin"
import Listcate from "../../../components/admins/category/Listcate"

const Category = () => {
  return (
    <div className="px-10">
      <Navadmin/>
      <Listcate/>
      <Footeradmin/>
    </div>
  )
}

export default Category
