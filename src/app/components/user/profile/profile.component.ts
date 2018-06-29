import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../../Services/user.service.client'
import { User } from '../../../models/user.model.client'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm;

  uid: string;
  // personal
  birthday: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string ;
  password: string;
  // business
  businessContact: string;
  businessTitle: string;
  businessName: string;
  businessAddress: string;
  businessIndustry: string ;
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
  // ????
  oldUsername: string;
  usernameTaken: boolean;
  submitSuccess: boolean;
  user: User;
  aUser: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.usernameTaken = false;
    this.submitSuccess = false;
    this.activatedRoute.params.subscribe(
      params =>  {
        this.uid = params['uid'];
        // console.log(this.uid);
        this.userService.findUserById(this.uid).subscribe(
          (user: User) => {
            console.log(user);
            this.user = user;
            // personal
            this.birthday = this.user.birthday;
            this.email = this.user.email;
            this.userName = this.user.userName;
            this.firstName = this.user.firstName;
            this.lastName = this.user.lastName;
            this.password = this.user.password;
			// business
            this.businessContact = this.user.businessContact;
            this.businessTitle = this.user.businessTitle;
            this.businessName = this.user.businessName;
            this.businessAddress = this.user.businessAddress;
            this.businessIndustry = this.user.businessIndustry;
            this.businessWebsite = this.user.businessWebsite;
            this.businessEmail = this.user.businessEmail;
            this.businessPhone = this.user.businessPhone;
			// artist
            this.artistName = this.user.artistName;
            this.artistEmail = this.user.artistEmail;
            this.socialMedia1 = this.user.socialMedia1;
            this.socialMedia2 = this.user.socialMedia2;
            this.socialMedia3 = this.user.socialMedia3;
            this.artistWebsite = this.user.artistWebsite;
            this.artistPhone = this.user.artistPhone;
          }
        );
      })
  }

 //  update(){
 //  	// personal
 //  	this.birthday = this.profileForm.value.userName;
 //  	this.email = this.profileForm.value.email;
	// this.userName = this.profileForm.value.userName;
 //  	this.firstName = this.profileForm.value.firstName;
 //  	this.lastName = this.profileForm.value.lastName;
 //  	this.password = this.profileForm.value.email;
 //  	this.verifyPassword = this.profileForm.value.firstName;
 //  	// bizz
 //  	this.lastName = this.profileForm.value.lastName;
 //  	this.userName = this.profileForm.value.userName;
 //  	this.email = this.profileForm.value.email;
 //  	this.firstName = this.profileForm.value.firstName;
 //  	this.lastName = this.profileForm.value.lastName;
 //  	this.userName = this.profileForm.value.userName;
 //  	this.email = this.profileForm.value.email;
 //  	this.firstName = this.profileForm.value.firstName;
 //  	this.lastName = this.profileForm.value.lastName;
 //  	this.userName = this.profileForm.value.userName;
 //  	this.email = this.profileForm.value.email;
 //  	this.firstName = this.profileForm.value.firstName;
 //  	this.lastName = this.profileForm.value.lastName;
 //  	this.userName = this.profileForm.value.userName;
 //  	this.email = this.profileForm.value.email;
 //  	this.firstName = this.profileForm.value.firstName;
 //  	this.lastName = this.profileForm.value.lastName;
 //  	this.userName = this.profileForm.value.userName;
 //  	this.email = this.profileForm.value.email;
 //  	this.firstName = this.profileForm.value.firstName;
 //  	this.lastName = this.profileForm.value.lastName;
 //  	this.userName = this.profileForm.value.userName;
 //  	this.email = this.profileForm.value.email;
 //  	this.firstName = this.profileForm.value.firstName;
 //  	this.lastName = this.profileForm.value.lastName;

 //    //check if the new username was taken or the username was not changed
 //    this.userService.findUserByUsername(this.userName).subscribe(
 //       (user:User) => {
 //           this.aUser = user;
 //       }
 //    );

 //    if(this.aUser && this.oldUserName !== this.userName){
 //        this.userNameTaken = true;
 //        this.submitSuccess = false;
 //    } else {
 //        const updatedUser: User = {
 //            _id: this.user._id,
 //            birthday: this.birthday,
 //            email: this.email,
 //            userName: this.userName,
 //            firstName: this.firstName,
 //            lastName: this.lastName,          
 //            password: this.user.password,
 //            verifyPassword: this.verifyPassword,
 //            businessContact: this.businessContact,
 //            businessTitle: this.businessTitle,
 //            businessName: this.businessName,
 //            businessAddress: this.businessAddress,
 //            businessIndustry: this.businessIndustry,
 //            businessWebsite: this.businessWebsite,
 //            businessEmail: this.businessEmail,
 //            businessPhone: this.businessPhone,
 //            artistName: this.artistName,
 //            artistEmail: this.artistEmail,
 //            socialMedia1: this.socialMedia1,
 //            socialMedia2: this.socialMedia2,
 //            socialMedia3: this.socialMedia3,
 //            artistWebsite: this.artistWebsite,
 //            artistPhone: this.artistPhone
 
 //        };
 //        this.userService.updateUser(this.uid, updatedUser).subscribe(
 //            (user2: User) =>{
 //                this.usernameTaken = false;
 //                this.submitSuccess = true;
 //            }
 //        );
        
 //    }
 //  }

}
