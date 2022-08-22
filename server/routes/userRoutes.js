const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const isAuth = require('../middlewares/isAuth')
 

router.get('/user',userControllers.getUser);
router.get('/books', userControllers.getMyBooks);
router.get('/mybooks', isAuth , userControllers.getMyBooks)
router.post('/addbook', isAuth , userControllers.postBook);
router.get('/book/:bookId', userControllers.getBook);
// router.delete('/delete/:productId',userControllers.deleteBook)
module.exports = router;