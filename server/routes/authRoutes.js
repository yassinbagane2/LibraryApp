const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');
const isAuth = require('../middlewares/isAuth');


    

router.post('/register',[
    body('fullname').not().isEmpty().isLength({min: 5}).withMessage('Please Enter a valid name.'),
    body('email').isEmail().withMessage('please enter a valid email.'),
    body('password').isLength({min: 8}).withMessage('please enter a valid password with at least 8 characters.')
] ,authController.postRegister);
router.post('/login',authController.postLogin);
router.put('/update-user',
    body('email').isEmail().withMessage('please enter a valid email.'),
    body('fullname').not().isEmpty().isLength({min: 5}).withMessage('Please Enter a valid name.'),
    body('password').isLength({min: 8}).withMessage('please enter a valid password with at least 8 characters.'),
    isAuth
    ,authController.updateUser
)

module.exports = router;