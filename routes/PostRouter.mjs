import express from 'express';
import PostController from '../controllers/PostController.mjs';
const postRouter = express.Router();

postRouter.get('/', PostController.getAllPosts);

export default postRouter;