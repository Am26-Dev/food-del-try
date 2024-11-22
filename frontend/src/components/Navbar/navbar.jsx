import React, { useContext, useState, useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <a href="/">
        <img src="/logo.jpg" alt="Logo" className="logo" />
      </a>

      {/* navbar menu section */}
      <ul className="navbar-menu">
        <a href="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</a>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
      </ul>

      {/* navbar right section */}
      <div className="navbar-right">
        <div className="navbar-icons">
          <SearchIcon className="navbar-icon" />
          <Link to="/cart" className="navbar-icon">
            <ShoppingCartIcon />
            {getTotalCartAmount() ? <span className="cart-notify">{getTotalCartAmount()}</span> : null}
          </Link>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)} className="login-btn">Sign in</button>
        ) : (
          <div className="navbar-profile">
            <i className="fa-solid fa-user"></i>
            <div className="nav-profile-dropdown">
              <p onClick={Logout}>Logout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
