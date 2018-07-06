export class CalenderPost {
	
	_id: string;
	calendarPost_id: string;
	calPostEventName: string;
	calPostDescription: string;
	calPostDate: string;
	calPostTime: string;
	calPostLocation: string;
	calPostWebsite: string;
	calPostDuration: string;
	calPostPhone: string;
	calPostEmail: string;
	calPostImageOne?: string;
	calPostImageTwo?: string;

	



	constructor(_id, calPost_id, calendarPost_id, calPostEventName, calPostDescription, calPostDate, calPostTime, calPostLocation, calPostWebsite, CalPostDuration, calPostPhone, CalPostEmail, CalPostImageOne?, CalPostImageTwo?,
) {
	this._id = this._id;
	this.calendarPost_id = this.calendarPost_id;
	this.calPostEventName = calPostEventName;
	this.calPostDescription = calPostDescription;
	this.calPostDate = calPostDate;
	this.calPostTime = calPostTime;
	this.calPostLocation = calPostLocation;
	this.calPostWebsite = calPostWebsite;
	this.calPostDuration = calPostDuration;
	this.calPostPhone = calPostPhone;
	this.calPostEmail = calPostEmail;
	this.calPostImageOne?: calPostImageOne;
	this.calPostImageTwo?: calPostImageTwo;
	}
}