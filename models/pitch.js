var db = require("../db")
var Pitch = db.model("Pitch", {
	title:                  {type: String, required: true},
	votes:                  {type: int, required: true},
	description:            {type: String , required: true},
    tag:                    {type: String},
    pictureurl:             {type: String, required: true},
    labname:                {type: String, required: true},
    comments:               {type: [String]}
    insertiondate:          {type: Date, required: true, default: Date.now }
})

module.exports = Pitch
