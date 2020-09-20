const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
    },

    bank: {
        type: Number,
        default: 500,
    },

    totalwinsPoker: {
        type: Number,
    },

    totalLossesPoker: {
        type: Number,
    },

    date: {
        type: Date,
        default: Date.now,
    }

});

UserSchema.plugin(passportLocalMongoose);

module.exports = User = mongoose.model("user", UserSchema);
