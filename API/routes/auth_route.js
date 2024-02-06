import express from "express";
import {signin, signup } from "../controller/auth_controller.js";

const router = express.Router();
router.post("/signup" , signup);
router.get("/signup" , (req,res)=>{
    console.log("bhetla re");
});
router.post("/signin" , signin); //connection with insomia
export default router;