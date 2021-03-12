var css = document.getElementById("box");
var body = document.getElementById("body");
var color1 = document.querySelector(".input1");
var color2 = document.querySelector(".input2");

const gradient = function () {
  body.style.background =
    "linear-gradient(to left, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
};
color1.addEventListener("input", gradient);

color2.addEventListener("input", gradient);
