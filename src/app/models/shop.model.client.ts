export class MyPurchase {
	
	_id: string;
	purchaseId: string;
	date: string;
	amount: string;
	item: string;
	vendor: string;
	username?: string ;
	

	constructor(_id, purchaseId:, websiteId, description) {
		this._id = _id;
		this.name = name;
		this.websiteId = websiteId;
		this.description = description;
	}
}