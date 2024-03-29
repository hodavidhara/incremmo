"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);