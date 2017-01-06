var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    email: {
    	type:String,
    	require:true,
    	trim:true
    },
    password:{
    	type:String
    },
    first_name: {
        type: String,
        default: '',
    },
    last_name: {
        type: String,
        default: ''
    },
    gender: {
        type: Number
    },
    description: {
        type: String,
        default: ''
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

var User = mongoose.model('User', userSchema);

module.exports = User;
