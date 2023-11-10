import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user_route.js";
dotenv.config();  //initilization 

//const mongoose = require("mongoose");

//establishing a mongodbdatabase connection  |4
mongoose.connect(process.env.MONGO,{ useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
//|| above code is written nodejs

db.once("open", () => console.log("connected to database"));
const app = express();

app.listen(3000, () =>
{
  console.log("Server is running on the port 3000");
}
);
    
//create test AP 
//req: is the request taken from the user.
//res: message send back from the server.
/*app.get('/test', (_req, res) =>{
  res.send("Hello world ");
});*/

app.use('/API/user', userRouter); /*-> app.use() is used to coonect the middleware function to connect with the http*/