const express = require('express');
const cors=require('cors');
const { chatRouter } = require('./routes/code.route');
require("dotenv").config()
const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
 res.send("Hello World")
})
app.use("/test",chatRouter)


app.listen(process.env.PORT,()=>{
    console.log("Conected to server")
})
