import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'

import paymentRouter from './Routes/payment.js'
import cors from 'cors';

const app = express();

app.use(bodyParser.json())

app.use(cors({
  origin:true,
  methods:[ "GET","POST","PUT","DELETE"],
  credentials:true
}))

// home testing route
app.get('/',(req,res)=>res.json({messge:'This is home route'}))

// user Router
app.use('/api/user',userRouter)

// product Router
app.use('/api/product',productRouter)

// cart Router
app.use('/api/cart',cartRouter)

// address Router
app.use('/api/address',addressRouter)

// payment Router
app.use('/api/payment',paymentRouter)

mongoose.connect(
  "mongodb+srv://shrivastavrounak6:uvaJIkHRoBJyNqWZ@cluster0.uwi50ea.mongodb.net/",{
    dbName:"Ecommerce_Website"
  }
).then(()=>console.log("MongoDB Connected Successfully...!")).catch((err)=>console.log(err));

const port = 1000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))