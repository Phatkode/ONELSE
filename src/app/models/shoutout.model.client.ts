export class ShoutOutModel {
	_id?: string;
	userId: string;
	artEventsFunShout: boolean;
	educationShout: boolean;
	itemReviewShout: boolean;
	smallBizzShout: boolean;
	outdoorsShout: boolean;
	familyShout: boolean;
	fitnessShout: boolean;
	diningShout: boolean;
	typeShout: string;
	nameShout: string;
	descriptionShout: string;
	locationShout: string;
	dateShout: string;
	timeShout: string;
	websiteShout?: string;
	shoutOutImage?: string;
}
