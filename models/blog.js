//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: { type: String, required: true, trim: true, minlength: 3 },
    body: { type: String, required: true, trim: true },
    author: {
        type: String,
        required: true
    },
    date: { type: Date, required: true },
    comments: [String]
}, { collection: 'users_upswyft' });


var BlogModel = mongoose.model('Blogs', blogSchema);

module.exports = BlogModel;
