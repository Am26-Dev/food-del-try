import { assets } from "../../assets/assets";
import "./navbar.css";

export const Navbar = () =>{
    return(
        <div className="navbar">
            <img className="logo" src={assets.logo} />
            <i className="profile fa-regular fa-user"></i>
        </div>
    )
} 