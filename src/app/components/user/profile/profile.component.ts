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
  itemReview: boolean;
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
            console.log(typeof this.user.events);
            console.log(this.user.events);

            // if events is false, uncheck the checkbox
            // personal booleans
            if(!this.user.events) {
              this.user.events = null;
            }
               if(!this.user.education) {
              this.user.education = null;
            }
               if(!this.user.itemReview) {
              this.user.itemReview = null;
            }
               if(!this.user.smallBizz) {
              this.user.smallBizz = null;
            }
               if(!this.user.outdoors) {
              this.user.outdoors = null;
            }
               if(!this.user.family) {
              this.user.family = null;
            }
               if(!this.user.fitness) {
              this.user.fitness = null;
            }
               if(!this.user.dining) {
              this.user.dining = null;
            }
            // business booleans
               if(!this.user.businessServices) {
              this.user.businessServices = null;
            }
               if(!this.user.computerElectronics) {
              this.user.computerElectronics = null;
            }
               if(!this.user.teaching) {
              this.user.teaching = null;
            }
               if(!this.user.unionUtilities) {
              this.user.unionUtilities = null;
            }
               if(!this.user.governmentPublic) {
              this.user.governmentPublic = null;
            }
               if(!this.user.healthMedicine) {
              this.user.healthMedicine = null;
            }
               if(!this.user.manufacturing) {
              this.user.manufacturing = null;
            }
               if(!this.user.mediaEntertainment) {
              this.user.mediaEntertainment = null;
            }
               if(!this.user.nonprofitAdvocacy) {
              this.user.nonprofitAdvocacy = null;
            }
               if(!this.user.realestateConstruction) {
              this.user.realestateConstruction = null;
            }
               if(!this.user.entrepreneurContractor) {
              this.user.entrepreneurContractor = null;
            }
               if(!this.user.customerService) {
              this.user.customerService = null;
            }
               if(!this.user.trasportationTravel) {
              this.user.trasportationTravel = null;
            }
               if(!this.user.salesDistribution) {
              this.user.salesDistribution = null;
            }
               if(!this.user.culinaryArts) {
              this.user.culinaryArts = null;
            }
               if(!this.user.professionalArtist) {
              this.user.professionalArtist = null;
            }
             // artist booleans
               if(!this.user.digitalGraphics) {
              this.user.digitalGraphics = null;
            }
               if(!this.user.webDesign) {
              this.user.webDesign = null;
            }
               if(!this.user.canvasArt) {
              this.user.canvasArt = null;
            }
               if(!this.user.photography) {
              this.user.photography = null;
            }
               if(!this.user.videography) {
              this.user.videography = null;
            }
               if(!this.user.lyricalArts) {
              this.user.lyricalArts = null;
            }
               if(!this.user.vocalInstrument) {
              this.user.vocalInstrument = null;
            }
               if(!this.user.theater) {
              this.user.theater = null;
            }
               if(!this.user.modeling) {
              this.user.modeling = null;
            }
               if(!this.user.acting) {
              this.user.acting = null;
            }
               if(!this.user.comedy) {
              this.user.comedy = null;
            }
               if(!this.user.dance) {
              this.user.dance = null;
            }
               if(!this.user.musicProduction) {
              this.user.musicProduction = null;
            }
            // console.log(this.user.events);
            // personal
   //          this.birthday = this.user.birthday;
   //          this.email = this.user.email;
   //          this.userName = this.user.userName;
   //          this.firstName = this.user.firstName;
   //          this.lastName = this.user.lastName;
   //          this.password = this.user.password;
   //          // personal booleans
   //          this.events = this.user.events;
   //          this.education = this.user.education;
   //          this.itemReview = this.user.itemReview;
   //          this.smallBizz = this.user.smallBizz;
   //          this.outdoors = this.user.outdoors;
   //          this.family = this.user.family;
   //          this.fitness = this.user.fitness;
   //          this.dining = this.user.dining;

			// // business
   //          this.businessContact = this.user.businessContact;
   //          this.businessTitle = this.user.businessTitle;
   //          this.businessName = this.user.businessName;
   //          this.businessAddress = this.user.businessAddress;
   //          this.businessIndustry = this.user.businessIndustry;
   //          this.businessWebsite = this.user.businessWebsite;
   //          this.businessEmail = this.user.businessEmail;
   //          this.businessPhone = this.user.businessPhone;
   //          // personal booleans
   //          this.businessServices = this.user.businessServices;
   //          this.computerElectronics = this.user.computerElectronics;
   //          this.teaching = this.user.teaching;
   //          this.unionUtilities = this.user.unionUtilities;
   //          this.governmentPublic = this.user.governmentPublic;
   //          this.healthMedicine = this.user.healthMedicine;
   //          this.manufacturing = this.user.manufacturing;
   //          this.mediaEntertainment = this.user.mediaEntertainment;
   //          this.nonprofitAdvocacy = this.user.nonprofitAdvocacy;
   //          this.realestateConstruction = this.user.realestateConstruction;
   //          this.entrepreneurContractor = this.user.entrepreneurContractor;
   //          this.customerService = this.user.customerService;
   //          this.trasportationTravel = this.user.trasportationTravel;
   //          this.salesDistribution = this.user.salesDistribution;
   //          this.culinaryArts = this.user.culinaryArts;
   //          this.professionalArtist = this.user.professionalArtist;
			// // artist
   //          this.artistName = this.user.artistName;
   //          this.artistEmail = this.user.artistEmail;
   //          this.socialMedia1 = this.user.socialMedia1;
   //          this.socialMedia2 = this.user.socialMedia2;
   //          this.socialMedia3 = this.user.socialMedia3;
   //          this.artistWebsite = this.user.artistWebsite;
   //          this.artistPhone = this.user.artistPhone;
   //    // artist booleans
   //          this.digitalGraphics = this.digitalGraphics;
   //          this.canvasArt = this.user.canvasArt;
   //          this.webDesign = this.user.webDesign;
   //          this.photography = this.user.photography;
   //          this.videography = this.user.videography;
   //          this.lyricalArts = this.user.lyricalArts;
   //          this.vocalInstrument = this.user.vocalInstrument;
   //          this.theater = this.user.theater;
   //          this.modeling = this.user.modeling;
   //          this.acting = this.user.acting;
   //          this.comedy = this.user.comedy;
   //          this.dance = this.user.dance;
   //          this.musicProduction = this.user.musicProduction;
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

  // casting "" to false, and others to true
  if(!this.profileForm.value.events) {
    this.events = false; 
  } else{
    this.events = true;
  }


               if(!this.profileForm.value.education) {
              this.education = false;
            }else{
    this.education = true;
  }
               if(!this.profileForm.value.itemReview) {
              this.itemReview = false;
            }else{
    this.itemReview = true;
  }
               if(!this.profileForm.value.smallBizz) {
              this.smallBizz = false;
            }else{
    this.smallBizz = true;
  }
               if(!this.profileForm.value.outdoors) {
              this.outdoors = false;
            }else{
    this.outdoors = true;
  }
               if(!this.profileForm.value.family) {
              this.family = false;
            }else{
    this.family = true;
  }
               if(!this.profileForm.value.fitness) {
              this.fitness = false;
            }else{
    this.fitness = true;
  }
               if(!this.profileForm.value.dining) {
              this.dining = false;
            }else{
    this.dining = true;
  }
            // business booleans
               if(!this.profileForm.value.businessServices) {
              this.businessServices = false;
            }else{
    this.businessServices = true;
  }
               if(!this.profileForm.value.computerElectronics) {
              this.computerElectronics = false;
            }else{
    this.computerElectronics = true;
  }
               if(!this.profileForm.value.teaching) {
              this.teaching = false;
            }else{
    this.teaching = true;
  }
               if(!this.profileForm.value.unionUtilities) {
              this.unionUtilities = false;
            }else{
    this.unionUtilities = true;
  }
               if(!this.profileForm.value.governmentPublic) {
              this.governmentPublic = false;
            }else{
    this.governmentPublic = true;
  }
               if(!this.profileForm.value.healthMedicine) {
              this.healthMedicine = false;
            }else{
    this.healthMedicine = true;
  }
               if(!this.profileForm.value.manufacturing) {
              this.manufacturing = false;
            }else{
    this.manufacturing = true;
  }
               if(!this.profileForm.value.mediaEntertainment) {
              this.mediaEntertainment = false;
            }else{
    this.mediaEntertainment = true;
  }
               if(!this.profileForm.value.nonprofitAdvocacy) {
              this.nonprofitAdvocacy = false;
            }else{
    this.nonprofitAdvocacy = true;
  }
               if(!this.profileForm.value.realestateConstruction) {
              this.realestateConstruction = false;
            }else{
    this.realestateConstruction = true;
  }
               if(!this.profileForm.value.entrepreneurContractor) {
              this.entrepreneurContractor = false;
            }else{
    this.entrepreneurContractor = true;
  }
               if(!this.profileForm.value.customerService) {
              this.customerService = false;
            }else{
    this.customerService = true;
  }
               if(!this.profileForm.value.trasportationTravel) {
              this.trasportationTravel = false;
            }else{
    this.trasportationTravel = true;
  }
               if(!this.profileForm.value.salesDistribution) {
              this.salesDistribution = false;
            }else{
    this.salesDistribution = true;
  }
               if(!this.profileForm.value.culinaryArts) {
              this.culinaryArts = false;
            }else{
    this.culinaryArts = true;
  }
               if(!this.profileForm.value.professionalArtist) {
              this.professionalArtist = false;
            }else{
    this.professionalArtist = true;
  }
             // artist booleans
               if(!this.profileForm.value.digitalGraphics) {
              this.digitalGraphics = false;
            }else{
    this.digitalGraphics = true;
  }
               if(!this.profileForm.value.webDesign) {
              this.webDesign = false;
            }else{
    this.webDesign = true;
  }
               if(!this.profileForm.value.canvasArt) {
              this.canvasArt = false;
            }else{
    this.canvasArt = true;
  }
               if(!this.profileForm.value.photography) {
              this.photography = false;
            }else{
    this.photography = true;
  }
               if(!this.profileForm.value.videography) {
              this.videography = false;
            }else{
    this.videography = true;
  }
               if(!this.profileForm.value.lyricalArts) {
              this.lyricalArts = false;
            }else{
    this.lyricalArts = true;
  }
               if(!this.profileForm.value.vocalInstrument) {
              this.vocalInstrument = false;
            }else{
    this.vocalInstrument = true;
  }
               if(!this.profileForm.value.theater) {
              this.theater = false;
            }else{
    this.theater = true;
  }
               if(!this.profileForm.value.modeling) {
              this.modeling = false;
            }else{
    this.modeling = true;
  }
               if(!this.profileForm.value.acting) {
              this.acting = false;
            }else{
    this.acting = true;
  }
               if(!this.profileForm.value.comedy) {
              this.comedy = false;
            }else{
    this.comedy = true;
  }
               if(!this.profileForm.value.dance) {
              this.dance = false;
            }else{
    this.dance = true;
  }
               if(!this.profileForm.value.musicProduction) {
              this.musicProduction = false;
            }else{
    this.musicProduction = true;
  }

















  // this.education = this.profileForm.value.education;
  // this.itemReview = this.profileForm.value.itemReview;
  // this.smallBizz = this.profileForm.value.smallBizz;
  // this.outdoors = this.profileForm.value.outdoors;
  // this.family = this.profileForm.value.family;
  // this.fitness = this.profileForm.value.fitness;
  // this.dining = this.profileForm.value.dining;


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
  // this.businessServices = this.profileForm.value.businessServices;
  // this.computerElectronics = this.profileForm.value.computerElectronics;
  // this.teaching = this.profileForm.value.teaching;
  // this.unionUtilities = this.profileForm.value.unionUtilities;
  // this.governmentPublic = this.profileForm.value.governmentPublic;
  // this.healthMedicine = this.profileForm.value.healthMedicine;
  // this.manufacturing = this.profileForm.value.manufacturing;
  // this.mediaEntertainment = this.profileForm.value.mediaEntertainment;
  // this.nonprofitAdvocacy = this.profileForm.value.nonprofitAdvocacy;
  // this.realestateConstruction = this.profileForm.value.realestateConstruction;
  // this.entrepreneurContractor = this.profileForm.value.entrepreneurContractor;
  // this.customerService = this.profileForm.value.customerService;
  // this.trasportationTravel = this.profileForm.value.trasportationTravel;
  // this.salesDistribution = this.profileForm.value.salesDistribution;
  // this.culinaryArts = this.profileForm.value.culinaryArts;
  // this.professionalArtist = this.profileForm.value.professionalArtist;


  // artist
  this.artistName = this.profileForm.value.artistName;
  this.artistEmail = this.profileForm.value.artistEmail;
  this.socialMedia1 = this.profileForm.value.socialMedia1;
  this.socialMedia2 = this.profileForm.value.socialMedia2;
  this.socialMedia3 = this.profileForm.value.socialMedia3;
  this.artistWebsite = this.profileForm.value.artistWebsite;
  this.artistPhone = this.profileForm.value.artistPhone;
  // booleans artists
  // this.digitalGraphics = this.profileForm.value.digitalGraphics;
  // this.canvasArt = this.profileForm.value.canvasArt;
  // this.webDesign = this.profileForm.value.webDesign;
  // this.photography = this.profileForm.value.photography;
  // this.videography = this.profileForm.value.videography;
  // this.lyricalArts = this.profileForm.value.lyricalArts;
  // this.vocalInstrument = this.profileForm.value.vocalInstrument;
  // this.theater = this.profileForm.value.theater;
  // this.modeling = this.profileForm.value.modeling;
  // this.acting = this.profileForm.value.acting;
  // this.comedy = this.profileForm.value.comedy;
  // this.dance = this.profileForm.value.dance;
  // this.musicProduction = this.profileForm.value.musicProduction;

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
    itemReview: this.itemReview,
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
         this.submitSuccess = true;
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
