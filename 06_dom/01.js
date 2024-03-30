// console.log(window);
// console.log(window.document);
// console.log(document);
// console.dir(document);
// console.log(document.baseURI);
// console.log(document.links);
// console.log(document.getElementById('firstHeading'));
// document.getElementById("firstHeading").innerHTML = "<h1>Satyam Kumar Jha</h1>";


document.getElementById('title');

document.getElementById('title').id;

document.getElementById('title').className;

document.getElementById("title").getAttribute("id");

document.getElementById("title").getAttribute("class");

// document.getElementById("title").setAttribute("class", "hello heading");

const title = document.getElementById("title");

title.style.backgroundColor = "red";

title.style.padding = "15px";

title.style.borderRadius = "15px";

title.textContent;

title.innerHTML;

title.innerText;

document.getElementsByClassName("heading");


//query Selector

document.querySelector(".heading");

document.querySelector("#title");

document.querySelector("h2");

document.querySelector('input[type="password"]');

document.querySelector('p:first-child');

document.querySelector("p:nth-child(1)");

const myul = document.querySelector("ul");

const turnGreen = myul.querySelector("li");

// turnGreen.style.backgroundColor = "green";

// turnGreen.style.padding = "10px";

turnGreen.innerText;

// turnGreen.innerText = "five";

//query Selector All

document.querySelectorAll("li");

const tempLiList = document.querySelectorAll("li");

tempLiList;

// tempLiList.style.backgroundColor = 'red';  //not work in qsall
// tempLiList[0].style.color = 'green';  //it works

const myH1 = document.querySelectorAll("h1");


myH1[0].style.color = "yellow";

// tempLiList.forEach(function (l) {
//     l.style.backgroundColor = 'blue';
// })

//get element by class name
document.getElementsByClassName("list-item");

// gives HTMLCollection
const tempClassList = document.getElementsByClassName("list-item");

console.log(tempClassList);
//convert it to array for iteration
const myConvertedArray = Array.from(tempClassList);

console.log(myConvertedArray);

//now we will use forEach

myConvertedArray.forEach(li =>
    li.style.color = 'orange');
