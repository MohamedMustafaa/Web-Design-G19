let counter1 = document.querySelector(".counter1");
let counter2 = document.querySelector(".counter2");
let counter3 = document.querySelector(".counter3");
let counter4 = document.querySelector(".counter4");

// counter.innerText = i

// let set = setInterval(()=>{
//     if(i == 8000){
//         clearInterval(set)
//     }
//     counter.innerText = i
//     i+=10
// },10)
//     function count(counter, enNum, incNum , time = 100){
//         let i = 0
//         let set = setInterval(()=>{
//             if(i == enNum){
//                 clearInterval(set)
//             }
//             counter.innerText = i
//             i += incNum
//         },time)
// }
// count(counter1, 8000, 2000)
// count(counter2, 810, 10, 10)
// count(counter3, 2000, 200)
// count(counter4, 20, 5)
// window.addEventListener('scroll', function(){
//     if(document.documentElement.scrollTop > 600)
//         scrollUp.style.display = "block"
//     else scrollUp.style.display = "none"
// })
let flag = true;
function count(counter, enNum, incNum, time = 100) {
  let i = 0;
  let set = setInterval(() => {
    if (i == enNum) {
      clearInterval(set);
    }
    counter.innerText = i;
    i += incNum;
  }, time);

  flag = false;
}

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 600)
    scrollUp.style.display = "block";
  else scrollUp.style.display = "none";

  if (document.documentElement.scrollTop > 800) {
    if (flag) {
      count(counter1, 8000, 1000);
      count(counter2, 810, 10, 10);
      count(counter3, 2000, 200);
      count(counter4, 20, 2);
    }
  }
});
// circle canvas
var canvas = document.getElementById("box");
var ctx = canvas.getContext("2d");
var radius = 50;
var endPercent = 70;
var CurPer = 0;
var circ = Math.PI * 2;
var quart = Math.PI * 2;
ctx.lineWidth = 10;
ctx.strokeStyle = "black";
// ctx.showOffsetX= 0;
// ctx.showOffsetY= 0;
// ctx.shadowBlur= 1;
// ctx.shadowColors= "#656565";
function draw(currentPerc) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc("70", "100", radius, -quart, circ * currentPerc - quart, false);
  ctx.stroke();

  CurPer++;
  if (CurPer < endPercent) {
    requestAnimationFrame(function () {
      draw(CurPer / 100);
    });
  }
}
draw();

// circle1 canvas
var canvasOne = document.getElementById("box-one");
var ctxOne = canvasOne.getContext("2d");
var radius = 50;
var endPercentOne = 85;
var CurPerOne = 0;
var circOne = Math.PI * 2;
var quartOne = Math.PI * 2;
ctxOne.lineWidth = 10;
ctxOne.strokeStyle = "black";
// ctx.showOffsetX= 0;
// ctx.showOffsetY= 0;
// ctx.shadowBlur= 1;
// ctx.shadowColors= "#656565";
function drawOne(currentPercOne) {
  ctxOne.clearRect(0, 0, canvasOne.width, canvasOne.height);
  ctxOne.beginPath();
  ctxOne.arc(
    "70",
    "100",
    radius,
    -quartOne,
    circOne * currentPercOne - quartOne,
    false
  );
  ctxOne.stroke();

  CurPerOne++;
  if (CurPerOne < endPercentOne) {
    requestAnimationFrame(function () {
      drawOne(CurPerOne / 100);
    });
  }
}
drawOne();

// circle2 canvas
var canvasTwo = document.getElementById("box-two");
var ctxTwo = canvasTwo.getContext("2d");
var radius = 50;
var endPercentTwo = 80;
var CurPerTwo = 0;
var circTwo = Math.PI * 2;
var quartTwo = Math.PI * 2;
ctxTwo.lineWidth = 10;
ctxTwo.strokeStyle = "black";
// ctx.showOffsetX= 0;
// ctx.showOffsetY= 0;
// ctx.shadowBlur= 1;
// ctx.shadowColors= "#656565";
function drawTwo(currentPercTwo) {
  ctxTwo.clearRect(0, 0, canvasTwo.width, canvasTwo.height);
  ctxTwo.beginPath();
  ctxTwo.arc(
    "70",
    "100",
    radius,
    -quartTwo,
    circTwo * currentPercTwo - quartTwo,
    false
  );
  ctxTwo.stroke();

  CurPerTwo++;
  if (CurPerTwo < endPercentTwo) {
    requestAnimationFrame(function () {
      drawTwo(CurPerTwo / 100);
    });
  }
}
drawTwo();

// circle3 canvas
var canvasThree = document.getElementById("box-three");
var ctxThree = canvasThree.getContext("2d");
var radius = 50;
var endPercentThree = 95;
var CurPerThree = 0;
var circThree = Math.PI * 2;
var quartThree = Math.PI * 2;
ctxThree.lineWidth = 10;
ctxThree.strokeStyle = "black";
// ctx.showOffsetX= 0;
// ctx.showOffsetY= 0;
// ctx.shadowBlur= 1;
// ctx.shadowColors= "#656565";
function drawThree(currentPercThree) {
  ctxThree.clearRect(0, 0, canvasThree.width, canvasThree.height);
  ctxThree.beginPath();
  ctxThree.arc(
    "70",
    "100",
    radius,
    -quartThree,
    circThree * currentPercThree - quartThree,
    false
  );
  ctxThree.stroke();

  CurPerThree++;
  if (CurPerThree < endPercentThree) {
    requestAnimationFrame(function () {
      drawThree(CurPerThree / 100);
    });
  }
}
drawThree();
