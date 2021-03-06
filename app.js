const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/jquery', express.static(path.resolve(__dirname, './node_modules/jquery/dist')));
app.use('/bs4css', express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/css')));
app.use('/bs4js', express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/js')));

app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/my_database', 
            { useNewUrlParser : true, useUnifiedTopology : true } )

// app.get('/',  (req, res) => {
//    //res.sendFile( path.resolve(__dirname, "index.html") );
//    res.render('index')
// })

app.get('/',  async (req, res) => {
   const blogposts = await BlogPost.find( { } )
   // console.log(blogposts)  // An array of blog posts
	res.render('index', { 
		blogposts   // same as->   blogposts : blogposts
	})
})

app.get('/about',  (req, res) => {
   //res.sendFile( path.resolve(__dirname, "about.html") );
   res.render('about')
})

app.get('/posts/new',  (req, res) => {
   res.render('create')
})

app.get('/posts/delete',  (req, res) => {
   res.render('delete')
})

app.get('/contact',  (req, res) => {
   res.render('contact')
})

app.get('/index.html',  (req, res) => {
   res.render('index')
})

app.post('/posts/store', async (req, res) => {
   // console.log(req.body)
   // res.redirect('/')
   //res.end(JSON.stringify(req.body))

   // BlogPost.create(req.body, (err, post) => {
   //    res.redirect('/')
   // })
   await BlogPost.create(req.body) //synchronous call
   res.redirect('/')
})

app.post('/posts/delete', async (req, res) => {
   await BlogPost.deleteOne(req.body)
   res.redirect('/')
})

app.post('/addname', (req, res) => {
   response = {
      first_name:	req.body.first_name,
      last_name:	req.body.last_name
   };
   console.log(req.body.first_name)
   res.end(JSON.stringify(response));
})

app.listen(3000, function () {
   console.log("App listening on port 3000");
})
