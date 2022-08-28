const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    creator: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
    
},{timestamps: true})

module.exports = mongoose.model('Book', bookSchema);