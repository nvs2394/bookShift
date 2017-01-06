var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    user_id:{
    	type:Objectid
    },
    book_id:{
    	type:Objectid
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
