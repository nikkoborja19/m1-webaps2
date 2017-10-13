const express = require('express');
const path = require('path');
const app = express();

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.use(express.static('public'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('html'));

app.get('/profile', function(req, res){
	res.sendFile('public/profile.html', {root: __dirname});
});

app.get('/home', function(req, res){
	//res.redirect('table.html');
	res.sendFile('public/home.html', {root: __dirname});
});

app.use(function(req, res){
	res.status(404).end("ERROR: File not found!");
});

app.listen(3000, function(){
	console.log('server app started on port 3000');
});
