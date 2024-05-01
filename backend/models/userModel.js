import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        email:{
            type: String,
            required:true,
            unique: true,
        },
        address:{
            type: String,
            require: true,
            trim: true
        },
        password: {
            type: String,
            require: true,
        },
        img:{
            type: String,            
            required: true
        }        
    },
    {timestamps: true}
)

const User = mongoose.model('users',Schema)
export default User;
