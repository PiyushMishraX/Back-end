// const { body, param, query } = require('express-validator');
//  body, param, query -> data can come in this

// const { check } = require('express-validator');
// if do not knpw where the dat ais coming on

// we go for specifics
const { body, validationResult } = require('express-validator');

const registerUserValidationRUles = [

    body("username")
        .isString()
        .withMessage("Username must be string")
        .isLength({min:3, max: 20})
        .withMessage("Username must be between 3 and 20 characters"),
]