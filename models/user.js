const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String
}, {
        timestamps: true,
});

const User = mongoose.model('Users', userSchema);

module.exports = User;