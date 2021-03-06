var mongoose = require('mongoose');

var PictureSchema = mongoose.Schema({
	name: String,
	data: Buffer,
	type: String,
	mimetype: String,
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
	shoutOut: {type: mongoose.Schema.Types.ObjectId, ref: 'ShoutOutModel'},
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'picture'});

module.exports = PictureSchema;