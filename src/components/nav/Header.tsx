import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menushow, setMenushow] = useState(false);
  const toggleResponsiveMenu = () => {
    setMenushow(!menushow);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/">
            <img src="https://picsum.photos/id/3/150/50" alt="" />
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
                <Link to="/about" className="main-menu__link">
                  About
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/contact" className="main-menu__link">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
