var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class Decorator Example
function myClassDecorator(target) {
    console.log(target);
    target.prototype.name = "Soujanya";
}
var myClassDecoratorExercise = (function () {
    function myClassDecoratorExercise() {
    }
    return myClassDecoratorExercise;
}());
myClassDecoratorExercise = __decorate([
    myClassDecorator
], myClassDecoratorExercise);
var myObj = new myClassDecoratorExercise();
console.log(myObj.name);
// Parameterised Class Decorator Example
function myParameterisedDecorator(param) {
    return function (target) {
        target.prototype.designation = param;
        return target;
    };
}
var myParameterisedDecoratorExample = (function () {
    function myParameterisedDecoratorExample() {
    }
    return myParameterisedDecoratorExample;
}());
myParameterisedDecoratorExample = __decorate([
    myParameterisedDecorator("Software Engineer")
], myParameterisedDecoratorExample);
var myObj1 = new myParameterisedDecoratorExample();
console.log(myObj1.designation);
