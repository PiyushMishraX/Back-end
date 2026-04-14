const userModel = require('../models/user.mdoel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {

    const {username, email , password , role="user" } = req.body; // bydefault role == user

    
    const isUserAlreadyExists = await userModel.findOne({

        username: username,
        email: email, 
        // problem here is that if a user have both or one , daa same as others and if both fields points points to differnt uers than the loading can not be done , usernameexists , eve  though the duplicate values exists 
        // so we use $or[{}{}] operator which ca text multiple cases seperately 


        $or:[
            {username},
            {email},
        ]
    })


    if(isUserAlreadyExists){
        return res.status(409)({
            message: "User already exists",
        })
    }

    const hash = await bcrypt.hash(password,10)

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

