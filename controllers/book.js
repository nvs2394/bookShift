var Book = require('../controllers/book');
var book = {
    getAll: function(req, res) {
        var allbooks = data;
        res.jsonp(allbooks);
    },
    getOne: function(req, res) {
        var id = req.params.id;
        var book = data[id];
        res.jsonp(book);
    },
    create: function(req, res) {
        var newBook = new Book({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author
        });
        newBook.save(function(err, book) {
            if (err) {
                res.jsonp(err);
            } else {
                res.jsonp(book);
            }
        });
    },
    update: function(req, res) {
        var updatebook = req.body;
        var id = req.params.id;
        data[id] = updatebook;
        res.jsonp(updatebook);
    }
}

module.exports = book;
