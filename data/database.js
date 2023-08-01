import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"Api",
    })
    .then((c)=> console.log(`Db connected with ${c.connection.host}`))
    .catch((e)=> console.log(e));
}
    
