const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema( {
	title: String,
	body: String
});

// BlogPostSchema.pre('save', function(next) {
// 	const blog = this
// 	bcrypt.hash(blog.body, 10, (err, hash) => {
// 		blog.body = hash
// 		next()
// 	})
// })

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost