var person = (function () {
    function person(name) {
        this.name = name;
    }
    return person;
}());
var eats = (function () {
    function eats(food) {
        this.food = food;
    }
    return eats;
}());
var plays = (function () {
    function plays(game) {
        this.game = game;
    }
    return plays;
}());
var codes = (function () {
    function codes(programming) {
        this.programming = programming;
    }
    return codes;
}());
function getCompleteInfo(mixins) {
    switch (mixins) {
        case "eats":
            var personObj = new person("John");
            var eatObj = new eats("Pizza");
            return {
                personName: personObj.name,
                personFood: eatObj.food
            };
            break;
        case "plays":
            var personObj = new person("John");
            var playObj = new plays("Foot Ball");
            return {
                personName: personObj.name,
                personPlay: playObj.game
            };
            break;
        case "codes":
            var personObj = new person("John");
            var codeObj = new codes("Angular2");
            return {
                personName: personObj.name,
                personSkills: codeObj.programming
            };
            break;
        default:
            return {
                personName: personObj.name
            };
            break;
    }
}
var personFoodDetails = getCompleteInfo('eats');
console.log(personFoodDetails);
var personPlayDetails = getCompleteInfo('plays');
console.log(personPlayDetails);
var personCodeDetails = getCompleteInfo('codes');
console.log(personCodeDetails);
