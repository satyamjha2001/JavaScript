const coding = ["js", "ruby", "java", "python", "cpp"];

// forEach callback function can have name.

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(val) {
//     console.log(val);
// }

// coding.forEach(printMe);

// coding.forEach((value, index, arr) => {
//     console.log(value, index, arr);
//  })

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
})
