//Require Mongoose
var mongoose = require('mongoose');
var crypto = require('crypto');
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
    salt: { type: String, required: false, description: "Salt to be used in hashing" }
}, { collection: 'users_upswyft' });

userSchema.methods.hashPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');

    let hashedPassword = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

    console.log(hashedPassword);
    this.password = hashedPassword;
    console.log(this.password);
};

userSchema.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.password == hash;
};

var UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;
