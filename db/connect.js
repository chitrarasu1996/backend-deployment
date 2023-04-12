const mongoose= require ("mongoose");



const db=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
   console.log('DB connection established.')
    }catch(er){
       console.log("errror while connecting")

    }
};

module.exports=db;