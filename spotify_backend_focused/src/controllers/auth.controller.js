const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {

    const {username, email , password , role="user" } = req.body; // bydefault role == user

    
    const isUserAlreadyExists = await userModel.findOne({

        // username: username,
        // email: email, 
        // // problem here is that if a user have both or one , daa same as others and if both fields points points to differnt uers than the loading can not be done , usernameexists , eve  though the duplicate values exists 
        // so we use $or[{}{}] operator which ca text multiple cases seperately 


        $or:[
            {username},
            {email},
        ]
    })


    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "User already exists",
        })
    }

    const hash = await bcrypt.hash(password,10) //asynchronus process ( need some time ) so use await  
    // 10 -> slat -> add unique , random value to each passowrd before hashing // securing the password for 100's of 1000's of years for brute force methods etc

    const user = await userModel.create({
        username,
        email,
        password: hash, // saves hash
        role,
    })

    const token = jwt.sign({
        id: user._id, // any one unique data is enough but we will use role too , for use case
        role: user.role,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message:"User registered successfully",
        // user,//not the password showing in screen
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    })
}


module.exports = {registerUser}; // export as object so if any other functions are made they can be exported too and used from one require statement