var mongoose = require("mongoose");
var PictureSchema = require('./picture.schema.server');
var PictureModel = mongoose.model('PictureModel', PictureSchema);

PictureModel.createPicture = createPicture;
PictureModel.findPictureForUser = findPictureForUser;
PictureModel.retrieveShoutOutPics = retrieveShoutOutPics;
PictureModel.deletePictureForUser = deletePictureForUser;
PictureModel.deletePictureForShoutOut = deletePictureForShoutOut;


function createPicture(picture) {
	return PictureModel.create(picture);
}

function findPictureForUser(uid) {
	return PictureModel.find({user: uid});
}

function retrieveShoutOutPics() {
	return PictureModel.find();
}

function deletePictureForUser(uid, type) {
	return PictureModel.remove({user:uid, type: type});
}

function deletePictureForShoutOut(sid) {
	return PictureModel.remove({shoutOut:sid});
}

module.exports = PictureModel;