var db = require("../db")
var Pitch = db.model("Pitch", {
	title:                  {type: String, required: true},
	votes:                  {type: int, required: true},
	description:            {type: String , required: true},
    tag:                    {type: String},
    picture_url:            {type: String, required: true},
    lab_name:               {type: String, required: true},
    comments:               {type: [String]}
    insertion_date:         {type: Date, required: true, default: Date.now }
})

module.exports = Pitch
