const express=require("express");

// routes path

const product=require("../models/product.model");

//calling router in express

const router=express.Router();

router.get("/products",(req,res)=>{
    try{
        product.find().then(data=>{
            res.status(200).send({
                message:"all products has been received",
                data:data
            })
        }).catch(er=>{
            res.status(400).send({message:"erroe while retriving data"})
        })
    }catch(er){
res.status(500).send({message:"errro on db"})
    }
});

router.get("/products/:productId",(req,res)=>{
    try{
        product.findById({_id:req.params.productId}).then(data=>{
            res.status(200).send({
                message:"all products has been received",
                data:data
            })
        }).catch(er=>{
            res.status(400).send({message:"erroe while retriving data"})
        })
    }catch(er){
res.status(500).send({message:"errro on db"})
    }
});


router.post("/products",(req,res)=>{
    try{
        let newProduct=new product(req.body);
        newProduct.save().then(data=>{
            res.status(201).send({message:"user has beeb added",data:data})
        }).catch((er)=>{
            res.status.send({message:"erro while post"})
        })
    }catch(er){
        res.status(500).send({message:"error while on app"})

    }
   
    
});


router.delete("/products/:productId",(req,res)=>{
    try{
        product.deleteOne({_id:req.params.productId}).then(data=>{
            res.status(200).send({message:"user has been deleted"})
        }).catch(er=>{
            res.status(400).send({message:"erroe while deleting data "})
        })
    }catch(er){
res.status(500).send({message:"erron  on app"})
    }
});


router.put("/products/:productId",(req,res)=>{
    try{
        product.findByIdAndUpdate({_id: req.params.productId}, {$set: req.body}).then(data=>{
            res.status(200).send({message:"user has been updted",userId:data._id,price:data.price})
        }).catch(er=>{
            res.status(400).send({message:"error on updating"})
        })
    }catch(er){
        res.status(404).send({message:"on app"})
    }
  
});
// router.put('/users/:userId', (req, res) => {
//     try{
//         Users.findByIdAndUpdate({_id: req.params.userId}, {$set: req.body}).then((data) => {
//             res.status(200).send({message: 'User has been updated successfully.', userId: data});
//         }).catch(error => {
//             res.status(400).send({message: 'Error while updating user.'});
//         })
//     }catch(error){
//         res.status(500).send({message: 'Internal Server Error'});
//     }
// });

module.exports=router