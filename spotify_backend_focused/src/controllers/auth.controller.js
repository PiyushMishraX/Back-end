const userModel = require('../models/user.mdoel');


async function registerUser(req, res) {

    const {username, email , password , role="user" } = req.body;

    
    const idUserAlreadyExists = await userModel.findOne({

        username: username,
        email: email, 
        // problem here is that if a user have both or one , daa same as others and if both fields points points to differnt uers than the loading can not be done , usernameexists , eve  though the duplicate values exists 
    })
}