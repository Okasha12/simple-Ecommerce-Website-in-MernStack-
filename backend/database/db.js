import mongoose from "mongoose";

const dbConnetion = async() =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/amazonDb")
        console.log(`Database connected successfully on ${mongoose.connection.host}`.bgGreen)
    } catch (error) {
        console.log(`Error in DB connection`.bgRed)
    }
}

export default dbConnetion;