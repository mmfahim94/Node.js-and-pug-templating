var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

var index = fs.readFileSync('views/index.json');
app.get('/', function(req, res){
	res.render('index', {articles: JSON.parse(index)});
});

var about = fs.readFileSync('views/about.json');
app.get('/about', function(req, res){
	res.render('about', {articles: JSON.parse(about)});
});

var extra = fs.readFileSync('views/extra.json');
app.get('/extra', function(req, res){
	res.render('extra', {articles: JSON.parse(extra)});
});

app.listen(8080, function(){
	console.log("server is running");
});