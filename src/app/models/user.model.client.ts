

export class User {
	_id: string;
	birthday: string;
	email: string;
	userName: string;
	firstName: string;
	lastName: string ;
	password: string;

	
	businessContact?: string;
	businessTitle?: string;
	businessName?: string;
	businessAddress?: string;
	businessIndustry?: string ;
	businessWebsite?: string;
	businessEmail?: string;
	businessPhone?: string;


	artistName?: string;
	artistEmail?: string;
	socialMedia1?: string;
	socialMedia2?: string;
	socialMedia3?: string;
	artistWebsite?: string;
	artistPhone?: string;


	constructor(_id, birthday, email, userName, firstName, lastName, password) {
			
	this._id = this._id;
	this.birthday = birthday;
	this.email = email;
	this.userName = userName;
	this.firstName = firstname;
	this.lastName: lastName;
	this.password = password;

	
	this.businessContact = businessContact;
	this.businessTitle = businessTitle;
	this.businessName = businessName;
	this.businessAddress = businessAddress;
	this.businessIndustry?: businessIndustry;
	this.businessWebsite = businessWebsite;
	this.businessEmail = businessEmail;
	this.businessPhone = businessPhone;

	
	this.artistName = artistName;
	this.artistEmail = artistEmail;
	this.socialMedia1 = socialMedia1;
	this.socialMedia2 = socialMedia2;
	this.socialMedia3 = socialMedia3;
	this.artistWebsite = artistWebsite;
	this.artistPhone = artistPhone;
	}
}