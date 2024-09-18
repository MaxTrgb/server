import User from "../models/User.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.send(user);
    }
    catch(err){
        res.stsatus(400).send(err);
    }
} 

const login = async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});

        if(!user) return res.status(400).send("Invalid email or password");
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send("Invalid email or password");

        const token = jwt.sign({userId: user._id}, process.env.TOKEN_SECRET, {expiresIn: "1d"});
        res.send({user, token});
    }
    catch(err){
        res.status(400).send(err);
    }
}

const getAuthenticatedUser = async (req, res) => {
    try{
        const user = await User.findById(req.user.userId);
        res.send(user);
    }
    catch(err){
        res.status(400).send(err);
    }
}


export default { register, login, getAuthenticatedUser }