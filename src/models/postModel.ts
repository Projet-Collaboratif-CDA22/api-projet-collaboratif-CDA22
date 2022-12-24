// @ts-ignore
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    //TODO : add schema
    title: { type: String, required: true },
    description: { type: String, required: true },
    date_posted: { type: Date, required: false },
    date_lesson: { type: Date, required: false },
//  teacher: { type: mongoose.Schema.OBJECT_TYPE.ObjectID, ref: 'user', required: true },
//  students: [{ type: [mongoose.Schema.OBJECT_TYPE.ObjectID], ref: 'user', required: true }],’
});

module.exports = mongoose.model('Post', postSchema);