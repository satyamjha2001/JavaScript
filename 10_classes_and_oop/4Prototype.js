let myName = "satyam     ";

// console.log(myName.length);
// console.log(myName.trim().length);

let myHeroes = ["Shaktiman", "Bheem"];

let heroPower = {
  Shaktiman: "Fly",
  Bheem: "Fight",

  getBheemPower: function () {
    console.log(`Bheem power is ${this.Bheem}`);
  },
};

Object.prototype.satyam = function () {
  console.log(`Satyam is present in all Objects`);
};

Array.prototype.heySatyam = function () {
  console.log(`Satyam says hello`);
};

// heroPower.satyam();
// myHeroes.satyam();
// heroPower.heySatyam();
// myHeroes.heySatyam();

// Inheritance


//Old Syntax
const User = {
  name: "Satyam",
  email: "satyam@gmail.com"
}

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport  //old time syntax
};

Teacher.__proto__ = User; //in this Teacher(child) access the property of User(Parent).


//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher); //in this TeachingSupport(child) access the property of Teacher(Parent).



//making truelength

let anotherUsername = "Saket    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUsername.trueLength();

"Satyam".trueLength();
"Cake".trueLength();