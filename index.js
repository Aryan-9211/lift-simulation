const lift = document.querySelector(".lift");
const btn = document.querySelectorAll("button");

function Lift(e) {
  switch (e.id) {
    case "floor1":
      setTimeout(() => {
        lift.style.marginTop = "680px";
        setTimeout(() => {
          lift.style.marginTop = "530px";
          setTimeout(() => {
            lift.style.marginTop = "380px";
            setTimeout(() => {
              lift.style.marginTop = "230px";
              setTimeout(() => {
                lift.style.marginTop = "90px";
                setTimeout(() => {
                  lift.style.marginTop = "-70px";
                }, 4000);
              }, 4000);
            }, 4000);
          }, 4000);
        }, 4000);
      }, 2000);
      break;
    case "floor2":
      setTimeout(() => {
        lift.style.marginTop = "680px";
        setTimeout(() => {
          lift.style.marginTop = "530px";
          setTimeout(() => {
            lift.style.marginTop = "380px";
            setTimeout(() => {
              lift.style.marginTop = "230px";
              setTimeout(() => {
                lift.style.marginTop = "90px";
              }, 4000);
            }, 4000);
          }, 4000);
        }, 4000);
      }, 2000);
      break;
    case "floor3":
      setTimeout(() => {
        lift.style.marginTop = "680px";
        setTimeout(() => {
          lift.style.marginTop = "530px";
          setTimeout(() => {
            lift.style.marginTop = "380px";
            setTimeout(() => {
              lift.style.marginTop = "230px";
            }, 4000);
          }, 4000);
        }, 4000);
      }, 2000);
      break;
    case "floor4":
      setTimeout(() => {
        lift.style.marginTop = "680px";
        setTimeout(() => {
          lift.style.marginTop = "530px";
          setTimeout(() => {
            lift.style.marginTop = "380px";
          }, 4000);
        }, 4000);
      }, 2000);
      break;
    case "floor5":
      setTimeout(() => {
        lift.style.marginTop = "680px";
        setTimeout(() => {
          lift.style.marginTop = "530px";
        }, 4000);
      }, 2000);
      break;
    case "floor6":
        lift.style.marginTop = "680px";
      break;
      
    // case "floor7":
    //   lift.style.marginTop = "820px";
    //   break;
    // case "floor8":
    //   lift.style.marginTop = "970px";
    //   break;
    // case "floor9":
    //   lift.style.marginTop = "1120px";
    //   break;
    // case "floor10":
    //   lift.style.marginTop = "1270px";
    //   break;
  }
}

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);
