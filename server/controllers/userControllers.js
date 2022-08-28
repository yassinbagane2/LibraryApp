const Book = require('../models/book.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');


exports.getUser = (req, res, next) => {
    if (req.cookies?.jwt) {
        const token = req.cookies.jwt;

        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, async(err, decoded) => {
            if (err) return res.status(403).json({message: 'Invalid Token.'});
            const userId = decoded.userId
            User.findById(userId).then(user => {
                if (!user) {
                    const error = new Error('Not User Found.');
                    error.statusCode= 401;
                    error.message = 'No User Found With This Email';
                    throw error;
                }
                return res.status(200).json({user, accessToken: token})

            }).catch(err => {
                if (!err.statusCode) {
                    err.statusCode = 500
                }
                next(err)
            })
        });
    } else {
        return res.status(401).json({ message: 'Not authenticated' });
    }  
}

exports.logoutUser = (req, res) => {
    res.clearCookie('jwt',{ httpOnly: true });
    return res.sendStatus(200);
}

exports.getBooks = (req, res, next) => {
    Book.find()
    .then(books => {
        return res.status(200).json(books)
    })
    .catch(error => {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    })
}
exports.getMyBooks = (req, res, next) => {
    Book.find({creator: req.userId})
    .then(books => {
        return res.status(200).json({message: "Books Fetched Succesfully.", books: books})
    })
    .catch(error => {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    })
}
exports.getBook = (req, res, next) => {
    const bookId = req.params.bookId;

    Book.findById(bookId)
        .then(book => {
            if (!book) {
                const error = new Error ("could not find this book.");
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({message: 'Book Fetched!', book: book})
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error)
        })
}

exports.postBook = (req, res, next) => { 
    if (!req.file) {
        const error = new Error('Image Must Be Provided');
        error.statusCode = 422;
        throw error; 
    }
    const { title, author, price, description } = req.body
    const image = req.file.path;
    const book = new Book({
        title,
        author,
        description,
        price,
        imageUrl: image,
        creator: req.userId,
    })
    book.save()
    .then(result => {
        res.status(201).json({
            message: 'Book Added Succesfully',
             book: result
            })
    })
    .catch(error => {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    })

}

exports.updateBook = (req, res, next) => {
    const bookId = req.params.bookId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    const { title, author, description, price  } = req.body;
    let image = req.file.path;
    Book.findById(bookId).then(book => {
        if (!book) {
            const error = new Error('Could Not Find This Book');
            error.statusCode = 404;
            throw error;
        }
        if (image !== book.imageUrl) {
            book.imageUrl = image;
        }
        book.title = title;
        book.author = author;
        book.description = description;
        book.price = price;

        return book.save();
    }).then(result => {
        res.status(200).json({message: 'book updated!', book: result});
    }).catch(error => {
        next(error);
    })
}
exports.deleteBook = (req, res, next) => {
   const bookId = req.params.bookId;
   Book.findById(bookId)
    .then(book => {
        if(!book) {
            const error = new Error('Could Not Find Book.');
            error.statusCode = 404;
            throw error;
        }
        clearImage(book.imageUrl);
        return Book.findByIdAndRemove(bookId);

    }).then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        next(err)
    })
}

const clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err =>
         console.log(err));
    };
  
