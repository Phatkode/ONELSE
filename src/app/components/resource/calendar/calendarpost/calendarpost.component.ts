import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CalPostService } from '../../../../Services/calendarpost.service.client'
import { CalendarPostModel }  from '../../../../models/calendarpost.model.client';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-calendarpost',
  templateUrl: './calendarpost.component.html',
  styleUrls: ['./calendarpost.component.css']
})
export class CalendarPostComponent implements OnInit {




	@ViewChild('h') calendarPostForm: NgForm;

	// tells what data types to accept
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

    
				
				// states minimum data acceptible for shoutout
				CalPost: CalendarPostModel = 
				{		
					_id: "",
			   		calendarPost_id: "",
				    calPostEventName: "",
				    calPostDescription: "",
				    calPostDate: "",
				    calPostTime: "",
				    calPostLocation: "",
				    calPostWebsite: "",
				    calPostDuration: "",
				    calPostPhone: "",
				    calPostEmail: "",
				};

constructor(private CalPostService: CalPostService, private router: Router) { }	
 

 ngOnInit() {
  



  }


// ) {
// 	this._id = this._id;
// 	this.calendarPost_id = this.calendarPost_id;
// 	this.calPostEventName = calPostEventName;
// 	this.calPostDescription = calPostDescription;
// 	this.calPostDate = calPostDate;
// 	this.calPostTime = calPostTime;
// 	this.calPostLocation = calPostLocation;
// 	this.calPostWebsite = calPostWebsite;
// 	this.calPostDuration = calPostDuration;
// 	this.calPostPhone = calPostPhone;
// 	this.calPostEmail = calPostEmail;
// 	this.calPostImageOne?: calPostImageOne;
// 	this.calPostImageTwo?: calPostImageTwo;
// 	}





 
}
