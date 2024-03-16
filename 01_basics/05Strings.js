const name = "Satyam";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my reo count is ${repoCount}`);

const gameName = new String('satyam-gamer-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,6);
console.log(newString);


const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   satyam    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satyam.com/satyam%20jha";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));