export class CalendarPostModel {
	
	_id?: string;
	userId: string;
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
	artEventsFunCal?: Boolean;
	educationCal?: Boolean;
	itemReviewCal?: Boolean;
	smallBizzCal?: Boolean;
	outdoorsCal?: Boolean;
	familyCal?: Boolean;
	fitnessCal?: Boolean;
	diningCal?: Boolean;
}