var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ratingSchema = new Schema({
    user_id:{
    	type:Objectid
    },
    book_id:{
    	type:Objectid
    },
    point:{
    	type:Number,
    	default:0
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

var Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
