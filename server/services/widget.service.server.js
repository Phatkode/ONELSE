module.exports = function(app){

var userModel = require('../model/user/user.model.server.js')

// _id: string;
// 	birthday: string;
// 	email: string;
// 	userName: string;
// 	firstName: string;
// 	lastName: string ;
// 	password: string;
// var users = [

//         {_id: "123", birthday:"07/01/1990", userName: "alicia", password: "alicia", firstName: "Alicia", lastName: "Settles", email: "aliciasettles@gmail.com"},
//         {_id: "234", birthday:"1/1/2001", userName: "jala", password: "jala", firstName: "Jala", lastName: "Settles", email: "jala@whatever.com"},
//         {_id: "345", birthday:"1/1/2001", userName: "arafat", password: "arafat", firstName: "Arafat", lastName: "Akbar", email: "lightspeedera@gmail.com"},
//         {_id: "456", birthday:"1/1/2001",userName: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
//         ];	

app.get('/api/user', findUser);
app.get('/api/user/:uid', findUserById);
app.post("/api/user", createUser);
app.put("/api/user/:uid", updateUser);
app.put("/api/user/:uid", uploadProfile);



function updateUser(req, res) {
	var user = req.body;
	var uid = req.params['uid'];
	userModel.updateUser(uid, user).then(
		data => {
			res.json(data);
		})
}

// find user by given id
 function findUserById(req, res){
var uid = req.params["uid"];
userModel.findUserById(uid).then(
	data => {res.json(data);

 		}
 	);
 }



function findUser(req, res) {
		const userName = req.query['userName'];
		const password = req.query['password'];
		
		// find user by credentials
		if(userName && password) {
			userModel.findUserByCredentials(userName, password).then(
				data => {
					res.json(data);
				}
			);
    		return;
		}
		// find user by username
		if(userName) {
			userModel.findUserByUsername(userName).then(
				data => {
					res.json(data);	
				}
			);
			return;
		}
		res.json(user);
	}









function findUserByCredentials(req, res){
	const userName = req.query['userName'];
	const password = req.query['password'];

	if(userName && password) {
		userModel.findUserByCredentials(userName, password).then(
			data => {
				res.json(data);
			})
		return;
	}

	if(userName) {
		userModel.findUser(userName).then(
			(data) => {
				res.json(data);
			}
		)

		return;
	} 
	res.json(users);
}


function createUser(req, res){
	var user = req.body;
	userModel.createUser(user).then(
		(data) => {
			res.json(data);
			}
		)
		
	}
}
