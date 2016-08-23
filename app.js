var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var bookController = require("./controllers/book");
var data = require("./models/book");
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/book')

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.route('/books')
    .get(bookController.getAll)
    .post(bookController.create)
    .put()

app.route('/books/:id')
    .get(bookController.getOne)
    .post()
    .put(bookController.update)
app.route('/create')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname+'/public/create.html'));
    })

app.listen(3000);
