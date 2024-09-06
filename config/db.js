const mongoose = require('mongoose');

async function connecrDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongo connection established');

    }catch(err){
       console.log(err);
    }
}
module.exports = connecrDB;