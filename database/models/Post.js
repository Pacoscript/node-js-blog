const mongoose = require('mongoose')

/// User, Posts, Products
const PostSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
        required: true
    }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post