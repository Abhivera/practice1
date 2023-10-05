const express = require("express");
const app = express();
require('dotenv').config()
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/twitter',(req,res)=>{
    res.send("Abhijit Verma")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please give me courage ...to move on </h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})