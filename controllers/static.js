var express = require("express")
var router = express.Router()

router.use(express.static(__dirname + "/../assets"))
router.get("/", function(req, res){
	res.sendfile("layouts/index.html")
})

module.exports = router
