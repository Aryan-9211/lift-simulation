// document.querySelector(".btn1").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "-70px";
// });

// document.querySelector(".btn2").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "90px";
// })

// document.querySelector(".btn3").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "90px";
// })

// document.querySelector(".btn4").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "230px";
// })

// document.querySelector(".btn5").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "230px";
// })

// document.querySelector(".btn6").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "380px";
// })

// document.querySelector(".btn7").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "380px";
// })

// document.querySelector(".btn8").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "530px";
// })

// document.querySelector(".btn9").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "530px";
// })

// document.querySelector(".btn10").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "680px";
// })

// document.querySelector(".btn11").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "680px";
// })

// document.querySelector(".btn12").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "820px";
// });

// document.querySelector(".btn13").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "820px";
// })

// document.querySelector(".btn14").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "970px";
// })

// document.querySelector(".btn15").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "970px";
// })

// document.querySelector(".btn16").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "1120px";
// })

// document.querySelector(".btn17").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "1120px";
// })

// document.querySelector(".btn18").addEventListener("click", function(){
//     document.querySelector(".lift").style.marginTop = "1270px";
// })




const lift = document.querySelector(".lift");
const btn = document.querySelectorAll("button");

function Lift(e) {
  switch (e.id) {
    case "floor1":
      lift.style.marginTop = "-70px";
      break;
    case "floor2":
      lift.style.marginTop = "90px";
      break;
    case "floor3":
      lift.style.marginTop = "230px";
      break;
    case "floor4":
      lift.style.marginTop = "380px";
      break;
    case "floor5":
      lift.style.marginTop = "530px";
      break;
    case "floor6":
      lift.style.marginTop = "6800px";
      break;
    case "floor7":
      lift.style.marginTop = "820px";
      break;
    case "floor8":
      lift.style.marginTop = "970px";
      break;
    case "floor9":
      lift.style.marginTop = "1120px";
      break;
    case "floor10":
      lift.style.marginTop = "1270px";
      break;
  }
}

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    Lift(e.target);
  })
);
