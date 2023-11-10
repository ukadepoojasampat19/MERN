import express from "express";
import { test_user } from "../controller/user_controller.js"; /* { } object destructuring {} symbol extract sepecfic model or function from the file  */ 
const userRouter = express.Router();

userRouter.get('/test', test_user);


export default userRouter;