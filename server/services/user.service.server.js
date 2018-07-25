module.exports = function(app){

	var userModel = require('../model/user/user.model.server.js')
	/*npm install multer ---save*/
	var passport = require('passport');
	var LocalStrategy = require('passport-local').Strategy;
	var multer = require('multer'); 
	var upload = multer({ dest: './dist/assets/uploads'})
	passport.use(new LocalStrategy(localStrategy));
	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);
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
app.post("/api/user/:uid/upload", upload.single('myFile'), uploadImage);
app.post('/api/register', register);
app.post('/api/login', passport.authenticate('local'), login);
app.post('/api/logout', logout);
app.post ('/api/loggedIn', loggedIn);


function loggedIn(req, res) {
	if(req.isAuthenticated()){
		res.send(req.user);
	}else{
		res.send("0");
	}
}

function logout(req, res) {
	req.logOut();
	res.send(200);
}


function login(req, res) {
	var user = req.user;
	res.json(user);
}

function localStrategy(userName, password, done) {
	userModel.findUserByCredentials(userName, password).then(
		(user) => {
			if(user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		}
		)
}

function register (req, res) {
	var user = req.body;
	userModel.createUser(user)
	.then(
		function(user){
			req.login(user, function(err) {
				res.json(user);
			});
		});
}

function serializeUser(user, done) {
	done(null, user);
}

function deserializeUser(user, done) {
	userModel
	.findUserById(user._id)
	.then(
		function(user){
			done(null, user);
		},
		function(err){
			done(err, null);
		}
		);
}

function uploadImage(req, res){
	const uid = req.params['uid'];
// const wid = req.params['wid'];
// const pid = req.params['pid'];
// const wgid = req.params['wgid'];
// getting the uploaded file
var myFile = req.file;
// looking for the user with uid in database
userModel.findUserById(uid).then(
	(user) => {
		user.image
	}
	)

widget.url = '/assets/uploads/'+myFile.filename;
var callbackUrl = req.headers.origin + "/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget/" + wgid;
res.redirect(callbackUrl);
}


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