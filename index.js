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
  let diff = Math.abs(currheight - arr1[i - 1]);
  let diff2 = Math.abs(currheight - arr2[j - 1]);
  if (diff2 < diff) {
    Lift2(e);
    return;
  }
  arr1.push(currheight);
  console.log(arr1);
  let time = diff * 2;
  i++;
  console.log(time);
  dur = time + "s";
  console.log(dur);

  switch (e.id) {
    case "1":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "1280px";
      doorAnimation();
      removeAnimation();
      break;
    case "2":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "1130px";
      doorAnimation();
      removeAnimation();
      break;
    case "3":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "980px";
      doorAnimation();
      removeAnimation();
      break;
    case "4":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "830px";
      doorAnimation();
      removeAnimation();
      break;
    case "5":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "680px";
      doorAnimation();
      removeAnimation();
      break;
    case "6":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "530px";
      doorAnimation();
      removeAnimation();
      break;
    case "7":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "380px";
      doorAnimation();
      removeAnimation();
      break;
    case "8":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "230px";
      doorAnimation();
      removeAnimation();
      break;
    case "9":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "80px";
      doorAnimation();
      removeAnimation();
      break;
    case "10":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "-70px";
      doorAnimation();
      removeAnimation();
      break;
  }
}

function Lift2(e) {
  let currheight = parseInt(e.id);
  arr2.push(currheight);
  console.log(arr2);
  let time2 = Math.abs(arr2[j] - arr2[j - 1]) * 2;
  j++;
  console.log(time2);
  dur2 = time2 + "s";
  console.log(dur2);

  switch (e.id) {
    case "1":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "1280px";
      doorAnimation2();
      removeAnimation();
      break;
    case "2":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "1130px";
      doorAnimation2();
      removeAnimation();
      break;
    case "3":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "980px";
      doorAnimation2();
      removeAnimation();
      break;
    case "4":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "830px";
      doorAnimation2();
      removeAnimation();
      break;
    case "5":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "680px";
      doorAnimation2();
      removeAnimation();
      break;
    case "6":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "530px";
      doorAnimation2();
      removeAnimation();
      break;
    case "7":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "380px";
      doorAnimation2();
      removeAnimation();
      break;
    case "8":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "230px";
      doorAnimation2();
      removeAnimation();
      break;
    case "9":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "80px";
      doorAnimation2();
      removeAnimation();
      break;
    case "10":
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = "-70px";
      doorAnimation2();
      removeAnimation();
      break;
  }
}

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);

function doorAnimation() {
  leftDoor.style.animation = `openingDoor 2.5s 1 ${dur}`;
  rightDoor.style.animation = `openingDoor1 2.5s 1 ${dur}`;
  this.addEventListener("animationend", () => {
    leftDoor.style.animation = `closingDoor 2.5s 1 0s`;
    rightDoor.style.animation = `closingDoor1 2.5s 1 0s`;
  });
}

function doorAnimation2() {
  leftDoor2.style.animation = `openingDoor 2.5s 1 ${dur2}`;
  rightDoor2.style.animation = `openingDoor1 2.5s 1 ${dur2}`;
  this.addEventListener("animationend", () => {
    leftDoor2.style.animation = "closingDoor 2.5s 1 0s";
    rightDoor2.style.animation = "closingDoor1 2.5s 1 0s";
  });
}

function removeAnimation() {
  lift.addEventListener("transitionend", anime);
  leftDoor.style.removeProperty("animation");
  rightDoor.style.removeProperty("animation");
}
