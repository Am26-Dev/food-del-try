import { useState } from "react";
import { ExploreMenu } from "../../components/ExploreMenu/exploremenu";
import { Header } from "../../components/Header/header";
import "./home.css";
import { FoodDisplay } from "../../components/FoodDisplay/fooddisplay";
import { AppDownload } from "../../components/AppDownload/appdownload";

export const Home = () => {

    const [ category, setCategory ] = useState("All")

    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload />
        </div>
    )
}