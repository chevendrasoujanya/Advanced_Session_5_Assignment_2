class person {
	name: string;
	constructor(name) {
		this.name = name;
	}
}

class eats {
	food: string;
	constructor(food) {
		this.food = food;
	}
}

class plays {
	game: string;
	constructor(game) {
		this.game = game;
	}
}

class codes {
	programming: string;
	constructor(programming) {
		this.programming = programming;
	}
}

function getCompleteInfo(mixins) {
	switch (mixins) {
		case "eats":
			let personObj = new person("John");
			let eatObj = new eats("Pizza");

			return {
				personName: personObj.name,
				personFood: eatObj.food
			}
			break;
		
		case "plays":
			let personObj = new person("John");
			let playObj = new plays("Foot Ball");

			return {
				personName: personObj.name,
				personPlay: playObj.game
			}
			break;
		
		case "codes":
			let personObj = new person("John");
			let codeObj = new codes("Angular2");

			return {
				personName: personObj.name,
				personSkills: codeObj.programming
			}
			break;
		
		default:
			return {
				personName: personObj.name
			}
			break;
	}
}

let personFoodDetails = getCompleteInfo('eats');
console.log(personFoodDetails);

let personPlayDetails = getCompleteInfo('plays');
console.log(personPlayDetails);

let personCodeDetails = getCompleteInfo('codes');
console.log(personCodeDetails);