const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs')
//const bodyParser = require("body-parser");
const mongoose = require('mongoose')

app.use(express.static('public'));
app.use('/bs4', express.static(path.resolve(__dirname, '/node_modules/bootstrap/dist/css')));
app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser : true} )

app.get('/', function (req, res) {
   //res.sendFile( path.resolve(__dirname, "index.html") );
   res.render('index')
})
app.get('/about', function (req, res) {
   //res.sendFile( path.resolve(__dirname, "about.html") );
   res.render('about')
})
app.get('/contact', function (req, res) {
   //res.sendFile( path.resolve(__dirname, "contact.html") );
   res.render('contact')
})

app.get('/index.html', function (req, res) {
   //res.sendFile( path.resolve(__dirname, "index.html") );
   res.render('index')
})

app.post('/addname', function (req, res) {
   response = {
      first_name:	req.body.first_name,
      last_name:	req.body.last_name
   };
   res.end(JSON.stringify(response));
})

app.listen(3000, function () {
   console.log("App listening on port 3000");
})
