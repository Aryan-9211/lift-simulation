const lift = document.querySelector(".lift");
const btn = document.querySelectorAll("button");
const leftDoor = document.querySelector('.lift1');
const rightDoor = document.querySelector('.lift2');
var arr = [0];
let i = 1;

function Lift(e) {
  let currheight = parseInt(e.id);
  arr.push(currheight);
  console.log(arr);
  let time = Math.abs(arr[i] - arr[i-1]) * 2;
  i++;
  console.log(time);
  
  dur = time + 's';
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

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);

function removeAnimation() {
  lift.addEventListener('transitionend', anime);
  leftDoor.style.removeProperty('animation');
  rightDoor.style.removeProperty('animation');
}

var anime = function doorAnimation() {
  leftDoor.style.animation = "openingDoor 2.5s 1 .5s";
  rightDoor.style.animation = "openingDoor1 2.5s 1 .5s";
  this.addEventListener('animationend', () => {
    leftDoor.style.animation = "closingDoor 2.5s 1 0s";
    rightDoor.style.animation = "closingDoor1 2.5s 1 0s";
  });
}

