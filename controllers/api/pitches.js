var Pitch = require("../../models/pitch")
var router = require("express").Router()

router.get("/", function (req, res, next){
	console.log("Pitch get")
	Pitch.find().sort('-insertiondate').exec(function(err, pitches){
		if (err) {return next(err)}	
		res.json(pitches)
	})
})

router.post("/", function(req, res, next){
	console.log("pitch received")
	
	//var pitch = new Pitch({
	//	title: req.body.title,
	//	votes: 0,
    //    description: req.body.description,
    //    tag: req.body.tag,
    //    pictureurl: req.body.pictureurl,
    //    labname: req.body.labname
	//})
    
	var pitch = new Pitch({
		title: 'CityTV.nl',
		votes: 150,
        description: 'Live internet broadcasts from 25 Cities, ...and counting.',
        tag: 'tag',
        pictureurl: 'https://yt3.ggpht.com/-Ar8UAZslucw/AAAAAAAAAAI/AAAAAAAAAAA/mY9aC8XHlrU/s100-c-k-no/photo.jpg',
        labname: 'CityTV team'
    })
	pitch.save(function (err, pitch) {
		if(err) { return next(err) }
		res.json(201, pitch)
	})
})

module.exports = router
