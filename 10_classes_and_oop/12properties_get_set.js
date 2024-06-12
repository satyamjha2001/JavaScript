function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    set: function (value) {
      this._email = value;
    },
    get: () => {
      return this._email.toUpperCase();
    },
  });
  Object.defineProperty(this, "password", {
    set: function (value) {
      this._password = value;
    },
    get: () => {
      return this._password.toUpperCase();
    },
  });
}

const satyam = new User("s@satyam.ai", "123abs");

console.log(satyam);
console.log(satyam._email);  //accessible
console.log(satyam.email);
console.log(satyam._password);  //accessible
console.log(satyam.password);
