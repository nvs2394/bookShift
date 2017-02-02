const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var ratingSchema = new Schema({
    user_id:{
    	type:ObjectId
    },
    book_id:{
    	type:ObjectId
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
