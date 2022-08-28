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
    const { email, password, fullname, gender, birthday } = req.body;
    const profileImage = req.file?.path;
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
                    fullname,
                    email,
                    password: hashedPassword,
                    gender,
                    birthday,
                    profileImage

                })
                })
                .then(result => {
                    console.log('from auth controller:',result)
                    user.save();
                    return res.status(201).json({message: 'user created!'})            
                })
        }).catch(error => {
            next(error)
        })
        
}
exports.postLogin = (req, res, next) => {

    const password = req.body.password
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({message: 'Invalid Email'})
        }
        
        bcrypt
        .compare(password, user.password).then(doMatch => {
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
                res.status(200).json({token: accessToken});
            } 
        }).catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500
            }
            next(error);
        });
    });
    
      
}

exports.updateUser = (req, res, next) => {
    const userId = req.userId;
    
    const { fullname, email, password, birthday  } = req.body;
    let image = req.file?.path;
    User.findById(userId).then(user => {
        if (!user) {
            const error = new Error('Could Not Find This User');
            error.statusCode = 404;
            throw error;
        }
        if (image === undefined) {
            user.profileImage = user.profileImage;
        } else {
            user.profileImage = image;
        }
        user.fullname = fullname;
        user.email = email;
        user.password = password;
        user.birthday = birthday;

        return user.save();
    }).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        next(error);
    })
}