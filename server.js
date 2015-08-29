var express = require("express")
var bodyParser = require("body-parser")
var Pitch = require("./models/pitch")

var app = express(),
    http = require('http'),
    cons = require('consolidate'),
    stylus = require('stylus');



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//set path to the views (template) directory
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.use(stylus.middleware({
    debug: true,
    src: __dirname + '/views',
    dest: __dirname + '/public'
}));  
app.use(express.static(__dirname + '/public'));

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.use("/api/pitches", require("./controllers/api/pitches"))
app.use(require("./controllers/static"))
app.listen(3000, function() {
	console.log("Server listening on", 3000)
})
