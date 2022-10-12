//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    full_name: { type: String, description: "Required Field", required: true },
    id_created_at: { type: Date, default: Date.now() },
    gender: { type: String, enum: ['Male', 'Female', 'Others'] },
    phone_no: { type: String, unique: true, required: true, description: "Should be unique" },
    email: { type: String, unique: true, required: true, description: "Should be unique" },
    password: { type: String, required: true, description: "Should be unique" },
    profile_picture: { type: String, default: "https://res.cloudinary.com/dwckgkzdz/image/upload/v1604757274/buddha_wyz1ek.jpg" },
}, { collection: 'users_upswyft' });

var UserModel = mongoose.model('UpswyftUsers', userSchema);

module.exports = UserModel;