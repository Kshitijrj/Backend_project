import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoschema=new mongoose.Schema({
    videofile:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    views:{
        type:Number,
        default:0,
    },
    title:{
        type:String,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user,
    },
},{timestamps:true})
videoschema.plugin(mongooseAggregatePaginate)
export const video=mongoose.model("video",videoschema)

