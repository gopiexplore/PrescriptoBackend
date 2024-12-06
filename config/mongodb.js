import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        mongoose.connection.on('connected',()=>console.log("Database Connected"))
        const mongoURI = `${process.env.MONGO_URL}prescripto`; // Safely append the database name
        await mongoose.connect(mongoURI)
    }
    catch(error){
        console.log(error)
    }
    
    
}
export default connectDB;