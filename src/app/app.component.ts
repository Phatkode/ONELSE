import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import {UserService} from './Services/user.service.client'

import { User } from './models/user.model.client'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';

@ViewChild('f') loginForm: NgForm;

  userName: string;
  password: string;
  errorFlag: boolean;
  // userService: UserService;
  // router: Router;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.userName = this.loginForm.value.userName;
    this.password = this.loginForm.value.password;
    this.userService.findUserByCredentials(this.userName, this.password).subscribe(
      (user: User) => {
        this.errorFlag = false;
        this.router.navigate(['user', user._id]);
      },
      (error: any) => {
        this.errorFlag = true;
      }
    )
  }
}





