const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const User = require('../models/user.model')
const { body } = require('express-validator')

router.post('/register',[
    body('name').not().isEmpty().isLength({min: 5}).withMessage('Please Enter a valid name.'),
    body('email').isEmail().withMessage('please enter a valid email.').normalizeEmail(),
    body('password').isLength({min: 8}).withMessage('please enter a valid password with at least 8 characters.')
    // add repeat password have to match the password
] ,authController.postRegister);
router.post('/login',authController.postLogin)


module.exports = router;