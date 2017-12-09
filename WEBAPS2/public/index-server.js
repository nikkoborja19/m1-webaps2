const express = require('express');
const path = require('path');
const app = express();

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.use(express.static('public'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/images", express.static(__dirname + '/images'));

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
