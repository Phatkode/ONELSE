var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server.js');
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.createUser = createUser;
UserModel.updateUser = updateUser;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;

function createUser(user){
return UserModel.create(user);
}
function updateUser(uid, user){
return UserModel.update({_id: uid}, user);
}
function findUserByUsername(userName){
	return UserModel.findOne({userName: userName});
}
function findUserById(uid){
	return UserModel.findById(uid);
}
function findUserByCredentials(userName, password){
	return UserModel.findOne({userName: userName, password: password});
}
// function deleteUser(uid){
// 	return UserModel.remove({_id:uid});
// }
module.exports = UserModel;