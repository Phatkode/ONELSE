import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import {UserService} from './services/user.service.client'
declare var jQuery: any;
import { User } from './models/user.model.client'
import { ActivatedRoute, Router } from '@angular/router'
import { SharedService } from './services/shared.service.client'
import { ShoutOutService } from './services/shoutout.service.client';
import { CalPostService } from './services/calendarpost.service.client';
import { ShoutOutModel }  from './models/shoutout.model.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

	buttonContext: string;
	tipContext: string;

	constructor(public SharedService: SharedService, private UserService: UserService, private router: Router, private shoutOutService: ShoutOutService, private calPostService: CalPostService) { }

	ngOnInit(){
		this.buttonContext = "";
		this.tipContext = "";
		this.shoutOutService.retrieveShoutOutPics();
	    }

    hideButton(){
		this.buttonContext = "";
		this.tipContext = "";
    }
         
   
	closeLogin() {
		jQuery("#login").collapse('hide');
	}

	closeRegister() {
		jQuery("#register").collapse('hide');
	}

	logout() {
		this.UserService.logout().subscribe(
		     (data: any) => this.router.navigate(['/home'])
   		);
	}

	showButton(button: string) {
		this.buttonContext = button;

	}

	tipButton(button: string) {
	this.tipContext = button;
	}
	
}