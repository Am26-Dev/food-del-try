// import dotenv from "dotenv";

// if(process.env.Node_ENV != "production") {
//     dotenv.config()
// }

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js"
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.get("/" ,(req, res) =>{
    res.send("this is the page")
})

app.listen(port , ()=>{
    console.log("App listening on http://localhost:8080/")
})

