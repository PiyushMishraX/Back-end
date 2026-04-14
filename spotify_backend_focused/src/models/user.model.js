const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true, // till we use google login
    },
    role:{
        type: String,
        enum:['user','artist'],
        default: 'user',
    }
    

})