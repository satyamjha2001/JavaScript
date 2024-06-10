//singleton
//Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Satyam",
    "full name": "Satyam Kumar Jha",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "satyamjha23112001@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "satyam@chatgpt.com";
// Object.freeze(JsUser);  //freeze when implements then we can't update the objects
JsUser.email = "satyam@microsoft.com";
// JsUser.last = "jha";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

JsUser.greeting();

JsUser.greetingTwo();