class User {

  #email
  #password
  constructor(email, password) {
    this.#email = email;
    this.#password = password;
  }

    set email(value) {
        this.#email = value;
    }
    get email() {
        return `${this.#email}@hello`;
    }
    
  set password(value) {
    this.#password = value;
  }

  get password() {
    return `${this.#password}satyam6154`;
  }
}

const satyam = new User("s@satyam.ai", "abc");
console.log(satyam);  //empty because of private feild
// console.log(satyam.#password);  //not accessible
console.log(satyam.password);
// console.log(satyam.#email);  //not accessible
console.log(satyam.email);
