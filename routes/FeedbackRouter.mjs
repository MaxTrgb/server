import express from 'express';
import FeedbackController from '../controllers/FeedbackController.mjs';
const feedbackRouter = express.Router();

postRouter.get('/', FeedbackController.getAllFeedback);
postRouter.post('/', FeedbackController.createFeedback);
postRouter.delete('/:id', FeedbackController.deleteFeedback);

export default feedbackRouter;