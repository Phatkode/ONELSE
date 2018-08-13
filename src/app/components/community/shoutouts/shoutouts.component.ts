import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service.client';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client'
import { ShoutOutService } from '../../../services/shoutout.service.client';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ShoutOutModel} from '../../../models/shoutout.model.client'
@Component({
  selector: 'app-shoutouts',
  templateUrl: './shoutouts.component.html',
  styleUrls: ['./shoutouts.component.css']
})
	
export class ShoutOutsComponent implements OnInit {
	uid: string;
    shoutOuts: ShoutOutModel[];
    shoutOutSearch: string = "";
	constructor(private sharedService: SharedService, private router: Router, private shoutOutService: ShoutOutService, private userService: UserService) { }

	reorder(type: String){
		let newShoutOuts: ShoutOutModel[] = [];
		for(let shoutOut of this.shoutOuts) {
			if(this.isType(shoutOut, type)) {
				newShoutOuts.unshift(shoutOut);
			} else {
				newShoutOuts.push(shoutOut);
			}
		}

		this.shoutOuts = newShoutOuts;
	}

	isType(shoutOut, type) {
		if(type==="event") {
			return shoutOut.artEventsFunShout;
		}
		if(type==="education") {
			console.log(shoutOut.educationShout);
			return shoutOut.educationShout;
		}
		if(type==="ItemReviewShout") {
			return shoutOut.itemReviewShout;
		}
		if(type==="smallBizzShout") {
			return shoutOut.itemReviewShout;
		}
		if(type==="outdoorsShout") {
			return shoutOut.itemReviewShout;
		}
		if(type==="familyShout") {
			return shoutOut.itemReviewShout;
		}
		if(type==="fitnessShout") {
			return shoutOut.itemReviewShout;
		}
		if(type==="diningShout") {
			return shoutOut.itemReviewShout;
		}
	}

	ngOnInit() {
		this.shoutOutSearch = "";
		this.shoutOutService.loadAllShoutOuts().subscribe(
			(ShoutOuts: ShoutOutModel[]) => {
				this.shoutOuts = ShoutOuts;

			}
		)
	}

	createShoutOut(){

		this.userService.loggedIn().subscribe((res)=> {
			const newShoutOut: ShoutOutModel = {
				userId: this.sharedService.user._id,
				artEventsFunShout: false,
				educationShout: false,
				smallBizzShout: false,
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
				timeShout: "",
				websiteShout: "",
				shoutOutImage: ""
			};
			console.log(newShoutOut);
			 this.shoutOutService.postShoutOut(newShoutOut).subscribe(
				(shoutOut: ShoutOutModel) => {
					this.router.navigate(['user', this.sharedService.user._id ,'community' , 'shoutout', shoutOut._id]);
        		}
    		)
		})
	}

}
