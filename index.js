const lift = document.querySelector(".lift");
const btn = document.querySelectorAll("button");
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
      break;
    case "2":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "520px";
      break;
    case "3":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "370px";
      break;
    case "4":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "220px";
      break;
    case "5":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "70px";
      break;
    case "6":
      lift.style.transitionDuration = dur;
      lift.style.marginTop = "-90px";
      break;
  }
}

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);


