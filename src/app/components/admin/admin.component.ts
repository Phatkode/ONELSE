import { SharedService } from '../../services/shared.service.client';
import { UserService } from '../../services/user.service.client';
import { User } from '../../models/user.model.client'
import { ShoutOutService } from '../../services/shoutout.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoutOutModel} from '../../models/shoutout.model.client'
import { CalPostService } from '../../services/calendarpost.service.client';
import { CalendarPostModel} from '../../models/calendarpost.model.client'
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	uid: string;
    calendarPosts: CalendarPostModel[];
    shoutOuts: ShoutOutModel[];
    users: User[];

    adminSearch: string = "";

  constructor(private calPostService: CalPostService, private activatedRoute: ActivatedRoute, 
  	private sharedService: SharedService, private router: Router, private shoutOutService: ShoutOutService, private userService: UserService) { }

	ngOnInit() {
		this.userService.findUsers().subscribe(
            (users:User[]) => {
                this.users = users;
                console.log("hello");
                console.log(this.users);
                for(let user of users) {
                    this.userService.findPictureForUser(user._id).subscribe();
                }
            }
        );
		// // this.adminSearch = ""
		// this.calPostService.loadAllCalendarPosts().subscribe(
		// 	(CalendarPosts: CalendarPostModel[]) => {
		// 		this.calendarPosts = CalendarPosts;
		// 	}
		// )
		// this.shoutOutService.loadAllShoutOuts().subscribe(
		// 	(ShoutOuts: ShoutOutModel[]) => {
		// 		this.shoutOuts = ShoutOuts;

		// 	}
		// )
	
	    
	}

}



// this.shoutOuts = newShoutOuts;