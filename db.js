var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/eindhoven2015_1", function(req, res){
	console.log("Mongo DB connected")
})
module.exports = mongoose
