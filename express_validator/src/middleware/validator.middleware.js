// const { body, param, query } = require('express-validator');
//  body, param, query -> data can come in this

// const { check } = require('express-validator');
// if do not knpw where the dat ais coming on

// we go for specifics
const { body, validationResult } = require('express-validator');

// middleware
async function validateResult(req, res, next) {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    next();
    
}

const registerUserValidationRUles = [

    body("username")
        .isString()
        .withMessage("Username must be string")
        .isLength({min:3, max: 20})
        .withMessage("Username must be between 3 and 20 characters"), 
        // if conditions not followed we will get error we will handle it in a function
    // validateResult // run when anything any rule fails

    body("email")
        .isEmail()
        .withMessage("Invlaid email address"),

    body("email")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),

    validateResult // run when anything any rule fails / runs everytime and returns when req have any error generated above
]