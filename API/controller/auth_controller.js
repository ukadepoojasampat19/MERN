import User from "../models/user_models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
    //request get from browser

    //to store in database
    const { username, email, password } = req.body;
    const hasedPassword = bcryptjs.hashSync(password, 10);/*The 10 represents the number of salt rounds, which determines the computational cost of processing the data */

    const newUser = new User({ username, email, password: hasedPassword  });
    try{
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
        
    }
    catch(error){
       // res.status(500).json(error.message);
       //next(errorHandler(550, "error from the function"));
       next(error);
    }
    

};

export const signin = async (req, res, next) =>{
 const { email, password } = req.body;
 try{
    const validuser = await User.findOne({email});
    if(!validuser)
    {
        return next(errorHandler(404, "User not found"));
       
    }
    const validPassword = bcryptjs.compareSync(password, validuser.password);
    if(!validPassword)
    {
        return next(errorHandler(401, "wrong credential!")); 
    }    
   // const token = jwt.sign({id: validuser._id}, process.env.JWT_SECRET);
   const {password: pass, ...rest } = validuser._doc;
    res
        .cookie("access_token",token, { httpOnly:true})
        .status(200)
        .json(rest)
    }
 catch(error)
 {
    next(error);
 }
};