const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//REGISTER
router.post("/register", authController.registerUser);

//LOGIN
router.post("/login", authController.loginUser);

//LOGOUT
router.get("/logout", authController.logoutUser);

//REFETCH USER
router.get("/refetch", authController.refetchUser);

module.exports = router;
