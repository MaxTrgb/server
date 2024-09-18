import Post from "../models/Post.mjs";

const getAllPosts = async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
}

const createPost = async (req, res) => {
    try{
        const post = new Post(req.body);
        await post.save();
        res.send(post);
    }
    catch(err){
        res.stsatus(400).send(err);
    }
}

const deletePost = async (req, res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        res.send(post);
    }
    catch(err){
        res.stsatus(400).send(err);
    }

}

const updatePost = async (req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.send(post);
    }
    catch(err){
        res.stsatus(400).send(err);
    }
}

const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.send(post);
}

export default { getAllPosts, createPost, deletePost, updatePost, getPost }