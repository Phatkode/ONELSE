module.exports = function(app){

// _id: string;
// 	birthday: string;
// 	email: string;
// 	userName: string;
// 	firstName: string;
// 	lastName: string ;
// 	password: string;
var users = [

        {_id: "123", birthday:"07/01/1990", userName: "alicia", password: "alicia", firstName: "Alicia", lastName: "Settles", email: "aliciasettles@gmail.com"},
        {_id: "234", birthday:"1/1/2001", userName: "jala", password: "jala", firstName: "Jala", lastName: "Settles", email: "jala@whatever.com"},
        {_id: "345", birthday:"1/1/2001", userName: "arafat", password: "arafat", firstName: "Arafat", lastName: "Akbar", email: "lightspeedera@gmail.com"},
        {_id: "456", birthday:"1/1/2001",userName: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
        ];	

app.get('/api/user', findUser);
app.get('/api/user/:uid', findUserById);
app.post("/api/user", createUser);
// app.put("/api/user", updateUser);


// find user by given id
 function findUserById(req, res){
var uid = req.params["uid"];
 	for (let x = 0; x <users.length; x++){
 		if (users[x]._id === uid) {
 			res.json(users[x]);
 			return;
 		}
 	}
 }

function findUser(req, res){
	const userName = req.query['userName'];
	const password = req.query['password'];

	if(userName && password) {
		var user;
		for (let x = 0; x < users.length; x++){
	 		if (users[x].userName === userName && users[x].password === password) {
	 		user = users[x]
	 		}
		} 
		res.json(user);
		return;
	}

	if(userName) {
		var user;
		for (let x = 0; x < users.length; x++){
	 		if (users[x].userName === userName) {
	 		user = users[x]
	 		}
		} 
		res.json(user);
		return;
	} 
	res.json(users);
}


function createUser(req, res){
	var user = req.body
	user._id = Math.floor(Math.random() * 10000).toString();
	users.push(user);
	res.json(user);
}}
