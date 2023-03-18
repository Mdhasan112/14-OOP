'use strict';
/*
///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1995);
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

console.log(jonas.__proto__);
console.log(jonas.__proto__ === person.prototype);

console.log(person.prototype.isPrototypeOf(jonas));
console.log(person.prototype.isPrototypeOf(manila));
console.log(person.prototype.isPrototypeOf(person));
///////////////////////////////////////
*/

/*
///////////////////////////////////////
// Coding Challenge #1

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
///////////////////////////////////////
*/

/*
///////////////////////////////////////
//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Method will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1995);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. classes are not hoisted
// 2. classes are first-class citizes
// 3. classes are executed in strict mode
///////////////////////////////////////
*/

/*
///////////////////////////////////////
const account = {
  owner: 'Jonas',
  movements: [200, 300, 450, 500, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
///////////////////////////////////////
*/

/*
///////////////////////////////////////
const personProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(personProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2000;
steven.calcAge();

const sarah = Object.create(personProto);

sarah.init('Steven', 1995);
sarah.calcAge();
///////////////////////////////////////
*/

/*
///////////////////////////////////////
// Coding Challenge #2

1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀


class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
///////////////////////////////////////
*/

/*
///////////////////////////////////////
//Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
///////////////////////////////////////
*/
