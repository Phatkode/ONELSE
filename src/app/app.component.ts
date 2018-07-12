import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import {UserService} from './Services/user.service.client'
declare var jQuery: any;
import { User } from './models/user.model.client'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


	ngOnInit(){}


	closeLogin() {
		jQuery("#login").collapse('hide');
	}

	closeRegister() {
		jQuery("#register").collapse('hide');
	}
}