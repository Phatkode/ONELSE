import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import {UserService} from './services/user.service.client'
declare var jQuery: any;
import { User } from './models/user.model.client'
import { ActivatedRoute, Router } from '@angular/router'
import { SharedService } from './services/shared.service.client'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

	buttonContext: string;

	constructor(private SharedService: SharedService, private UserService: UserService, private router: Router) { }

	ngOnInit(){
		this.buttonContext = "";
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
}