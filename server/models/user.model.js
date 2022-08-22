const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
     },
    //  refreshToken: {
    //     type: [String]
    //  }
    // profileImage: {
    //     type: String,
    //     required: true
    // },
    // birthdate: {
    //     type: Date,
    //     required: true
    // },
    // gender: {
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.model('User', userSchema);