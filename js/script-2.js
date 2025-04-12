// let qtr = document.querySelector('.qtr');
// qtr.style.background = 'blue';
// // let count = 0;
// qtr.addEventListener('click', handlerClick);

// function handlerClick() {
//   //   qtr.style.left = 200;
//   qtr.style.left = parseFloat(qtr.left) + 20 + 'px';
//   //   qtr.left = parseFloat(qtr.left) + 20 + 'px';
// }
// handlerClick();
let button = document.querySelector('.button');
let ball = document.querySelector('.ball').style;

button.onclick = function () {
  ball.left = parseFloat(ball.left) + 20 + 'px';
};
