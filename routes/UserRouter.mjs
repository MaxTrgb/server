import UserController from "../controllers/UserController.mjs";
import express from 'express';

const userRouter = express.Router();

userRouter.post('/api/register', UserController.register);

export default userRouter;
