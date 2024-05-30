//for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    if (greet == " ")
        continue;
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('Fr', "France");
map.set('IN', "India");

// console.log(map);

for (const [key,value] of map) {
    // console.log(`${key} :- ${value}`);
    // console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
//objects is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }