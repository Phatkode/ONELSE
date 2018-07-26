import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import {UserService} from '../../../services/user.service.client'
declare var jQuery: any;
import { User } from '../../../models/user.model.client'
import { Router } from '@angular/router'
import { SharedService } from '../../../services/shared.service.client'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   @ViewChild('f') loginForm: NgForm;

  title = 'app';
  userName: string;
  password: string;
  errorFlag: boolean;
  // UserService: UserService;
  // router: Router;

  constructor(private SharedService: SharedService, private UserService: UserService, private router: Router) { }

  ngOnInit() {}

  closeLogin() {
    jQuery("#login").collapse('hide')
                }



  login()
  {
    // fetching data from loginForm
    this.userName = this.loginForm.value.userName;
    this.password = this.loginForm.value.password;
    //  calling client side UserService to send login information
     // console.log('data', this.userName, this.password);
     this.UserService.login(this.userName, this.password).subscribe(
         (user: User) => {
            if(!user) {
              this.errorFlag = true;
            } else{
              this.errorFlag = false;
              this.closeLogin();
              this.SharedService.user = user;
              this.UserService.findPictureForUser(user._id).subscribe(
                (res: any) => {
                  this.router.navigate(['user'])
                }
              )
            }
         },
         (error: any) =>{
           this.errorFlag = true;
         }
       );
   









  //   this.UserService.findUserByCredentials(this.userName, this.password).subscribe(
  //     (user: User) => {
  //       if(!user) {this.errorFlag = true;}
  //       else{

  //       this.closeLogin();
  //       this.router.navigate(['user', user._id]);
  //                     };
  //     (error: any) => {
  //       this.errorFlag = true;
  //       console.log(this.errorFlag)
  //                     }
  //            }         
  //                                                                                 )
  // }
}
}

