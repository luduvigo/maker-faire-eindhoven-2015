var Pitch = require("../../models/pitch")
var router = require("express").Router()

router.get("/", function (req, res, next){
	console.log("Pitch get")
	Pitch.find().sort('-insertiondate').exec(function(err, pitches){
		if (err) {return next(err)}	
		res.json(posts)
	})
})

router.post("/", function(req, res, next){
	console.log("pitch received")
	console.log(req.body.title)
	console.log(req.body.description)
	console.log(req.body.tag)
	console.log(req.body.pictureurl)
	console.log(req.body.labname)
	
	var pitch = new Pitch({
		title: req.body.title,
		votes: 0,
        description: req.body.description,
        tag: req.body.tag,
        pictureurl: req.body.pictureurl,
        labname: req.body.labname
	})
	pitch.save(function (err, post) {
		if(err) { return next(err) }
		res.json(201, post)
	})
})

module.exports = router
