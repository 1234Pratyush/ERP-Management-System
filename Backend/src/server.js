import express from 'express';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieparser());

const PORT=process.env.PORT || 3000;

const startServer = async()=>{
    try{
       app.listen(PORT,()=>{
        console.log("Server is running on port",PORT)
       })
    }
    catch(err){
        console.log("Server connection error",err.message)
    }
}

startServer()


