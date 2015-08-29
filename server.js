var express = require("express")
var bodyParser = require("body-parser")
var Pitch = require("./models/pitch")

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/pitches", require("./controllers/api/pitches"))
app.use(require("./controllers/static"))

app.listen(3000, function() {
	console.log("Server listening on", 3000)
})
