const lift = document.querySelector(".lift");
const btn = document.querySelectorAll("button");

function Lift(e) {
  switch (e.id) {
    case "floor1":
      lift.style.transitionDuration = "2s";
      lift.style.marginTop = "670px";
      break;
    case "floor2":
      lift.style.transitionDuration = "4s";
      lift.style.marginTop = "520px";
      break;
    case "floor3":
      lift.style.transitionDuration = "6s";
      lift.style.marginTop = "370px";
      break;
    case "floor4":
      lift.style.transitionDuration = "8s";
      lift.style.marginTop = "220px";
      break;
    case "floor5":
      lift.style.transitionDuration = "10s";
      lift.style.marginTop = "70px";
      break;
    case "floor6":
      lift.style.transitionDuration = "12s";
      lift.style.marginTop = "-90px";
      break;
  }
}

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);
