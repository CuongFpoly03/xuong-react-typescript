import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import UserMutationUser from "../../hooks/user/UserMutationUser";
import Swal from "sweetalert2";

const Header = () => {
  const navigate = useNavigate();
  const [menushow, setMenushow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  // Sử dụng hàm logout từ hook UserMutationUser
  const { logout } = UserMutationUser({
    action: "LOGOUT",
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Logout thành công!",
        position: "center",
        showConfirmButton: true,
        showCloseButton: true,
        timer: 2000,
        customClass: {
          popup: "my-toasts",
        },
      }).then(() => {
        navigate("/login");
      });
    },
  });
  console.log(logout);
  const toggleResponsiveMenu = () => {
    setMenushow(!menushow);
  };
  console.log(isLoggedIn);
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link className="img" to="/">
            <img
              src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2DqAHBGQPhsp3vg6oRpqFa4vGXSfxjq-OcVuimFF9JchzrV9pcOkpcyHKAJGLxS3t6k2f0i1Pe8kai3EdZKzmgVVv~YUk7kwSDJbRNVP74rOvx214dtKeT5yt6ySy24SLgeklaWJPTi8moS9kHhhRGQzNUEph172ADZI9Saa3ZXiiFUHQSU~D51PzwATxQeTZmdE66pKgiobNgCtbHMIDzuE0OC~Dwc75FIiJDYUql8iV4hRNe6~Wk9LOm-28QTeakfRJw4T7a9xrlsZWymN8yyyiC9b6N-hg7KIvg-J8QhlOqIyvokg35uJsjmAPGasOluY4u7zZW4wl8kulPEMQ__"
              alt=""
            />
            <span> Furniro</span>
          </Link>
          <nav className="main-menu">
            <ul className="main-menu__list">
              <li className="main-menu__item">
                <Link to="/" className="main-menu__link">
                  Home
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/shop" className="main-menu__link">
                  Shop
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/" className="main-menu__link">
                  About
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/" className="main-menu__link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="menu-container">
              <div
                className="menu-icon"
                id="menuIcon"
                onClick={toggleResponsiveMenu}
              >
                <div className="user">
                  <Link className="link" to="/login">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                </div>
                <div className="search">
                  <span>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
                <div className="wishlist">
                  <span>
                    <i className="fa-solid fa-heart"></i>
                  </span>
                </div>
                <div className="cart">
                  <Link className="link" to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                </div>
                <div className="menu-chilrend">
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
              {menushow && (
                <div className="responsive-menu" id="responsiveMenu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
          <div className="header-block">
            <div className="user">
              {isLoggedIn ? (
                <>
                  <div className="userbig">
                    <img
                      src="https://yt3.ggpht.com/_vRhJS1zKZkAvIwer7N10pXl4MnIyC8NPEX-2hinJzkwJ6KLrWmdk4u9NX5mvzzATc_-Zx1JNg=s88-c-k-c0x00ffffff-no-rj"
                      className="w-10 ml-10 h-10 rounded-3xl "
                      alt=""
                    />
                    <div className="absolute border-2 hidden border-black bg-black text-white rounded right-36 text-center">
                      <li className="list-none px-4 py-1">
                        <button
                          className="list-none px-4 py-1 hover:border-b-2 hover:border-solid hover:border-white"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </li>
                      <li className="list-none px-4 py-1">
                        <Link
                          className="hover:border-b-2 hover:border-solid hover:border-white "
                          to="/dashbord"
                        >
                          Đơn hàng
                        </Link>
                      </li>
                      <li className="list-none px-4 py-1">
                        <Link
                          className="hover:border-b-2 hover:border-solid hover:border-white "
                          to="/dashbord"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li className="list-none px-4 py-1">
                        <Link
                          className="hover:border-b-2 hover:border-solid hover:border-white "
                          to="/dashbord"
                        >
                          Info users
                        </Link>
                      </li>
                    </div>
                  </div>
                </>
              ) : (
                <Link className="link" to="/login">
                  <i className="fa-solid fa-user"></i>
                </Link>
              )}
            </div>
            <div className="search">
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
            <div className="wishlist">
              <span>
                <i className="fa-solid fa-heart"></i>
              </span>
            </div>
            <div className="cart">
              <Link className="link" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
