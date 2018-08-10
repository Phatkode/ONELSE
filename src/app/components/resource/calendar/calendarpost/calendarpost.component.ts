import { Component, OnInit, ViewChild } from '@angular/core';
import { CalPostService } from '../../../../services/calendarpost.service.client'
import { UserService } from '../../../../services/user.service.client'
import { CalendarPostModel }  from '../../../../models/calendarpost.model.client';
import { NgForm } from '@angular/forms'
import { User } from '../../../../models/user.model.client'
import { SharedService } from '../../../../services/shared.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-calendarpost',
  templateUrl: './calendarpost.component.html',
  styleUrls: ['./calendarpost.component.css']
})

export class CalendarPostComponent implements OnInit {


	@ViewChild('i') calendarPostForm: NgForm;

	// tells what data types to accept
    uid: string;
	cid: string;
    calPost_Id: string;
    calPostEventName: "";
    calPostDescription: "";
    calPostDate: "";
    calPostTime: "";
    calPostLocation: "";
    calPostWebsite: "";
    calPostDuration: "";
    calPostPhone: "";
    calPostEmail: "";
    calPostImageOne: string;
    calPostImageTwo: string;
   	artEventsFunCal: boolean; 
	educationCal: boolean;
	itemReviewCal: boolean;
	outdoorsCal: boolean;
	smallBizzCal: boolean;
	familyCal: boolean;
	fitnessCal: boolean;
	diningCal: boolean;
	dateCreated: Date;

    
				
	// states minimum data acceptible for calpost
	CalendarPost: CalendarPostModel = 
	{	
		userId: "",
		artEventsFunCal: false,
		educationCal: false,
		itemReviewCal: false,
		smallBizzCal: false,
		outdoorsCal: false,
		familyCal: false,
		fitnessCal: false,
		diningCal: false,
   		calPostEventName: "",
	    calPostDescription: "",
	    calPostDate: "",
	    calPostTime: "",
	    calPostLocation: "",
	    calPostWebsite: "",
	    calPostDuration: "",
	    calPostPhone: "",
	    calPostEmail: ""
	};

	baseUrl = environment.baseUrl;
	constructor(private sharedService: SharedService, private CalPostService: CalPostService, private router: Router, private activatedRoute: ActivatedRoute) { }	
 


	// Binds data from form to array
	ngOnInit() {
		this.uid = this.sharedService.user._id;
		// console.log(this.uid);
		this.activatedRoute.params.subscribe(
			params => {
				this.cid = params['cid'];
				// console.log(this.cid);
				this.CalPostService.findCalendarPostById(this.cid).subscribe(
					(calendarPost)=>{
						this.CalendarPost = calendarPost;
					}
				);
			}
		)
	}


	createCalendarPost() {
		  	this.artEventsFunCal = this.calendarPostForm.value.artEventsFunCal;
			this.educationCal = this.calendarPostForm.value.educationCal;
			this.itemReviewCal = this.calendarPostForm.value.itemReviewCal;
			this.smallBizzCal = this.calendarPostForm.value.smallBizzCal;
			this.outdoorsCal = this.calendarPostForm.value.outdoorsCal;
			this.familyCal = this.calendarPostForm.value.familyCal;
			this.fitnessCal = this.calendarPostForm.value.fitnessCal;
			this.diningCal = this.calendarPostForm.value.diningCal;
			this.calPostEventName = this.calendarPostForm.value.calPostEventName;
		    this.calPostDescription = this.calendarPostForm.value.calPostDescription;
		    this.calPostDate = this.calendarPostForm.value.calPostDate;
		    this.calPostTime = this.calendarPostForm.value.calPostTime;
		    this.calPostLocation = this.calendarPostForm.value.calPostLocation;
		    this.calPostWebsite = this.calendarPostForm.value.calPostWebsite;
		    this.calPostDuration = this.calendarPostForm.value.calPostDuration;
		    this.calPostPhone = this.calendarPostForm.value.calPostPhone;
		    this.calPostEmail = this.calendarPostForm.value.calPostEmail;
		    this.calPostImageOne = this.calendarPostForm.value.calPostImageOne;
		    this.calPostImageTwo = this.calendarPostForm.value.calPostImageTwo;

				// casting "" to false, and others to true
			  	if(!this.calendarPostForm.value.artEventsFunCal) {
		          this.artEventsFunCal = false; 
		        } else{
		          this.artEventsFunCal = true;}
				if(!this.calendarPostForm.value.educationCal) {
		          this.educationCal= false; 
		        } else{
		          this.educationCal = true;}
				if(!this.calendarPostForm.value.itemReviewCal) {
		          this.itemReviewCal = false; 
		        } else{
		          this.itemReviewCal = true;}
				if(!this.calendarPostForm.value.smallBizzCal) {
		          this.smallBizzCal = false; 
		        } else{
		          this.smallBizzCal = true;}
				if(!this.calendarPostForm.value.outdoorsCal) {
		          this.outdoorsCal = false; 
		        } else{
		          this.outdoorsCal = true;}
				if(!this.calendarPostForm.value.familyCal) {
		          this.familyCal = false; 
		        } else{
		          this.familyCal = true;}
				if(!this.calendarPostForm.value.fitnessCal) {
		          this.fitnessCal = false; 
		        } else{
		          this.fitnessCal = true;}
				if(!this.calendarPostForm.value.diningCal) {
		          this.diningCal = false; 
		        } else{
		          this.diningCal = true;
		      	}
		
      		const newCalendarPost: CalendarPostModel = {
      			_id: this.cid,
				userId: this.uid,
				artEventsFunCal: this.artEventsFunCal,
				educationCal: this.educationCal,
				smallBizzCal: this.smallBizzCal,
				itemReviewCal: this.itemReviewCal,
				outdoorsCal: this.outdoorsCal,
				familyCal: this.familyCal,
				fitnessCal: this.fitnessCal,
				diningCal: this.fitnessCal,
				calPostEventName: this.calPostEventName,
			    calPostDescription: this.calPostDescription,
			    calPostDate: this.calPostDate,
			    calPostTime: this.calPostTime,
			    calPostLocation: this.calPostLocation,
			    calPostWebsite: this.calPostWebsite,
			    calPostDuration: this.calPostDuration,
			    calPostPhone: this.calPostPhone,
			    calPostEmail: this.calPostEmail,
			    calPostImageOne: this.calPostImageOne,
			    calPostImageTwo: this.calPostImageTwo
			};
			
			console.log(newCalendarPost);
    		this.CalPostService.updateCalendarPost(newCalendarPost).subscribe(
				(res: CalendarPostModel) => {
					this.router.navigate(['/resource/calendar']);
	        	  		}
    			)
	}

      tempSaveCal(){
	  	this.artEventsFunCal = this.calendarPostForm.value.artEventsFunCal;
		this.educationCal = this.calendarPostForm.value.educationCal;
		this.itemReviewCal = this.calendarPostForm.value.itemReviewCal;
		this.smallBizzCal = this.calendarPostForm.value.smallBizzCal;
		this.outdoorsCal = this.calendarPostForm.value.outdoorsCal;
		this.familyCal = this.calendarPostForm.value.familyCal;
		this.fitnessCal = this.calendarPostForm.value.fitnessCal;
		this.diningCal = this.calendarPostForm.value.diningCal;
		this.calPostEventName = this.calendarPostForm.value.calPostEventName;
		this.calPostDescription = this.calendarPostForm.value.calPostDescription;
		this.calPostLocation = this.calendarPostForm.value.calPostLocation;
		this.calPostDuration = this.calendarPostForm.value.calPostDuration;
		this.calPostDate = this.calendarPostForm.value.calPostDate;
		this.calPostTime = this.calendarPostForm.value.calPostTime;
		this.calPostEmail = this.calendarPostForm.value.calPostEmail;
		this.calPostPhone = this.calendarPostForm.value.calPostPhone;
		this.calPostWebsite = this.calendarPostForm.value.calPostWebsite;
		this.calPostImageOne = this.calendarPostForm.value.calPostImageOne;
		this.calPostImageTwo = this.calendarPostForm.value.calPostImageTwo;

		// casting "" to false, and others to true
	  	if(!this.calendarPostForm.value.artEventsFunCal) {
          this.artEventsFunCal = false; 
        } else{
          this.artEventsFunCal = true;}
		if(!this.calendarPostForm.value.educationCal) {
          this.educationCal= false; 
        } else{
          this.educationCal = true;}
		if(!this.calendarPostForm.value.itemReviewCal) {
          this.itemReviewCal = false; 
        } else{
          this.itemReviewCal = true;}
		if(!this.calendarPostForm.value.smallBizzCal) {
          this.smallBizzCal = false; 
        } else{
          this.smallBizzCal = true;}
		if(!this.calendarPostForm.value.outdoorsCal) {
          this.outdoorsCal = false; 
        } else{
          this.outdoorsCal = true;}
		if(!this.calendarPostForm.value.familyCal) {
          this.familyCal = false; 
        } else{
          this.familyCal = true;}
		if(!this.calendarPostForm.value.fitnessCal) {
          this.fitnessCal = false; 
        } else{
          this.fitnessCal = true;}
		if(!this.calendarPostForm.value.diningCal) {
          this.diningCal = false; 
        } else{
          this.diningCal = true;
      	}
		
      		const newCalendarPost: CalendarPostModel = {
      			_id: this.cid,
				userId: this.uid,
				artEventsFunCal: this.artEventsFunCal,
				educationCal: this.educationCal,
				smallBizzCal: this.smallBizzCal,
				itemReviewCal: this.itemReviewCal,
				outdoorsCal: this.outdoorsCal,
				familyCal: this.familyCal,
				fitnessCal: this.fitnessCal,
				diningCal: this.fitnessCal,
				calPostEventName: this.calPostEventName,
				calPostDescription: this.calPostDescription,
				calPostLocation: this.calPostLocation,
				calPostDuration: this.calPostDuration,
				calPostDate: this.calPostDate,
				calPostTime: this.calPostTime,
				calPostPhone: this.calPostPhone,
				calPostWebsite: this.calPostWebsite,
				calPostEmail: this.calPostEmail,
				calPostImageOne: this.calPostImageOne,
				calPostImageTwo: this.calPostImageTwo
			};
			// console.log(newCalendarPost);
    		this.CalPostService.updateCalendarPost(newCalendarPost).subscribe(
    			(res: any) => {
    				console.log(res);
    			}
    		);

      	}

}


