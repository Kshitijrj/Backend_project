import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() =>{
    console.log("URL : " ,process.env.MONGODB_URL);
    console.log(DB_NAME);
    
    try {
          const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
          console.log(`\n MongoDb connected !! DB HOST: ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection error\n",error);
        process.exit(1)
    }
}
export default connectDB