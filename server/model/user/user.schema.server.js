var mongoose = require ('mongoose');

var UserSchema = mongoose.Schema({
// 	personal info
	birthday: String,
	email: String ,
	userName: String,
	firstName: String,
	lastName: String ,
	password: String,
// 	personal Booleans
	events: Boolean,
	education: Boolean,
	itemReview: Boolean,
	smallBizz: Boolean,
	outdoors: Boolean,
	family: Boolean,
	fitness: Boolean,
	dining: Boolean,

// 	business info	
	businessContact: String,
	businessTitle: String,
	businessName: String,
	businessAddress: String,
	businessIndustry: String,
	businessWebsite: String,
	businessEmail: String,
	businessPhone: String,
// 	business Booleans
	businessServices: Boolean,
	computerElectronics: Boolean,
	teaching: Boolean,
	unionUtilities: Boolean,
	governmentPublic: Boolean,
	healthMedicine: Boolean,
	manufacturing: Boolean,
	mediaEntertainment: Boolean,
	nonprofitAdvocacy: Boolean,
	realestateConstruction: Boolean,
	entrepreneurContractor: Boolean,
	customerService: Boolean,	
	trasportationTravel: Boolean,
	salesDistribution: Boolean,
	culinaryArts: Boolean,
	professionalArtist: Boolean,

// 	artist info
	artistName: String,
	artistEmail: String,
	socialMedia1: String,
	socialMedia2: String,
	socialMedia3: String,
	artistWebsite: String,
	artistPhone: String,
// 	artist Booleans
	digitalGraphics: Boolean,
	canvasArt: Boolean,
	webDesign: Boolean,
	photography: Boolean,
	videography: Boolean,
	lyricalArts: Boolean,
	vocalInstrument: Boolean,
	theater: Boolean,
	modeling: Boolean,
	acting: Boolean,
	comedy: Boolean,
	dance: Boolean,
	musicProduction: Boolean,
	     //   Images
    profileImage: {type:String, default: "../../../../images/Prof.png"},
    paygeImage: String,
    businessImageOne: String,
    businessImageTwo: String,
    artistImageOne: String,
    artistImageTwo: String,
  // Data
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'user'})

module.exports = UserSchema;