const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser : true, useUnifiedTopology: true} )

// BlogPost.create( {
//     title: 'This is the title of the Blog',
//     body: 'This is the body of the Blog'
// }, (err, post) => {
//     if (err) {
//         console.log('error: ')
//         console.log(err)
//     }
//     else {
//         console.log('Blog Post: ')
//         console.log(post)
//     }
// })

// BlogPost.find({}, (err, post) => {
//     if (err) {
//         console.log('error: ')
//         console.log(err)
//     }
//     else {
//         console.log('Blog Post: ')
//         console.log(post)
//     }
// })

// BlogPost.find({ title:/the/}, (err, post) => {
//     if (err) {
//         console.log('error: ')
//         console.log(err)
//     }
//     else {
//         console.log('Blog Post: ')
//         console.log(post)
//     }
// })

var id = '5e41acb8cbf4031e48202fe1'

// BlogPost.findById(id, (err, post) => {
//     if (err) {
//         console.log('error: ')
//         console.log(err)
//     }
//     else {
//         console.log('Blog Post: ')
//         console.log(post)
//     }
// })

// BlogPost.findByIdAndUpdate(id, {title: 'Updated title'}, (err, post) => {
//     if (err) {
//         console.log('error: ')
//         console.log(err)
//     }
//     else {
//         console.log('Blog Post: ')
//         console.log(post)
//     }
// })

BlogPost.findByIdAndDelete(id,  (err, post) => {
    if (err) {
        console.log('error: ')
        console.log(err)
    }
    else {
        console.log('Blog Post: ')
        console.log(post)
    }
})
