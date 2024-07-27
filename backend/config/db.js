import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://projec:zqceO40Q83Cof8et@cluster0.fx9bp6m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(()=>{
            console.log("connected to databse")
        })
}
