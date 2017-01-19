// Class Decorator Example
function myClassDecorator(target) {
	console.log(target);
	target.prototype.name = "Soujanya";
}

@myClassDecorator
class myClassDecoratorExercise {
	name: string;
	constructor() {

	}
}

let myObj = new myClassDecoratorExercise();
console.log(myObj.name);

// Parameterised Class Decorator Example
function myParameterisedDecorator(param) {
	return function(target) {
		target.prototype.designation = param;
		return target;
	}
}

@myParameterisedDecorator("Software Engineer")
class myParameterisedDecoratorExample {
	designation: string;
	constructor() {

	}
}

let myObj1 = new myParameterisedDecoratorExample();
console.log(myObj1.designation);