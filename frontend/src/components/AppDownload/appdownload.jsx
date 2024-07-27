import "./appdownload.css";
import { assets } from "../../assets/assets"

export const AppDownload = () => {
    return(
        <div className="app-download" id="app-download">
            <p>For better Experience Download <br /> Food App</p>
            <div className="app-download-platform">
                <img src={assets.playstore} alt="" />
                <img src={assets.appstore} alt="" />
            </div>
        </div>
    )
}