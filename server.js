import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';
import rateLimit from 'express-rate-limit'

let limitter=rateLimit({
    max:3,
    windowMs:60*60*1000,
    message:"We Are received to Many requests from this IP.please try after one hour "
})
app.use(limitter)

//app config
const app=express();
const port=process.env.PORT||4000
connectDB();
connectCloudinary();
//middlewares
app.use(express.json())
app.use(cors())


// api endpoint
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

//localhost:4000/admin/add-doctor
app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>console.log("Server Started",port))