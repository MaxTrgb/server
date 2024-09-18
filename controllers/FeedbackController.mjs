import Feedback from "../models/Feedback.mjs";

const getAllFeedback = async (req, res) => {
    const feedbacks = await Feedback.find({});
    res.send(feedbacks);
}

const createFeedback = async (req, res) => {
    try{
        const feedback = new Feedback(req.rating);
        await feedback.save();
        res.send(feedback);
    }
    catch(err){
        res.stsatus(400).send(err);
    }
}

const deleteFeedback = async (req, res) => {
    try{
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        res.send(feedback);
    }
    catch(err){
        res.stsatus(400).send(err);
    }

}

export default { getAllFeedback, createFeedback, deleteFeedback }