const { body, validationResult } = require("express-validator");


exports.loginValidator = [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isStrongPassword().withMessage("not an Password"),
    async(req, res, next) =>{
        let err = validationResult(req)
        err = err.array()
        if(err.length > 0) return res.status(400).json({error:err})
        next()
    }
]
exports.registerValidator = [
    body("name").isAlpha().withMessage("Incorrect Name"),
    body("phone").isNumeric().withMessage("Incorrect Phone Number"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isStrongPassword().withMessage("Weak Password"),
    async(req, res, next) =>{
        let err = validationResult(req)
        err = err.array()
        if(err.length > 0) return res.status(400).json({error:err})
        next()
    }
]
