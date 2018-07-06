export class VlogLyfe {
	
	_id: string;
	vlogLyfe_id: string;
	artEventsFun: boolean;
	education: boolean;
	itemReview: boolean;
	outdoors: boolean;
	family: boolean;
	fitness: boolean;
	dining: boolean;
	classification: string;
	url: string;
	title: string;
	vlogEntry: string;
	imageOne: string;
	imageTwo: string;
	imageThree: string;



	
	

	constructor(_id, vlogLyfe_id, classification, url, title, vlogEntry, imageOne, imageTwo, imageThree) {
	this._id = this._id;
	this.vlogLyfe_id = this.vlogLyfe_id;
	this.artEventsFun = artEventsFun;
	this.education = education;
	this.itemReview = itemReview;
	this.outdoors = outdoors;
	this.family = family;
	this.fitness = fitness;
	this.dining = dining;
	this.classification = classification;
	this.url = url;
	this.title = title;
	this.vlogEntry = vlogEntry;
	this.imageOne = imageOne;
	this.imageTwo = imageTwo;
	this.imageThree = imageThree;

	}
}