const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../verifyToken');

//UPDATE
router.put("/:id", verifyToken, userController.updateUser);

//DELETE
router.delete("/:id", verifyToken, userController.deleteUser);

//GET USER
router.get("/:id", userController.getUserById);

module.exports = router;
