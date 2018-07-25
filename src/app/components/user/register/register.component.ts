import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../../services/user.service.client'
import { User } from '../../../models/user.model.client'
import { Router } from '@angular/router'
declare var jQuery: any;
import { SharedService } from '../../../services/shared.service.client'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  @ViewChild('f') registerForm: NgForm;

  // personal
  birthday: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  verifyPassword: string;
  passwordError: boolean;
  usernameError: boolean;
  // business
  businessContact: string;
  businessTitle: string;
  businessName: string;
  businessAddress: string;
  businessIndustry: string;
  businessWebsite: string;
  businessEmail: string;
  businessPhone: string;
  // artist
  artistName: string;
  artistEmail: string;
  socialMedia1: string;
  socialMedia2: string;
  socialMedia3: string;
  artistWebsite: string;
  artistPhone: string;

  constructor(private SharedService: SharedService, private UserService: UserService, private router: Router) { }
  ngOnInit() {
      this.passwordError = false;
      this.usernameError = false;
  }


  closeRegister() {
    jQuery("#register").collapse('hide')
  }


  register(){
  	// personal
    this.birthday = this.registerForm.value.birthday;
    this.email = this.registerForm.value.email;
    this.userName = this.registerForm.value.userName;
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
  	this.password = this.registerForm.value.password;
  	this.verifyPassword = this.registerForm.value.verifyPassword;
   	// business
  	this.businessContact = this.registerForm.value.businessContact;
  	this.businessTitle = this.registerForm.value.businessTitle;
  	this.businessName = this.registerForm.value.businessName;
  	this.businessAddress = this.registerForm.value.businessAddress;
  	this.businessIndustry = this.registerForm.value.businessIndustry;
  	this.businessWebsite = this.registerForm.value.businessWebsite;
	  this.businessEmail = this.registerForm.value.businessEmail;
  	this.businessPhone = this.registerForm.value.businessPhone;
  	// artist
  	this.artistName = this.registerForm.value.artistName;
  	this.artistEmail = this.registerForm.value.artistEmail;
  	this.socialMedia1 = this.registerForm.value.socialMedia1;
  	this.socialMedia2 = this.registerForm.value.socialMedia2;
  	this.socialMedia3 = this.registerForm.value.socialMedia3;
  	this.artistWebsite = this.registerForm.value.artistWebsite;
  	this.artistPhone = this.registerForm.value.artistPhone;

    if(this.password !== this.verifyPassword) {
        this.passwordError = true;
    } else {
        this.passwordError = false;
        this.UserService.findUserByUsername(this.userName).subscribe(
            (data: any) => {
                if(!data) {
                  const newUser: User = {
                    birthday: this.birthday,
                    email: this.email,
                    userName: this.userName,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                    businessContact: this.businessContact,
                    businessTitle: this.businessTitle,
                    businessName: this.businessName,
                    businessAddress: this.businessAddress,
                    businessIndustry: this.businessIndustry,
                    businessWebsite: this.businessWebsite,
                    businessEmail: this.businessEmail,
                    businessPhone: this.businessPhone,
                    // artist
                    artistName: this.artistName,
                    artistEmail: this.artistEmail,
                    socialMedia1: this.socialMedia1,
                    socialMedia2: this.socialMedia2,
                    socialMedia3: this.socialMedia3,
                    artistWebsite: this.artistWebsite,
                    artistPhone: this.artistPhone
                  };
                     
              this.UserService.register(newUser)
             .subscribe(
               (data: User) => {
                   this.SharedService.user = data;
                   console.log(data);
                   this.router.navigate(['/user']);
                  },
                  (error: any) => {
                    this.usernameError = true;
                   }
                  );
                   } else {
                       this.usernameError = true;
                   }
                
            this.closeRegister();
       
          }
        );
    }
  }
}


