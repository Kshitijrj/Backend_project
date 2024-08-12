import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        index:true,
    },
    profilephoto:{
        typr:String,
    },
    coverimage:{
        type:String,
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type:String,
    },
},{timestamps:true})
export const user=mongoose.model("user",userschema);