const lift = document.querySelector(".lift");
const lift_2 = document.querySelector(".lift_2");
const btn = document.querySelectorAll("button");
const leftDoor = document.querySelector(".lift1");
const rightDoor = document.querySelector(".lift2");
const leftDoor2 = document.querySelector(".lift_2 > .lift1");
const rightDoor2 = document.querySelector(".lift_2 > .lift2");
var arr1 = [0];
var arr2 = [0];
let i = 1;
let j = 1;

function Lift(e) {
  let currheight = parseInt(e.id);
  arr1.push(currheight);
  console.log(arr1);
  let diff = Math.abs(arr1[i] - arr1[i - 1]);
  let diff2 = Math.abs(currheight - arr2[j - 1]);
  if(diff > diff2){
    Lift2(e);
    return;
  }
  let time = diff * 2;
  i++;
  console.log(time);
  dur = time + "s";
  console.log(dur);

  switch (e.id) {
    case "1":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "670px";
      removeAnimation();
      break;
    case "2":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "520px";
      removeAnimation();
      break;
    case "3":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "370px";
      removeAnimation();
      break;
    case "4":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "220px";
      removeAnimation();
      break;
    case "5":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "70px";
      removeAnimation();
      break;
    case "6":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "-90px";
      removeAnimation();
      break;
  }
}

function Lift2(e) {
  let currheight = parseInt(e.id);
  arr2.push(currheight);
  console.log(arr2);
  let time = Math.abs(arr2[j] - arr2[j - 1]) * 2;
  j++;
  console.log(time);
  dur = time + "s";
  console.log(dur);

  switch (e.id) {
    case "1":
      lift_2.style.transitionDuration = dur;
      lift_2.style.marginTop = "670px";
      removeAnimation();
      break;
    case "2":
      lift_2.style.transitionDuration = dur;
      lift_2.style.marginTop = "520px";
      removeAnimation();
      break;
    case "3":
      lift_2.style.transitionDuration = dur;
      lift_2.style.marginTop = "370px";
      removeAnimation();
      break;
    case "4":
      lift_2.style.transitionDuration = dur;
      lift_2.style.marginTop = "220px";
      removeAnimation();
      break;
    case "5":
      lift_2.style.transitionDuration = dur;
      lift_2.style.marginTop = "70px";
      removeAnimation();
      break;
    case "6":
      lift_2.style.transitionDuration = dur;
      lift_2.style.marginTop = "-90px";
      removeAnimation();
      break;
  }
}

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);

var anime = function doorAnimation() {
  leftDoor.style.animation = "openingDoor 2.5s 1 .5s";
  rightDoor.style.animation = "openingDoor1 2.5s 1 .5s";
  leftDoor2.style.animation = "openingDoor 2.5s 1 .5s";
  rightDoor2.style.animation = "openingDoor1 2.5s 1 .5s";
  this.addEventListener("animationend", () => {
    leftDoor.style.animation = "closingDoor 2.5s 1 0s";
    rightDoor.style.animation = "closingDoor1 2.5s 1 0s";
    leftDoor2.style.animation = "closingDoor 2.5s 1 0s";
    rightDoor2.style.animation = "closingDoor1 2.5s 1 0s";
  });
};

function removeAnimation() {
  lift.addEventListener("transitionend", anime);
  leftDoor.style.removeProperty("animation");
  rightDoor.style.removeProperty("animation");
}
