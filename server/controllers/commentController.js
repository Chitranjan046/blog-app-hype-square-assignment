const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getPostComments = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
};
