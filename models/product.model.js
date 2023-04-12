const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true

    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    }
});

module.exports=mongoose.model("product",productSchema)