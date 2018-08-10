var mongoose = require("mongoose");
var PictureSchema = require('./picture.schema.server');
var PictureModel = mongoose.model('PictureModel', PictureSchema);

PictureModel.createPicture = createPicture;

PictureModel.findPictureForUser = findPictureForUser;
PictureModel.retrieveShoutOutPics = retrieveShoutOutPics;
PictureModel.retrieveCalendarPostPics = retrieveCalendarPostPics;

PictureModel.deletePictureForUser = deletePictureForUser;
PictureModel.deletePictureForShoutOut = deletePictureForShoutOut;
PictureModel.deletePictureForCalendarPost = deletePictureForCalendarPost;




function createPicture(picture) {
	return PictureModel.create(picture);
}

function findPictureForUser(uid) {
	return PictureModel.find({user: uid});
}

function deletePictureForUser(uid, type) {
	return PictureModel.remove({user:uid, type: type});
}

function deletePictureForShoutOut(sid) {
	return PictureModel.remove({shoutOut:sid});
}

function retrieveShoutOutPics() {
	return PictureModel.find();
}

function deletePictureForCalendarPost(cid) {
	return PictureModel.remove({calendarPost:cid});
}

function retrieveCalendarPostPics() {
	return PictureModel.find();
}

module.exports = PictureModel;