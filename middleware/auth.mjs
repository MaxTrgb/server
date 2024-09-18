import jwt from 'jsonwebtoken';
const auth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(400).send(err);
    }
}

export default auth;