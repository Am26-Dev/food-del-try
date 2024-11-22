import "./appdownload.css";
import { assets } from "../../assets/assets";

export const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h2>Download the Food App for a Better Experience</h2>
      <div className="app-download-platform">
        <img src={assets.playstore} alt="Play Store" />
        <img src={assets.appstore} alt="App Store" />
      </div>
    </div>
  );
};
