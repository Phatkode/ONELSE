import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service.client';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client'
import { CalPostService } from '../../../services/calendarpost.service.client';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CalendarPostModel} from '../../../models/calendarpost.model.client'
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  	cid: string;
    calendarPosts: CalendarPostModel[];

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService, private router: Router, private calPostService: CalPostService, private userService: UserService) { }


	reorder(type: String){
		let newCalendarPosts: CalendarPostModel[] = [];
		for(let calendarPost of this.calendarPosts) {
			if(this.isType(calendarPost, type)) {
				newCalendarPosts.unshift(calendarPost);
			} else {
				newCalendarPosts.push(calendarPost);
			}
		}

		this.calendarPosts = newCalendarPosts;
	}

	isType(calendarPost, type) {
		if(type==="event") {
			return calendarPost.artEventsFunCal;
		}
		if(type==="education") {
			console.log(calendarPost.educationCal);
			return calendarPost.educationCal;
		}
		if(type==="ItemReviewCal") {
			return calendarPost.itemReviewCal;
		}
		if(type==="smallBizzCal") {
			return calendarPost.itemReviewCal;
		}
		if(type==="outdoorsCal") {
			return calendarPost.itemReviewCal;
		}
		if(type==="familyCal") {
			return calendarPost.itemReviewCal;
		}
		if(type==="fitnessCal") {
			return calendarPost.itemReviewCal;
		}
		if(type==="diningCal") {
			return calendarPost.itemReviewCal;
		}
	}

	ngOnInit() {
		this.calPostService.loadAllCalendarPosts().subscribe(
			(CalendarPosts: CalendarPostModel[]) => {
				this.calendarPosts = CalendarPosts;
			}
		)
	}
		runCalendarPost(){

		this.userService.loggedIn().subscribe((res)=> {
			const newCalendarPost: CalendarPostModel = {
				userId: this.sharedService.user._id,
				artEventsFunCal: false,
				educationCal: false,
				smallBizzCal: false,
				itemReviewCal: false,
				outdoorsCal: false,
				familyCal: false,
				fitnessCal: false,
				diningCal: false,
				calPostEventName: "",
				calPostDescription: "",
				calPostLocation: "",
				calPostDate: "",
				calPostTime: "",
				calPostDuration: "",
				calPostPhone: "",
				calPostEmail: "",
				calPostWebsite: "",
				calPostImageOne: "",
				calPostImageTwo: ""
			};

			 this.calPostService.createCalendarPost(newCalendarPost).subscribe(
				(calendarPost: CalendarPostModel) => {
					this.router.navigate(['user', this.sharedService.user._id ,'resource' , 'calendarPost', calendarPost._id]);
			
        		}
    		)
		})
	}





}


