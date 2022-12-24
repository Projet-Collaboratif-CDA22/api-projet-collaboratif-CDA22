// @ts-ignore
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    //TODO : add schema
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);