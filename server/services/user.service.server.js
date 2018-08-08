module.exports = function(app){

	var userModel = require('../model/user/user.model.server.js')
	/*npm install multer ---save*/
	const pictureModel = require('../model/picture/picture.model.server');
    var fs = require('fs');
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

app.get('/api/user', findUsers);
app.get('/api/user/:uid', findUserById);
app.post("/api/user", createUser);
app.put("/api/user/:uid", updateUser);
app.post("/api/user/:uid/upload", upload.single('myFile'), uploadImage);
app.post('/api/register', register);
app.post('/api/login', passport.authenticate('local'), login);
app.post('/api/logout', logout);
app.post ('/api/loggedIn', loggedIn);
app.get('/api/user/:uid/download', downloadPic);


function loggedIn(req, res) {
	if(req.isAuthenticated()){
		res.send(req.user);
	}else{
		res.send("0");
	}
}

function logout(req, res) {
	req.logOut();
	res.sendStatus(200);
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

 function uploadImage(req, res) {
        const uid = req.params['uid'];
        const type = req.query['type']
        const image = req.file;

        const callbackUrl   = req.headers.origin + "/user";
        const picture = {
            name: image.path,
            data: "",
            type: type,
            mimetype: image.mimetype,
            user: uid
        }

        fs.readFile(picture.name, (err, data) => {
            picture.data = data;
            pictureModel.deletePictureForUser(uid, type).then(
                pictureModel.createPicture(picture).then(
                    (picture) => {
                        userModel.findUserById(uid).then(
                            (user) => {
                            	if(type === "profileImage") { 
                            		user.profileImage = '/assets/uploads/' + image.filename;
                            	} else if (type === "businessImageOne") {
                            		user.businessImageOne = '/assets/uploads/' + image.filename;
                            	} else if ( type === "businessImageTwo") {
                            		user.businessImageTwo = '/assets/uploads/' + image.filename;
                            	} else if ( type === "artistImageOne") {
                            		user.artistImageOne = '/assets/uploads/' + image.filename;
                            	} else if ( type === "artistImageTwo") {
                            		user.artistImageTwo = '/assets/uploads/' + image.filename;
                            	}
                                userModel.updateUser(uid, user).then(
                                    (data) => {
                                        res.redirect(callbackUrl);
                                    }
                                );
                            }
                        );     
                    }
                )
            )
        })    
    }

function downloadPic(req, res) {
        var uid = req.params['uid'];
        pictureModel.findPictureForUser(uid).then(
            pictures => {
            	if (pictures) {
            		for(let picture of pictures) {
            			fs.access(picture.name, fs.constants.F_OK, (err) => {
            				if(err) {
                        	    fs.appendFile(picture.name, picture.data, (err) =>{
                            })
            			}
            		})
            	}
            }
            res.json(null);
   		}
   	)
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



function findUsers(req, res) {
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
	res.json(null);
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