function SetUsername(username) {
    // complex DB calls
    this.username = username;
    // console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); //SetUsername(username); not use this

  this.email = email;
  this.password = password;
}


const satyam = new createUser("satyam", "satyam@fb.com", "432");
// console.log(satyam);

//.call(this, variable)

/*
    * this is optional. It used to give current context to function.

    * Hum call ka tab use karte hai jab hum ek function ke andar dusre function ko de dete hai jisme value current context me save honi chahiye lekin kyuki called function call hote hi hat jaata hai to uska reference hold karne ke liye call use karna padta hai.
    
    * this hum call ke arg me isliye bhejte hai jisse wo apna this nahi hamara this use kare matlab parent function ka.
*/