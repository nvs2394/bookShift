var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book');

//Post a Book
router.post('/',bookController.createBook);

//Update a book

//Get list book

//Get detail a Boook
router.get('/:book_id',bookController.getBookById);

//User can comment in a post(Book)

//User can rating for a book

module.exports = router;