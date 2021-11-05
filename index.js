const lift = document.querySelector(".lift");
const btn = document.querySelectorAll("button");

function Lift(e) {
  var a = e.id;
  var n = a[5] * 2; 
  switch (e.id) {
    case "floor1":
      lift.style.transition_duration = "n";
      lift.style.marginTop = "670px";
      break;
    case "floor2":
      lift.style.transition_duration = "n";
      lift.style.marginTop = "520px";
      break;
    case "floor3":
      lift.style.transition_duration = "n";
      lift.style.marginTop = "370px";
      break;
    case "floor4":
      lift.style.transition_duration = "n";
      lift.style.marginTop = "220px";
      break;
    case "floor5":
      lift.style.transition_duration = "n";
      lift.style.marginTop = "70px";
      break;
    case "floor6":
      lift.style.transition_duration = "n";
      lift.style.marginTop = "-90px";
      break;
  }
}

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);
