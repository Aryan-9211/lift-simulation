const lift = document.querySelector(".lift");
const btn = document.querySelectorAll("button");

function Lift(e) {
  switch (e.id) {
    case "floor1":
      
      break;
    case "floor2":
      
      break;
    case "floor3":
      
      break;
    case "floor4":
      
      break;
    case "floor5":
      
      break;
    case "floor6":
        lift.style.marginTop = "680px";
      break;
  }
}

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);
