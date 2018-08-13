module.exports = function(app){

	const ShoutOutModel = require('../model/shoutout/shoutout.model.server');
	const PictureModel = require('../model/picture/picture.model.server');
	var fs = require('fs');
	const multer = require('multer');
	const upload = multer({ dest: './dist/assets/uploads' });

		app.post("/api/user/:userId/shoutOut", postShoutOut);
		app.get('/api/shoutOut/upload', downloadPic)
		app.post("/api/shoutOut/upload/:uid/:sid", upload.single('myFile'), uploadImage);
		app.get('/api/shoutouts', loadAllShoutOuts);
		app.get('/api/shoutout/:sid', findShoutOutById);
		app.put('/api/shoutOut', updateShoutOut);
		app.delete("/api/user/:userId/shoutOut", deleteNullShoutOut);

		function findShoutOutById(req, res) {
			const sid = req.params['sid'];
			ShoutOutModel.findShoutOutById(sid).then(
				(data) => {
					res.json(data);
				}
			)
		}

		function updateShoutOut(req, res) {
			const shoutOut = req.body;
			// console.log(shoutOut);
			ShoutOutModel.updateShoutOut(shoutOut).then(
				(data)=>{
					console.log(data);
					res.json(data);
				}
			)
		}

				function deleteNullShoutOut(req, res) {
			const sid = req.params['sid'];
			ShoutOutModel.deleteNullShoutOut(sid).then(
				(data) => {
					res.json(data);
				}
			)
		}


				function uploadImage(req, res) {
				        const uid = req.params['uid'];
				        const sid = req.params['sid'];
				        const image = req.file;

				        const callbackUrl   = req.headers.origin + "/user/" + uid + "/community/shoutout/" + sid;
				        const picture = {
				            name: image.path,
				            data: "",
				            type: "shoutOut",
				            mimetype: image.mimetype,
				            shoutOut: sid
				        }

				        fs.readFile(picture.name, (err, data) => {
				        picture.data = data;
				            PictureModel.deletePictureForShoutOut(sid).then(
				                PictureModel.createPicture(picture).then(
				                    (picture) => {
				                        ShoutOutModel.findShoutOutById(sid).then(
				                            (shoutOut) => {
				                            	shoutOut.shoutOutImage = '/assets/uploads/' + image.filename;
					                            ShoutOutModel.updateShoutOut(shoutOut).then(
					                                (data) => {
					                                    res.redirect(callbackUrl);
					                                }
					                            );	
				                        	}
				                        );     
				                    }
				                )
				            );
				        })
				    }

							function downloadPic(req, res) {
							        PictureModel.retrieveShoutOutPics().then(
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




				function postShoutOut (req, res) {
					var ShoutOut = req.body;
					ShoutOutModel.createShoutOut(ShoutOut)
					.then(
						(shoutOut) =>{
							res.json(shoutOut);
						}
						)
				}

				function loadAllShoutOuts (req, res) {
					ShoutOutModel.loadAllShoutOuts()
					.then(
						function(shoutOuts) {
							res.json(shoutOuts);
						}
					)
				}


				}