const Book = require('../models/book.modal')




exports.getUser = async (req, res, next) => {
    console.log(req.cookies)
    if (req.cookies?.jwt) {
        const token = req.cookies.jwt;
        console.log(token);

    } else {
        return res.status(406).json({ message: 'Unauthorized Token.' });
    }
      
}

exports.getBooks = (req, res, next) => {
    Book.find()
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
    console.log(req.file)
    const { title, author, description, status } = req.body
    const imageUrl = req.file.path;
    const book = new Book({
        title: title,
        author: author,
        description: description,
        imageUrl: imageUrl,
        creator: req.userId,
        availability: status
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

// exports.editBook = (req, res) => {

// }

// exports.deleteBook = (req, res) => {
//    const productId = req.params.productId;
//    Book.findById(req.productId)
//     .then(book => {
//         if(!book) {
//             const error = new Error('Could Not Find Book.');
//             error.statusCode = 404;
//             throw error;
//         }
//         res.status(200).json({message: 'Book Fetched', Book: Book})
//     })
//     .catch(err => {
//         next(err)
//     })
// }

