import User from "../models/User.mjs";

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


export default { register }