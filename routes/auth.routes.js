const AuthController = require('../controllers/auth.controller');
const { loginValidator, registerValidator } = require('../validator/auth.validator');

const authRoutes = require('express').Router();

authRoutes.post('/login',loginValidator, AuthController.login)
authRoutes.post('/register', registerValidator, AuthController.register)
module.exports = authRoutes;