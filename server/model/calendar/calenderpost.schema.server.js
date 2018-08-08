var mongoose = require ('mongoose');

var CalendarPostSchema = mongoose.Schema({
// 	personal info

	userId: String,
	artEventsFunCal: Boolean,
	educationCal: Boolean,
	itemReviewCal: Boolean,
	smallBizzCal: Boolean,
	outdoorsCal: Boolean,
	familyCal: Boolean,
	fitnessCal: Boolean,
	diningCal: Boolean,
	calPostEventName: String,
	calPostDescription: String,
	calPostDate: String,
	calPostTime: String,
	calPostLocation: String,
	calPostWebsite: String,
	calPostDuration: String,
	calPostPhone: String,
	calPostEmail: String,
	calPostImageOne: String,
	calPostImageTwo: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'calendarPost'})


module.exports = CalendarPostSchema;
