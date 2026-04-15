const express = require('express')
const authController = require('../controllers/auth.controller')

const router = express.Router();




router.post('/register', authController.registerUser ) // not ./register but /register bcz it is not path but route/api url 

router.post('/login', authController.loginUser)


module.exports = router;