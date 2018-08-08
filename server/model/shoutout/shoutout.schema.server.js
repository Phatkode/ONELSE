var mongoose = require ('mongoose');

var ShoutOutSchema = mongoose.Schema({
// 	personal info
	userId: String,
	artEventsFunShout: Boolean,
	educationShout: Boolean,
	itemReviewShout: Boolean,
	smallBizzShout: Boolean,
	outdoorsShout: Boolean,
	familyShout: Boolean,
	fitnessShout: Boolean,
	diningShout: Boolean,
	typeShout: String,
	nameShout: String,
	descriptionShout: String,
	locationShout: String,
	dateShout: String,
	timeShout: String,
	websiteShout: String,
	shoutOutImage: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'shoutOut'})


module.exports = ShoutOutSchema;
	
	 //     //   Images
  //   shoutOutImage: {type:String, default: "../../../../images/Prof.png"},
  //   paygeImage: String,
  //   businessImageOne: {type:String, default: "../../../../images/Agency.jpg"},
  //   businessImageTwo: {type:String, default: "../../../../images/Agency.jpg"},
  //   artistImageOne: {type:String, default: "../../../../images/artist.jpg"},
  //   artistImageTwo: {type:String, default: "../../../../images/artist.jpg"},
  // // Data
	
