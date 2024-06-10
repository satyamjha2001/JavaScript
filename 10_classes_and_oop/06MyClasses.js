//After ES6 syntactical sugar provided

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  function() {
    return `${this.password}abcsd`;
  }

  encryptPassword() {
    this.password = this.password.concat("sjhvaj");
    return this.password;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const s = new User("satyam", "satyam@fb.com", "123452");
// console.log(s); //log before encryptPassword
// console.log(s.encryptPassword()); //encryptPassword called.
// console.log(s);  //log after encryptPassword

console.log(s.changeUsername());

//behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  this.encryptPassword = function () {
    return `${this.password}abc`;
  };
}

User1.prototype.changeUsername = function () {
  return `${this.username.toLowerCase()}`;
};
const satyam = new User1("Satyamjha", "abc@gmail.com", "121");
console.log(satyam);
console.log(satyam.encryptPassword());

console.log(satyam.changeUsername());
