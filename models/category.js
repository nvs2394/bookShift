var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String,
    description: String,
    date_created: {
        type: Date,
        default: Date.now
    }
})

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;
