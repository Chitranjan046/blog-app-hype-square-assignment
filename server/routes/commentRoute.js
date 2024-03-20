const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const verifyToken = require('../verifyToken');

//CREATE
router.post("/create", verifyToken, commentController.createComment);

//UPDATE
router.put("/:id", verifyToken, commentController.updateComment);

//DELETE
router.delete("/:id", verifyToken, commentController.deleteComment);

//GET POST COMMENTS
router.get("/post/:postId", commentController.getPostComments);

module.exports = router;
