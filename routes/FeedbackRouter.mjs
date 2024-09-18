import express from 'express';
import FeedbackController from '../controllers/FeedbackController.mjs';
const feedbackRouter = express.Router();

feedbackRouter.get('/', FeedbackController.getAllFeedback);
feedbackRouter.post('/', FeedbackController.createFeedback);
feedbackRouter.delete('/:id', FeedbackController.deleteFeedback);

export default feedbackRouter;