import User from "../models/user_models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
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

