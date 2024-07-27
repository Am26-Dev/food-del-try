import "./sidebar.css";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to="/add" className="sidebar-option">
                    <i className="fa-solid fa-plus"></i>
                    <p>Add Items</p>
                </NavLink>
                <NavLink to="/list" className="sidebar-option">
                    <i className="fa-solid fa-square-check"></i>
                    <p>List Items</p>
                </NavLink>
                <NavLink to="/order" className="sidebar-option">
                    <i className="fa-solid fa-square-check"></i>
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}