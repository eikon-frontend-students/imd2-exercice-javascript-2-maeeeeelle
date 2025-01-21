// var box = document.querySelector(".change-color");
var changeColorBox = document.querySelector(".change-color");

changeColorBox.addEventListener("click", function () {
  changeColorBox.style.backgroundColor = "blue";
});

var toggleBox = document.querySelector(".toggle-color");
let isRed = false;

toggleBox.addEventListener("click", function () {
  if (isRed) {
    toggleBox.style.backgroundColor = "orange";
  } else {
    toggleBox.style.backgroundColor = "red";
  }
  isRed = !isRed;
});

var triggerBox = document.querySelector(".trigger");
var targetBox = document.querySelector(".target");
let isVisible = true;

triggerBox.addEventListener("click", function () {
  if (isVisible) {
    targetBox.style.display = "none";
  } else {
    targetBox.style.display = "block";
  }
  isVisible = !isVisible;
});

var triggerAllBox = document.querySelector(".trigger-all");
var changeColorBox = document.querySelector(".change-color");
var toggleColorBox = document.querySelector(".toggle-color");

triggerAllBox.addEventListener("click", function () {
  changeColorBox.style.backgroundColor = "blue";
  toggleColorBox.style.backgroundColor = "red";
});

var triggerAllSelfBox = document.querySelector(".trigger-all-self");
var changeColorBox = document.querySelector(".change-color");
var toggleColorBox = document.querySelector(".toggle-color");

triggerAllSelfBox.addEventListener("click", function () {
  triggerAllSelfBox.style.backgroundColor = "green";
  changeColorBox.style.backgroundColor = "blue";
  toggleColorBox.style.backgroundColor = "red";
});
