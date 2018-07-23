import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ShoutOutService } from '../../../../Services/shoutout.service.client'
import { ShoutOutModel }  from '../../../../models/shoutout.model.client';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'


@Component({
  selector: 'app-postshoutout',
  templateUrl: './postshoutout.component.html',
  styleUrls: ['./postshoutout.component.css']
})
export class PostShoutOutComponent implements OnInit 
			{
			// Allows you to view form g in html
			@ViewChild('g') shoutOutForm: NgForm;


			// tells what data types to accept
				_id: "";
				shoutOut_id: "";
				artEventsFunShout: boolean; 
				educationShout: boolean;
				itemReviewShout: boolean;
				outdoorsShout: boolean;
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
				
				// states minimum data acceptible for shoutout
				ShoutOut: ShoutOutModel = 
				{		
					_id: "",
					shoutOut_id:  "",
					artEventsFunShout: false,
					educationShout: false,
					itemReviewShout: false,
					outdoorsShout: false,
					familyShout: false,
					fitnessShout: false,
					diningShout: false,
					typeShout: "",
					nameShout: "",
					descriptionShout: "",
					locationShout: "",
					dateShout: "",
					timeShout: ""
				};



constructor(private shoutOutService: ShoutOutService, private router: Router) { }
  // constructor(_id, shoutOut_id, mainTypeShout, NameShout, descriptionShout, locationShout, dateShout, timeShout, websiteShout) { }

// Binds data from form to array




ngOnInit() {
	//   console.log("hello")
	// this._id = this.ShoutOut._id;
	// this.typeShout = this.ShoutOut.typeShout;
	// this.artEventsFunShout = this.ShoutOut.artEventsFunShout;
	// this.educationShout = this.ShoutOut.educationShout;
	// this.itemReviewShout = this.ShoutOut.itemReviewShout;
	// this.outdoorsShout = this.ShoutOut.outdoorsShout;
	// this.familyShout = this.ShoutOut.familyShout;
	// this.fitnessShout = this.ShoutOut.fitnessShout;
	// this.diningShout = this.ShoutOut.diningShout;
	// this.typeShout = this.ShoutOut.typeShout;
	// this.nameShout = this.ShoutOut.nameShout;
	// this.descriptionShout = this.ShoutOut.descriptionShout;
	// this.locationShout = this.ShoutOut.locationShout;
	// this.dateShout = this.ShoutOut.dateShout;
	// this.timeShout = this.ShoutOut.timeShout;
	// this.websiteShout = this.ShoutOut.websiteShout;
}


 postShoutOut(){
   console.log("hello");
  	this.artEventsFunShout = this.shoutOutForm.value.artEventsFunShout;
	this.educationShout = this.shoutOutForm.value.educationShout;
	this.itemReviewShout = this.shoutOutForm.value.itemReviewShout;
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


       const newShoutOut: ShoutOutModel = 
   {
	_id: this._id,
	shoutOut_id: this.shoutOut_id,
	artEventsFunShout: this.artEventsFunShout,
	educationShout: this.educationShout,
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
	websiteShout: this.websiteShout
   };
    //             this.shoutOutService.createShoutOut(this._id, newShoutOut).subscribe(
				// (res: ShoutOut) => {
    //                 (user: User) => {
    //                     var id = user._id;
    //                     this.router.navigate(['user', id]);
    //                     alert("Your Shout out is processing, we will notify you when it is uploaded")
    //                 }}

    //             )
            }
        
    }
  





