import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoutOutService } from '../../../../services/shoutout.service.client';
import { ShoutOutModel }  from '../../../../models/shoutout.model.client';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../../services/shared.service.client';
import { UserService } from '../../../../services/user.service.client';
import { User } from '../../../../models/user.model.client'
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-postshoutout',
  templateUrl: './postshoutout.component.html',
  styleUrls: ['./postshoutout.component.css']
})

	

export class PostShoutOutComponent implements OnInit {
	// Allows you to view form g in html
	@ViewChild('g') shoutOutForm: NgForm;

	// tells what data types to accept
	uid: string;
	sid: string;
	artEventsFunShout: boolean; 
	educationShout: boolean;
	itemReviewShout: boolean;
	outdoorsShout: boolean;
	smallBizzShout: boolean;
	familyShout: boolean;
	fitnessShout: boolean;
	diningShout: boolean;
	typeShout: "";
	nameShout: "";
	descriptionShout: "";
	locationShout: "";
	dateShout: "";
	timeShout: "";
	websiteShout: "";
	shoutOutImage: string;
	dateCreated: Date;
	
	// states minimum data acceptible for shoutout
	ShoutOut: ShoutOutModel = {		
		userId: "",
		artEventsFunShout: false,
		educationShout: false,
		itemReviewShout: false,
		smallBizzShout: false,
		outdoorsShout: false,
		familyShout: false,
		fitnessShout: false,
		diningShout: false,
		typeShout: "",
		nameShout: "",
		descriptionShout: "",
		locationShout: "",
		dateShout: "",
		timeShout: "",
	};

baseUrl = environment.baseUrl;
	constructor(private shoutOutService: ShoutOutService, private router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }
  	// constructor(_id, shoutOut_id, mainTypeShout, NameShout, descriptionShout, locationShout, dateShout, timeShout, websiteShout) { }

	// Binds data from form to array
	ngOnInit() {
		this.uid = this.sharedService.user._id;
		this.activatedRoute.params.subscribe(
			params => {
				this.sid = params['sid'];
				this.shoutOutService.findShoutOutById(this.sid).subscribe(
					(shoutOut)=>{
						this.ShoutOut = shoutOut;
					}
				);
			}
		)
	}



	postShoutOut(){
	  	this.artEventsFunShout = this.shoutOutForm.value.artEventsFunShout;
		this.educationShout = this.shoutOutForm.value.educationShout;
		this.itemReviewShout = this.shoutOutForm.value.itemReviewShout;
		this.smallBizzShout = this.shoutOutForm.value.smallBizzShout;
		this.outdoorsShout = this.shoutOutForm.value.outdoorsShout;
		this.familyShout = this.shoutOutForm.value.familyShout;
		this.fitnessShout = this.shoutOutForm.value.fitnessShout;
		this.diningShout = this.shoutOutForm.value.diningShout;
		this.typeShout = this.shoutOutForm.value.typeShout;
		this.nameShout = this.shoutOutForm.value.nameShout;
		this.descriptionShout = this.shoutOutForm.value.descriptionShout;
		this.locationShout = this.shoutOutForm.value.locationShout;
		this.dateShout = this.shoutOutForm.value.dateShout;
		this.timeShout = this.shoutOutForm.value.timeShout;
		this.websiteShout = this.shoutOutForm.value.websiteShout;
		this.shoutOutImage = this.shoutOutForm.value.shoutOutImage;

		// casting "" to false, and others to true
	  	if(!this.shoutOutForm.value.artEventsFunShout) {
          this.artEventsFunShout = false; 
        } else{
          this.artEventsFunShout = true;}
		if(!this.shoutOutForm.value.educationShout) {
          this.educationShout= false; 
        } else{
          this.educationShout = true;}
		if(!this.shoutOutForm.value.itemReviewShout) {
          this.itemReviewShout = false; 
        } else{
          this.itemReviewShout = true;}
		if(!this.shoutOutForm.value.smallBizzShout) {
          this.smallBizzShout = false; 
        } else{
          this.smallBizzShout = true;}
		if(!this.shoutOutForm.value.outdoorsShout) {
          this.outdoorsShout = false; 
        } else{
          this.outdoorsShout = true;}
		if(!this.shoutOutForm.value.familyShout) {
          this.familyShout = false; 
        } else{
          this.familyShout = true;}
		if(!this.shoutOutForm.value.fitnessShout) {
          this.fitnessShout = false; 
        } else{
          this.fitnessShout = true;}
		if(!this.shoutOutForm.value.diningShout) {
          this.diningShout = false; 
        } else{
          this.diningShout = true;
      	}
		
      		const newShoutOut: ShoutOutModel = {
      			_id: this.sid,
				userId: this.uid,
				artEventsFunShout: this.artEventsFunShout,
				educationShout: this.educationShout,
				smallBizzShout: this.smallBizzShout,
				itemReviewShout: this.itemReviewShout,
				outdoorsShout: this.outdoorsShout,
				familyShout: this.familyShout,
				fitnessShout: this.fitnessShout,
				diningShout: this.fitnessShout,
				typeShout: this.typeShout,
				nameShout: this.nameShout,
				descriptionShout: this.descriptionShout,
				locationShout: this.locationShout,
				dateShout: this.dateShout,
				timeShout: this.timeShout,
				websiteShout: this.websiteShout,
				shoutOutImage: this.shoutOutImage
			};
			// console.log(newShoutOut);
    		this.shoutOutService.updateShoutOut(newShoutOut).subscribe(
				(res: ShoutOutModel) => {
					this.router.navigate(['/community/shoutouts']);
        		}
    		)
      	}


      tempSave(){
	  	this.artEventsFunShout = this.shoutOutForm.value.artEventsFunShout;
		this.educationShout = this.shoutOutForm.value.educationShout;
		this.itemReviewShout = this.shoutOutForm.value.itemReviewShout;
		this.smallBizzShout = this.shoutOutForm.value.smallBizzShout;
		this.outdoorsShout = this.shoutOutForm.value.outdoorsShout;
		this.familyShout = this.shoutOutForm.value.familyShout;
		this.fitnessShout = this.shoutOutForm.value.fitnessShout;
		this.diningShout = this.shoutOutForm.value.diningShout;
		this.typeShout = this.shoutOutForm.value.typeShout;
		this.nameShout = this.shoutOutForm.value.nameShout;
		this.descriptionShout = this.shoutOutForm.value.descriptionShout;
		this.locationShout = this.shoutOutForm.value.locationShout;
		this.dateShout = this.shoutOutForm.value.dateShout;
		this.timeShout = this.shoutOutForm.value.timeShout;
		this.websiteShout = this.shoutOutForm.value.websiteShout;
		this.shoutOutImage = this.shoutOutForm.value.shoutOutImage;

		// casting "" to false, and others to true
	  	if(!this.shoutOutForm.value.artEventsFunShout) {
          this.artEventsFunShout = false; 
        } else{
          this.artEventsFunShout = true;}
		if(!this.shoutOutForm.value.educationShout) {
          this.educationShout= false; 
        } else{
          this.educationShout = true;}
		if(!this.shoutOutForm.value.itemReviewShout) {
          this.itemReviewShout = false; 
        } else{
          this.itemReviewShout = true;}
		if(!this.shoutOutForm.value.smallBizzShout) {
          this.smallBizzShout = false; 
        } else{
          this.smallBizzShout = true;}
		if(!this.shoutOutForm.value.outdoorsShout) {
          this.outdoorsShout = false; 
        } else{
          this.outdoorsShout = true;}
		if(!this.shoutOutForm.value.familyShout) {
          this.familyShout = false; 
        } else{
          this.familyShout = true;}
		if(!this.shoutOutForm.value.fitnessShout) {
          this.fitnessShout = false; 
        } else{
          this.fitnessShout = true;}
		if(!this.shoutOutForm.value.diningShout) {
          this.diningShout = false; 
        } else{
          this.diningShout = true;
      	}
		
      		const newShoutOut: ShoutOutModel = {
      			_id: this.sid,
				userId: this.uid,
				artEventsFunShout: this.artEventsFunShout,
				educationShout: this.educationShout,
				smallBizzShout: this.smallBizzShout,
				itemReviewShout: this.itemReviewShout,
				outdoorsShout: this.outdoorsShout,
				familyShout: this.familyShout,
				fitnessShout: this.fitnessShout,
				diningShout: this.fitnessShout,
				typeShout: this.typeShout,
				nameShout: this.nameShout,
				descriptionShout: this.descriptionShout,
				locationShout: this.locationShout,
				dateShout: this.dateShout,
				timeShout: this.timeShout,
				websiteShout: this.websiteShout,
				shoutOutImage: this.shoutOutImage
			};
			// console.log(newShoutOut);
    		this.shoutOutService.updateShoutOut(newShoutOut).subscribe(
    			(res: any) => {
    				console.log(res);
    			}
    		);

      	}

    
}






