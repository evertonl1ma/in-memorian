var express= require("express");
var app= express();
var path= require('path');
var scientists= require("./controllers/scientists")();


app.use(express.static(__dirname + "/public"));


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/scientists", function(req, res) {
	res.send(scientists);
});

app.get("/scientists/:id", function(req, res) {
	scientists.filter(function(scientist) {
		if(scientist.id == req.params.id) {
			res.send(scientist);
			return;
		}
	});
	res.status(404).end();
})

 // habilitando HTML5MODE
app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
 });


app.listen(process.env.port || 3000, function() {
	console.log("Servidor rodando na porta 3000");
});
