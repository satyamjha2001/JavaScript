const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  //   console.log(Math.floor(Math.random() * 16));
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  //   console.log(color);
  return color;
};
const color = function () {
  document.body.style.backgroundColor = randomColor();
};
let intervalId = null;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(color, 1000);
  }
};

function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
