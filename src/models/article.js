const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
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