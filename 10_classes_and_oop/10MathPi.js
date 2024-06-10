const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
// console.log(Math.PI);

// Math.PI = 5;

// console.log(Math.PI);

//Object creaation methods
const mynewObject = Object.create({
  username: "satyam", // it is not directly connected it is connected by prototype.
});

// console.log(mynewObject);  // empty
// console.log(mynewObject.username); // output: satyam

const mynewObject1 = new Object();
mynewObject1.username = "satyam jha";
// console.log(mynewObject1);
const mynewObject2 = Object.create(null);
mynewObject2.username = "satyam jha";
// console.log(mynewObject1);

const chai = {
  name: "ginger chai",
  price: 300,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nahi bani");
  },
};

// console.log(chai);

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
    })
Object.defineProperty(chai, 'price', {
    writable: false,
    enumerable: false
    })

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
