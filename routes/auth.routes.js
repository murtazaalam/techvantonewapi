const AuthController = require('../controllers/auth.controller');
const { loginValidator, registerValidator } = require('../validator/auth.validator');

const authRoutes = require('express').Router();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:/3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    next();
}

authRoutes.post('/login',loginValidator, AuthController.login)
authRoutes.post('/register',allowCrossDomain, registerValidator, AuthController.register)
module.exports = authRoutes;