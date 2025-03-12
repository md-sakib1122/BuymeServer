const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongo connection established');

    }catch(err){
       console.log(err);
    }
}
module.exports = connectDB;