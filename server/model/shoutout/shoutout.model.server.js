var mongoose = require('mongoose');
var ShoutOutSchema = require('./shoutout.schema.server.js');
var ShoutOutModel = mongoose.model('ShoutOutModel', ShoutOutSchema);

ShoutOutModel.loadAllShoutOuts = loadAllShoutOuts;
ShoutOutModel.createShoutOut = createShoutOut;
ShoutOutModel.updateShoutOut = updateShoutOut;
ShoutOutModel.findShoutOutById = findShoutOutById;

function createShoutOut(ShoutOut){
	return ShoutOutModel.create(ShoutOut);
}

function loadAllShoutOuts(){
	return ShoutOutModel.find();
}

function updateShoutOut(shoutOut) {
	return ShoutOutModel.update({_id: shoutOut._id}, shoutOut);
}

function findShoutOutById(sid){
	return ShoutOutModel.findById(sid);
}

module.exports = ShoutOutModel;