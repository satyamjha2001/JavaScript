const user = {
    username: "satyam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// if we have to use another object than we have to write whole objectcode
// const user2 = {
//   username: "satyam",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log("Got user details from database");
//     console.log(`Username: ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// user.getUserDetails();
// console.log(this);


//Optimised method

// Constructor function = new()  // makes new instances of one object literal

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    // return this;
}

// const userOne = User("satyam", 10, true);
// const userTwo = User("satyam jha", 20, false);

// by the above line userTwo overwrites the values in userOne also so we will have to use constructor function.

// better method

// new already takes implicitly this so no need to return this;
const userOne = new User("satyam", 10, true);
const userTwo = new User("satyam jha", 20, false);

console.log(userOne.constructor);
// console.log(userTwo);
// console.log(userOne.username);