const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    authorImage: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('articles', articleSchema)