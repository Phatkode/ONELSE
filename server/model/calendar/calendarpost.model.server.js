var mongoose = require('mongoose');
var CalendarPostSchema = require('./calenderpost.schema.server.js');
var CalendarPostModel = mongoose.model('calendarPostModel', CalendarPostSchema);


CalendarPostModel.createCalPost = createCalPost;
CalendarPostModel.updateCalendarPost = updateCalendarPost;
CalendarPostModel.findCalendarPostById = findCalendarPostById;
CalendarPostModel.loadAllCalendarPosts = loadAllCalendarPosts;


function createCalPost(calendarPost){
	return CalendarPostModel.create(calendarPost);
}

function loadAllCalendarPosts(){
	return CalendarPostModel.find();
}

function updateCalendarPost(calendarPost) {
	return CalendarPostModel.update({_id: calendarPost._id}, calendarPost);
}

function findCalendarPostById(cid){
	return CalendarPostModel.findById(cid);
}


module.exports = CalendarPostModel;