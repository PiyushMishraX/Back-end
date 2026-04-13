const userModel = require("../models/user.model");


async function registerUser(req, res) {
    
     const {username, email, password} = req.body;
    
}

// module.exports = { } // in form of an epty  object
module.exports = { registerUser } // in form of an object // obj -> a property -> value is function -> paramters req and res