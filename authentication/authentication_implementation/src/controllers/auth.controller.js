const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


async function registerUser(req, res) {
    
     const {username, email, password} = req.body;

     const user = await userModel.create({
        username, email, password
     })

    //  const token = jwt.sign() // jwt.sign( ) create token
    const token = jwt.sign({ // data in obj format 
        // the data conditions - 1. unique data, 2. the data should be of that user we want to create token for 
        // ongo db id is always unique so we use it 

        id: user._id,
        

    }, process.env.JWT_SECRET) 

    res.status(201).json({
        message: "User registered suucessfully",
        user,
        token,
    })
}

// module.exports = { } // in form of an epty  object
module.exports = { registerUser } // in form of an object // obj -> a property -> value is function -> paramters req and res