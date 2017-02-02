var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var commentSchema = new Schema({
    user_id:{
    	type:ObjectId
    },
    book_id:{
    	type:ObjectId
    },
    content:{
    	type:String,
    	default:''
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
