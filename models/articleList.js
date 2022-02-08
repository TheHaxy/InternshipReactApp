const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleListSchema = new Schema({
    allArticles: {
        type: Array,
        required: false
    },
    myArticles: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('articleLists', articleListSchema)