module.exports = function(app){
        
var ShoutOuts = [
        {_id: "123", shoutOut_id:"123", typeShout: "Dining", 
        nameShout: "jala", descriptionShout: "jala", locationShout: "jala", 
        dateShout: "Dining", timeShout: "jala", websiteShout: "jala"},

        {_id: "321", shoutOut_id:"321", typeShout: "Dining", 
        nameShout: "lisha", descriptionShout: "lisha", locationShout: "lisha", 
        dateShout: "lisha", timeShout: "lisha", websiteShout: "lisha"},

        {_id: "111", shoutOut_id:"111", typeShout: "Dining", 
        nameShout: "guest", descriptionShout: "guest", locationShout: "guest", 
        dateShout: "guest", timeShout: "guest", websiteShout: "guest"},

        {_id: "123", shoutOut_id:"777", typeShout: "Education", 
        nameShout: "mama", descriptionShout: "dada", locationShout: "mama", 
        dateShout: "Dining", timeShout: "dada", websiteShout: "jala"}
        ];	


app.get('/api/ShoutOuts', loadAllShoutOuts);
app.get("/api/ShoutOuts/:uid", findShoutOutsByUser);
// (issue: findShoutOutsByUser only loads 1 file not all by user) 
app.post("/api/ShoutOuts/:uid", postShoutOut);
// not tested yet
app.put("/api/user/:uid", updateShoutOut);
app.delete("/api/user/:uid", deleteShoutOut);
// find user by given id
 function loadAllShoutOuts(req, res){
 	res.json(ShoutOuts);
}

function findShoutOutsByUser(req, res){
	var uid = req.params["uid"];	
 	for (let x = 0; x <ShoutOuts.length; x++){
 		if (ShoutOuts[x]._id === uid) {
 			res.json(ShoutOuts[x]);
 			return;
 		}
 	}
 }

function postShoutOut(req, res){
	var ShoutOut = req.body;
	shoutOut_id = Math.floor(Math.random() * 10000).toString();
	ShoutOuts.push(ShoutOut);
	res.json(ShoutOut);
	}
}

function updateShoutOut(req, res){
	var ShoutOut = req.body;
	var uid = req.params['shoutOut_id'];
	user._id = uid;
	for(var i=0;i<ShoutOuts.length;i++){
		if(ShoutOuts[i]._id === uid) {
			users[i] = user;
		}
	}
	res.json(user);
	}


function deleteShoutOut(){}








