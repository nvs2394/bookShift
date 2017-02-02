const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new Schema({
    user_id: ObjectId,
    name: String,
    author: String,
    description: String,
    date_created: {
        type: Date,
        default: Date.now
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
