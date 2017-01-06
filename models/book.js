var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    user_id:ObjectId,
    name:String,
    author:String,
    description:String,
    date_created:{
        type:Date,
        default:Date.now
    }
})

var Book= mongoose.model('Book',bookSchema);

module.exports = Book;
