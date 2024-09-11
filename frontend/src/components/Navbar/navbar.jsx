import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({setShowLogin})=> {

    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);       

    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }
    return( 
        <div className="navbar">
            <Link to="/">
            <img src={assets.logo} alt="" className="logo" />
            </Link>

{/* navbar menu section */}
            <ul className="navbar-menu">
                <Link to='/' onClick={()=> setMenu("home")} className={menu==="home" ? "active" : ""}>Home</Link>

                <a href="#explore-menu" onClick={()=> setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</a>

                <a href="#app-download" onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-App</a>

                <a href="#footer" onClick={()=> setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact us</a>
            </ul>

{/* navbar right section */}
            <div className="navbar-right">
                <SearchIcon />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <ShoppingCartIcon />
                    </Link>

                    {/* {getTotalCartAmount()? <div className="dot"></div> : <></>} */}

                    <div className={getTotalCartAmount()? "dot" : ""}></div>

                    {/* <button onClick={() => setShowLogin(true)}>Sign in</button> */}
                    {!token?
                    <button onClick={() => setShowLogin(true)}>Sign in</button>
                    :<div className="navbar-profile">
                        <i className="fa-solid fa-user"></i>
                        <ul className="nav-profile-dropdown">
                            <li><i className="fa-solid fa-bag-shopping"></i><p>Orders</p></li>
                            <hr />
                            <li onClick={Logout}><i className="fa-solid fa-right-from-bracket"></i><p>Logout</p></li>
                        </ul>
                    </div>
                    }

                </div>
                
            </div>
        </div>
    )
} 

export default Navbar;