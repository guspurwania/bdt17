var express = require('express');
var app = express();
var path = require('path');

//HELLO WORLD!

// app.get('/home', function(req, res){
// 	res.end('Hello World!');
// })

//STATIC
//app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

//PUG
// app.set('views', path.join(__dirname, 'templates'));
// app.set('view engine', 'pug');

// app.get('/home', function(req, res){
// 	res.render('index', {date: new Date().toDateString()});
// })

//GOOD OLD FORM
// var bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({extended: false}));

// app.set('views', path.join(__dirname, 'templates'));
// app.set('view engine', 'pug');

// app.get('/form', function(req, res){
// 	res.render('form');
// })

// app.post('/form', function(req, res){
// 	res.end(req.body.str.split('').reverse().join(''));
// })

//STYLISH CSS
// var stylus = require('stylus');

// app.use(stylus.middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));

//PARAM PAM PAM
// var crypto = require('crypto');

// app.put('/message/:id', function(req, res) {
// 	res.end(crypto.createHash('sha1')
// 		.update(new Date().toDateString() + req.params.id)
// 		.digest('hex'));
// })

//WHAT'S IN QUERY
// app.get('/search', function(req, res){
// 	res.set({
// 		'content-type':'application/json'
// 	});
// 	res.end(JSON.stringify(req.query));
// })

//JSON ME
var fs = require('fs');

app.get('/books', function(req, res){
	res.set({
		'content-type':'application/json'
	})
	
	fs.readFile(process.argv[3], function(err, data) {
		if(err) {
			console.log('error',err);
			return;
		} 

		res.json(JSON.parse(data.toString()));
	});
})

app.listen(process.argv[2]);
