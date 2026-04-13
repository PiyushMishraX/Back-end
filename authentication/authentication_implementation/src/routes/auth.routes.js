const express = require('express');
const authController = require("../controllers/auth.controller")

const router = express.Router();

// POST /api/auth/register ---> testing  in postman use this  
router.post("/register",  authController.registerUser)

module.exports = router;