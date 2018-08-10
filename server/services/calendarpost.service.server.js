module.exports = function(app){

	const PictureModel = require('../model/picture/picture.model.server');
	const CalendarPostModel = require('../model/calendar/calendarpost.model.server');
	var fs = require('fs');
	const multer = require('multer');
	const upload = multer({ dest: './dist/assets/uploads' });        

app.post("/api/user/:userId/calendarPost", postToCalendar);
app.put('/api/calendarPost', updateCalendarPost);
app.get('/api/calendarPost/:cid', findCalendarByPostId);
app.get('/api/calendarPosts', loadAllCalendarPosts);
app.get('/api/calendarPost/upload', downloadPic)
app.post("/api/calendarPost/upload/:uid/:cid", upload.single('myFile'), uploadImage);
// app.delete("/api/user/:uid", deleteShoutOut);

				function postToCalendar (req, res) {
					var calendarPost = req.body;
					CalendarPostModel.createCalPost(calendarPost)
					.then(
						(calendarPost) =>{
							res.json(calendarPost);
						}
						)
				}

				function findCalendarByPostId(req, res) {
							const cid = req.params['cid'];
							CalendarPostModel.findCalendarPostById(cid).then(
								(data) => {
									res.json(data);
								}
							)
						}

		function updateCalendarPost(req, res) {
			const calendarPost = req.body;
			CalendarPostModel.updateCalendarPost(calendarPost).then(
				(data)=>{
					res.json(data);
				}
			)
		}


				function uploadImage(req, res) {
				        const uid = req.params['uid'];
				        const cid = req.params['cid'];
				        const type = req.query['type']
				        const image = req.file;

				        const callbackUrl   = req.headers.origin + "/user/" + uid + "/resource/calendarPost/" + cid;
				        const picture = {
				            name: image.path,
				            data: "",
				            type: type,
				            mimetype: image.mimetype,
				            shoutOut: cid
				        }

				        fs.readFile(picture.name, (err, data) => {
				        picture.data = data;
				            PictureModel.deletePictureForCalendarPost(cid, type).then(
				                PictureModel.createPicture(picture).then(
				                    (picture) => {
				                        CalendarPostModel.findCalendarPostById(cid).then(
				                            (calendarPost) => {
				                            	if(type === "calPostImageOne") { 
				                            		calendarPost.calPostImageOne = '/assets/uploads/' + image.filename;
				                            	} else if (type === "calPostImageTwo") {
				                            		calendarPost.calPostImageTwo = '/assets/uploads/' + image.filename;
				                            	}
				                            	console.log(calendarPost); 					                            
					                            CalendarPostModel.updateCalendarPost(calendarPost).then(
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
									var cid = req.params['cid'];
							        PictureModel.retrieveCalendarPostPics().then(
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


				function loadAllCalendarPosts (req, res) {
					CalendarPostModel.loadAllCalendarPosts()
					.then(
						function(calendarPosts) {
							res.json(calendarPosts);
						}
					)
				}


				}











