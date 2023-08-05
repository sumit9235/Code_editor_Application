const express = require("express")
const cors=require('cors')
const { codeRouter } = require('./routes/code.route')
const app=express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.use("/code",codeRouter)
app.listen(4500,()=>{
    console.log("Connected to server")
})