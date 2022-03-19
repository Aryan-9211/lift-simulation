/////////// QUEUE IMPLEMENTATION ///////////

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  isEmpty() {
    return this.items.length == 0;
  }

  dequeue() {
    if (this.isEmpty()) return 'underflow';
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return 'No elements in queue';
    }
    return this.items[0];
  }

  printQueue() {
    var str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

/////////////////////////////////////////////

//initialising a queue
var input = new Queue();

//assigning elements to keywords
const lift = document.querySelector('.lift');
const lift_2 = document.querySelector('.lift_2');
const btn = document.querySelectorAll('button');
const leftDoor = document.querySelector('.lift1');
const rightDoor = document.querySelector('.lift2');
const leftDoor2 = document.querySelector('.lift_2 > .lift1');
const rightDoor2 = document.querySelector('.lift_2 > .lift2');

var arr1 = [0];
var arr2 = [0];
let i = 1;
let j = 1;
let count = 0;

/*Function for lift1, runs when the value of count is even  */
function Lift(e) {
  if (count % 2 != 0) {
    Lift2(e);
    return;
  }
  let currheight = parseInt(e);
  arr1.push(currheight);
  console.log(arr1);
  let time = Math.abs(arr1[i] - arr1[i - 1]) * 2; // lift should move at 2s per floor
  i++;
  count++;
  console.log(time);
  dur = time + 's';
  console.log(dur);

  switch (e) {
    case '1':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '1280px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '2':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '1130px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '3':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '980px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '4':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '830px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '5':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '680px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '6':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '530px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '7':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '380px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '8':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '230px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '9':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '80px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
    case '10':
      lift.style.transitionDuration = dur;
      lift.style.marginTop = '-70px';
      input.dequeue();
      doorAnimation();
      removeAnimation();
      break;
  }
}

/* function for lift2 runs when count is odd*/
function Lift2(e) {
  let currheight = parseInt(e);
  arr2.push(currheight);
  console.log(arr2);
  let time2 = Math.abs(arr2[j] - arr2[j - 1]) * 2; 
  j++;
  count++;
  console.log(time2);
  dur2 = time2 + 's';
  console.log(dur2);

  switch (e) {
    case '1':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '1280px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '2':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '1130px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '3':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '980px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '4':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '830px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '5':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '680px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '6':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '530px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '7':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '380px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '8':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '230px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '9':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '80px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
    case '10':
      lift_2.style.transitionDuration = dur2;
      lift_2.style.marginTop = '-70px';
      input.dequeue();
      doorAnimation2();
      removeAnimation2();
      break;
  }
}

/*adding event listeners to button and if the it was 
the first call then calling function aryan*/
let a = 0;
let b = -1;
let start = 0;
btn.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    console.log(input.isEmpty() == true);
    let a = e.target.id;
    if (b != a) {
      b = a;
      input.enqueue(b);
      console.log(input);
      start++;
      if (start == 1) {
        aryan();
      }
    }
  }),
);

/* This function is called only one time at the intial call
after that command passes to setInterval*/
function aryan() {
  if (input.isEmpty() == false) {
    Lift(input.front());
    input.dequeue();
  }
}

/*This is called after every 7s and checks that if the user has called 
for a life and if queue is not empty then it calls the lift function */
setInterval(function aryan() {
  if (input.isEmpty() == false) {
    Lift(input.front());
    input.dequeue();
  }
}, 7000);

//adds animation to left door of first lift
function doorAnimation() {
  leftDoor.style.animation = `openingDoor 2.5s 1 ${dur}`;
  rightDoor.style.animation = `openingDoor1 2.5s 1 ${dur}`;
  this.addEventListener('animationend', () => {
    leftDoor.style.animation = `closingDoor 2.5s 1 0s`;
    rightDoor.style.animation = `closingDoor1 2.5s 1 0s`;
  });
}

//adds animation to right door of first lift
function doorAnimation2() {
  leftDoor2.style.animation = `openingDoor 2.5s 1 ${dur2}`;
  rightDoor2.style.animation = `openingDoor1 2.5s 1 ${dur2}`;
  this.addEventListener('animationend', () => {
    leftDoor2.style.animation = 'closingDoor 2.5s 1 0s';
    rightDoor2.style.animation = 'closingDoor1 2.5s 1 0s';
  });
}

//adds animation to left door of second lift
function removeAnimation() {
  lift.addEventListener('transitionend', animate);
  leftDoor.style.removeProperty('animation');
  rightDoor.style.removeProperty('animation');
}

//adds animation to right door of second lift
function removeAnimation2() {
  lift_2.addEventListener('transitionend', animate);
  leftDoor.style.removeProperty('animation');
  rightDoor.style.removeProperty('animation');
}
