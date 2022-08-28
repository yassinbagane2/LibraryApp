const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const isAuth = require('../middlewares/isAuth')
 

router.get('/user',userControllers.getUser);
router.get('/logout',userControllers.logoutUser);
router.get('/books', userControllers.getBooks);
router.get('/mybooks', isAuth , userControllers.getMyBooks)
router.post('/addbook',isAuth, userControllers.postBook);
router.get('/book/:bookId', userControllers.getBook);
router.put('/book/:bookId',userControllers.updateBook);
router.delete('/delete/:bookId',userControllers.deleteBook)
module.exports = router;