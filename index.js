

require('dotenv').config();
const express = require("express");
const db=require("./db/connect")


const productRoutes=require("./routes/product.routes")
const app = express();

app.use(express.json());

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