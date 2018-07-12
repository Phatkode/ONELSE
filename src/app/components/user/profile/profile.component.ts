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

  editable: boolean =false;
  uid: string;
  // personal
  birthday: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string ;
  password: string;
  // personal booleans
  events: boolean;
  education: boolean;
  itemsReview: boolean;
  smallBizz: boolean;
  outdoors: boolean;
  family: boolean;
  fitness: boolean;
  dining: boolean;



  // business
  businessContact: string;
  businessTitle: string;
  businessName: string;
  businessAddress: string;
  businessIndustry: string ;
  businessWebsite: string;
  businessEmail: string;
  businessPhone: string;
  //   business booleans
  businessServices: boolean;
  computerElectronics: boolean;
  teaching: boolean;
  unionUtilities: boolean;
  governmentPublic: boolean;
  healthMedicine: boolean;
  manufacturing: boolean;
  mediaEntertainment: boolean;
  nonprofitAdvocacy: boolean;
  realestateConstruction: boolean;
  entrepreneurContractor: boolean;
  customerService: boolean;  
  trasportationTravel: boolean;
  salesDistribution: boolean;
  culinaryArts: boolean;
  professionalArtist: boolean;



  // artist
  artistName: string;
  artistEmail: string;
  socialMedia1: string;
  socialMedia2: string;
  socialMedia3: string;
  artistWebsite: string;
  artistPhone: string;
  //   artist booleans
  digitalGraphics: boolean;
  canvasArt: boolean;
  webDesign: boolean;
  photography: boolean;
  videography: boolean;
  lyricalArts: boolean;
  vocalInstrument: boolean;
  theater: boolean;
  modeling: boolean;
  acting: boolean;
  comedy: boolean;
  dance: boolean;
  musicProduction: boolean;
  // ????
  oldUsername: string;
  usernameTaken: boolean;
  submitSuccess: boolean;
  user: User = {
    birthday: "",
    email: "",
    _id: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: ""
  };
  aUser: User;


  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.usernameTaken = false;
    this.submitSuccess = false;
    this.editable = false;
    this.activatedRoute.params.subscribe(
      params =>  {
        this.uid = params['uid'];
        // console.log(this.uid);
        this.userService.findUserById(this.uid).subscribe(
          (user: User) => {
            // console.log(user);
            this.user = user;
            // personal
            this.birthday = this.user.birthday;
            this.email = this.user.email;
            this.userName = this.user.userName;
            this.firstName = this.user.firstName;
            this.lastName = this.user.lastName;
            this.password = this.user.password;
            this.events = this.user.events;
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

 update(){
   // console.log("update");
  // personal
  this.birthday = this.profileForm.value.birthday;
  this.email = this.profileForm.value.email;
  this.userName = this.profileForm.value.userName;
  this.firstName = this.profileForm.value.firstName;
  this.lastName = this.profileForm.value.lastName;
  this.password = this.profileForm.value.password;
  // booleans personal
  this.events = this.profileForm.value.events;
  this.education = this.profileForm.value.education;
  this.itemsReview = this.profileForm.value.itemsReview;
  this.smallBizz = this.profileForm.value.smallBizz;
  this.outdoors = this.profileForm.value.outdoors;
  this.family = this.profileForm.value.family;
  this.fitness = this.profileForm.value.fitness;
  this.dining = this.profileForm.value.dining;


  // business
  this.businessContact = this.profileForm.value.businessContact;
  this.businessTitle = this.profileForm.value.businessTitle;
  this.businessName = this.profileForm.value.businessName;
  this.businessAddress = this.profileForm.value.businessAddress;
  this.businessIndustry = this.profileForm.value.businessIndustry;
  this.businessWebsite = this.profileForm.value.businessWebsite;
  this.businessEmail = this.profileForm.value.businessEmail;
  this.businessPhone = this.profileForm.value.businessPhone;
// booleans business
  this.businessServices = this.profileForm.value.businessServices;
  this.computerElectronics = this.profileForm.value.computerElectronics;
  this.teaching = this.profileForm.value.teaching;
  this.unionUtilities = this.profileForm.value.unionUtilities;
  this.governmentPublic = this.profileForm.value.governmentPublic;
  this.healthMedicine = this.profileForm.value.healthMedicine;
  this.manufacturing = this.profileForm.value.manufacturing;
  this.mediaEntertainment = this.profileForm.value.mediaEntertainment;
  this.nonprofitAdvocacy = this.profileForm.value.nonprofitAdvocacy;
  this.realestateConstruction = this.profileForm.value.realestateConstruction;
  this.entrepreneurContractor = this.profileForm.value.entrepreneurContractor;
  this.customerService = this.profileForm.value.customerService; 
  this.trasportationTravel = this.profileForm.value.trasportationTravel;
  this.salesDistribution = this.profileForm.value.salesDistribution;
  this.culinaryArts = this.profileForm.value.culinaryArts;
  this.professionalArtist = this.profileForm.value.professionalArtist;


  // artist
  this.artistName = this.profileForm.value.artistName;
  this.artistEmail = this.profileForm.value.artistEmail;
  this.socialMedia1 = this.profileForm.value.socialMedia1;
  this.socialMedia2 = this.profileForm.value.socialMedia2;
  this.socialMedia3 = this.profileForm.value.socialMedia3;
  this.artistWebsite = this.profileForm.value.artistWebsite;
  this.artistPhone = this.profileForm.value.artistPhone;
  // booleans artists
  this.digitalGraphics = this.profileForm.value.digitalGraphics;
  this.canvasArt = this.profileForm.value.canvasArt;
  this.webDesign = this.profileForm.value.webDesign;
  this.photography = this.profileForm.value.photography;
  this.videography = this.profileForm.value.videography;
  this.lyricalArts = this.profileForm.value.lyricalArt;
  this.vocalInstrument = this.profileForm.value.vocalInstrument;
  this.theater = this.profileForm.value.theater;
  this.modeling = this.profileForm.value.modeling;
  this.acting = this.profileForm.value.acting;
  this.comedy = this.profileForm.value.comedy;
  this.dance = this.profileForm.value.dance;
  this.musicProduction = this.profileForm.value.musicProduction;

  const newUser = {
    _id: this.uid,
    birthday: this.birthday,
    email: this.email,
    userName: this.userName,
    firstName: this.firstName,
    lastName: this.lastName,
    password: this.password,
    // booleans personal
    events: this.events,
    education: this.education,
    itemsReview: this.itemsReview,
    smallBizz: this.smallBizz,
    outdoors: this.outdoors,
    family: this.family,
    fitness: this.fitness,
    dining: this.dining,


    // business
    businessContact: this.businessContact,
    businessTitle: this.businessTitle,
    businessName: this.businessName,
    businessAddress: this.businessAddress,
    businessIndustry: this.businessIndustry,
    businessWebsite: this.businessWebsite,
    businessEmail: this.businessEmail,
    businessPhone: this.businessPhone,
  // booleans business
    businessServices: this.businessServices,
    computerElectronics: this.computerElectronics,
    teaching: this.teaching,
    unionUtilities: this.unionUtilities,
    governmentPublic: this.governmentPublic,
    healthMedicine: this.healthMedicine,
    manufacturing: this.manufacturing,
    mediaEntertainment: this.mediaEntertainment,
    nonprofitAdvocacy: this.nonprofitAdvocacy,
    realestateConstruction: this.realestateConstruction,
    entrepreneurContractor: this.entrepreneurContractor,
    customerService: this.customerService, 
    trasportationTravel: this.trasportationTravel,
    salesDistribution: this.salesDistribution,
    culinaryArts: this.culinaryArts,
    professionalArtist: this.professionalArtist,


    // artist
    artistName: this.artistName,
    artistEmail: this.artistEmail,
    socialMedia1: this.socialMedia1,
    socialMedia2: this.socialMedia2,
    socialMedia3: this.socialMedia3,
    artistWebsite: this.artistWebsite,
    artistPhone: this.artistPhone,
    // booleans artists
    digitalGraphics: this.digitalGraphics,
    canvasArt: this.canvasArt,
    webDesign: this.webDesign,
    photography: this.photography,
    videography: this.videography,
    lyricalArts: this.lyricalArts,
    vocalInstrument: this.vocalInstrument,
    theater: this.theater,
    modeling: this.modeling,
    acting: this.acting,
    comedy: this.comedy,
    dance: this.dance,
    musicProduction: this.musicProduction,

  }

  this.userService.updateUser(this.uid, newUser).subscribe(
       (res: User) => {
         this.ngOnInit();
       }
    )

  }

  changeEditable() {
    this.editable=true;
  }

  
  // saveProfile() {
  //   jQuery("#saveProfile").collapse('hide');
  // }

}
