import { Link } from "react-router-dom";

const Navadmin = () => {
 
  return (
    <div className="admin bg-whit">
      <div className="top-nav grid grid-cols-2">
        <div className="py-2">
          <p className="text-3xl font-bold italic">
            Manager Products
          </p>
        </div>
        <div className="py-2">
          <ul className="flex float-right">
            <li className="text-4xl mr-10 hoverbigadmin">
              <Link className="hoverbigadmin" to="">
                <i className="fa-solid fa-bars"></i>
              </Link>
              <div className="function absolute hidden w-44 bg-black right-44  text-white border-2 rounded border-black border-solid text-center">
                <li className="my-2 font-bold text-base">
                  <Link
                    className="hover:border-b-2 hover:border-solid hover:border-black"
                    to="/admin/product"
                  >
                    Product
                  </Link>
                </li>
                <li className="my-2 font-bold text-base">
                  <Link
                    className="hover:border-b-2 hover:border-solid hover:border-black"
                    to="/admin/category"
                  >
                    Category
                  </Link>
                </li>
                <li className="my-2 font-bold text-base">
                  <Link
                    className="hover:border-b-2 hover:border-solid hover:border-black"
                    to="/admin/user"
                  >
                    Users
                  </Link>
                </li>
              </div>
            </li>
            <li className="text-4xl">
              <Link  to="">
                <i className="fa-solid fa-circle-half-stroke"></i>
              </Link>
            </li>
            <li className="text-white w-32 hoverbig">
              <img
                src="https://yt3.ggpht.com/_vRhJS1zKZkAvIwer7N10pXl4MnIyC8NPEX-2hinJzkwJ6KLrWmdk4u9NX5mvzzATc_-Zx1JNg=s88-c-k-c0x00ffffff-no-rj"
                className="w-10 ml-10 h-10 rounded-3xl hoverchildren"
                alt=""
              />
              <div className="absolute w-32 bg-black text-white  hidden r-0  border-2 rounded border-black border-solid text-center">
                <li className="my-2 font-bold text-base">
                  <Link
                    className="hover:border-b-2 hover:border-solid hover:border-black "
                    to="/"
                  >
                    Logout
                  </Link>
                </li>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navadmin;
