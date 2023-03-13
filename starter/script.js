'use strict';
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new person('Jonas', 1995);
console.log(jonas);

//New {}  is created
//function is called, this = {}
//{} linked to prototype
//function automatically return {}

const manila = new person('Manila', 1990);
const jack = new person('Jack', 1985);
console.log(manila);
console.log(jack);

//Prototypes
console.log(person.prototype);

person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
manila.calcAge();
