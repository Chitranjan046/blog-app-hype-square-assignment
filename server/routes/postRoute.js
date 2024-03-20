const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const verifyToken = require('../verifyToken');

//CREATE
router.post("/create", verifyToken, postController.createPost);

//UPDATE
router.put("/:id", verifyToken, postController.updatePost);

//DELETE
router.delete("/:id", verifyToken, postController.deletePost);

//GET POST DETAILS
router.get("/:id", postController.getPostById);

//GET POSTS
router.get("/", postController.getPosts);

//GET USER POSTS
router.get("/user/:userId", postController.getUserPosts);

module.exports = router;
