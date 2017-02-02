var mongoose = require('mongoose');
var Book = mongoose.model('Book');

module.exports.createBook = createBook;
module.exports.getBookById = getBookById;

function createBook(req,res){
	const newBook = new Book({
		name:"Name",
		author:"Author",
		description:"Description"
	});

	newBook.save((err,book)=>{
		res.json(book);
	})
};

function getBookById(req,res){
	const book_id = req.params.book_id;
	Book.findById(book_id).exec((err,book)=>{
		res.jsonp(book);
	})
};