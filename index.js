const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes/index.js');
var cookieParser = require('cookie-parser')

const app = express();
app.use(cors({
   origin : process.env.FRONTEND_URL,
   credentials:true,
}));
app.use(express.json());
app.use(cookieParser(process.env.TOKEN_SECRET_KEY));
app.use('/api',router);


const PORT = process.env.PORT ||8080;

 connectDB().then(() => {     // If database is connected succesfully then only server is started
    app.listen(PORT, ()=>{
        console.log('server is running',PORT);
       });       
 }).catch((err) => {
    console.log(err.message);
 });

