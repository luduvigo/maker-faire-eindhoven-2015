var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/eindhoven2015_2", function(req, res){
	console.log("Mongo DB connected")
})
module.exports = mongoose
