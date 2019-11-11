const mongoose = require('mongoose')
const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// Post.create(
//   {
//     title: 'My second blog post',
//     description: 'Second Blog post description',
//     content: 'Second Lorem ipsum content.'
//   },
//   (error, post) => {
//     console.log(error, post)
//   }
// )

// Post.find({}, (error, post) => {
//   console.log(error, post)
// })

// Post.findById('5d8bdb3af0ce1404e076f12b', (error, post) => {
//     console.log(error, post)
// })

Post.findOneAndUpdate("5d8bdb3af0ce1404e076f12b", {
    title: 'My first blog post title lorem ipsum'
}, (error, post) => console.log(error, post))
