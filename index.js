

//require
require('dotenv').config();

const express = require("express");
const cors=require ("cors");

const db=require("./db/connect");
//require routes
const productRoutes=require("./routes/product.routes")

//calling
const app = express();

app.use(express.json());
app.use(cors());


//routes calling
//custom middlewar
app.use(productRoutes)









//
db();







app.get("/",(req,res)=>{
    res.send({message:"hello"})
});
///port from dotenv from 
const port =process.env.PORT 



app.listen(port,()=>{
    console.log(`app is runnning port ${port}` )
})