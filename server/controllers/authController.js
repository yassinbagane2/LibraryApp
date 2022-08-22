const { validationResult } = require('express-validator')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.postRegister = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation Failed.');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const email= req.body.email;
    const password = req.body.password;
    User.findOne({ email })
        .then(user => {
            if(user) {
                const error = new Error('User Already Exists.');
                error.statusCode= 422;
                throw error;
            }
            bcrypt.hash(password,12)
                .then(hashedPassword => {
                return user = new User({
                    fullname: req.body.name,
                    email: req.body.email,
                    password: hashedPassword
                })
                })
                .then(result => {
                    console.log(result)
                    res.status(201).json({message: 'user created!'})
                    return user.save();
                })
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500
            }
            next(error);
        })
       
    
}
exports.postLogin = (req, res, next) => {

    const password = req.body.password
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if (!user) {
            return res.status(401).json({message: 'Invalid Email'})
        }
        
        bcrypt
        .compare(password, user.password)
        .then(doMatch => {
            if (!doMatch) {
                const error = new Error ("Wrong Password");
                error.statusCode = 401;
                throw error;
            }
            if (doMatch) {
               const accessToken = jwt.sign({
                    userId: user._id
               }, process.env.ACCESS_TOKEN_SECRET,
               {expiresIn: '1y'});
                res.cookie('jwt', accessToken, { httpOnly: true, samesite:'None', secure : true, maxAge: 24 * 60 * 60 * 1000 }); 
                return res.status(200).json({message: 'logged In',token: accessToken})} 
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500
            }
            next(error);
        })
        
    })
    
      
}
