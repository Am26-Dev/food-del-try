import "./footer.css";
import { assets } from "../../assets/assets"

export const Footer = () => {
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} className="footer-logo" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, neque a, consequuntur distinctio quibusdam tempora iure aspernatur ipsa quis omnis velit inventore laboriosam repellendus iste alias saepe incidunt numquam obcaecati?</p>
                    <div className="footer-social-icon">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>  

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+124234221</li>
                        <li>contact@logo.com</li>
                    </ul>
                </div>
            </div>  
            <hr />
            <p className="footer-copyright">
                Copyright 2024 &copy; Logo.com - All Right Reserved
            </p>    
        </div>
    )
}