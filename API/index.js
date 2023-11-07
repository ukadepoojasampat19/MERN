import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();  //initilization 


mongoose.connect(process.env.MONGO).then(() =>
{
    console.log("connection to mongodb");
    
}).catch((err) =>
{
    console.error(err);
});
const app = express();

app.listen(3000, () =>
{
  console.log("Server is running on the port 3000");
}
);
