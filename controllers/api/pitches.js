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
		title: 'Pillo Development Kit',
	votes: 168,
        description: 'For all crazy developers with Pillo controllers, here you’ll find the available software to support creating Pillo games in Unity 3D.',
        tag: 'tag',
        pictureurl: 'http://pillogames.com/wp-content/uploads/2013/01/Pdk_pillo-pressure.png',
        labname: 'Pillo Team'
    })
	pitch.save(function (err, pitch) {
		if(err) { return next(err) }
		res.json(201, pitch)
	})
})

module.exports = router
