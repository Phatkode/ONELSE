var mongoose = require("mongoose");
var PictureSchema = require('./picture.schema.server');
var PictureModel = mongoose.model('PictureModel', PictureSchema);

PictureModel.createPicture = createPicture;
PictureModel.findPictureForUser = findPictureForUser;
PictureModel.deletePictureForUser = deletePictureForUser;

function createPicture(picture) {
	return PictureModel.create(picture);
}

function findPictureForUser(uid) {
	return PictureModel.find({user: uid});
}

function deletePictureForUser(uid, type) {
	return PictureModel.remove({user:uid, type: type});
}

module.exports = PictureModel;