const Post = require('../models/post');

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.userId });
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addPost = async (req, res) => {
    try {
        const { title, body, device } = req.body;
        const post = new Post({ title, body, device, user: req.userId });
        await post.save();
        res.status(201).json({ message: 'Post added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { title, body, device } = req.body;
        await Post.findByIdAndUpdate(req.params.postId, { title, body, device });
        res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.postId);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
