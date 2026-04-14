const express = require('express');
const authController = require("../controllers/auth.controller")

const router = express.Router();

// POST /api/auth/register ---> testing  in postman use this  
router.post("/register",  authController.registerUser)



// seeing the cookies being send to server at every request 
router.get("/test", (req, res)=>{
    console.log("Cookies: ",  req.cookies); // access cookies in browser through request. cookies 
    res.json({
        message: "Test route",
        cookies: req.cookies
    })
    
})

module.exports = router;