// hình vuông
/*let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
*/

// hình tròn
/* let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
*/

// vẽ chữ sử dụng ctx.strokeText()
/*let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello world", 15, 50);
*/

// vẽ chữ sử dụng cxt.fillText()
/*let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello world", 15, 50);
*/

// hiệu ứng Gradient
/*let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
// Create gradient
let grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
*/

/*let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
// Create gradient
let grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
*/

// thực hành xây dựng lớp Date

/*let MyDate = function (day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.getDay = function () {
    return this.day;
  }
  this.getMonth = function () {
    return this.month;
  }
  this.getYear = function () {
    return this.year;
  }
  this.setDay = function (day) {
    this.day = day;
  }
  this.setMonth = function (month) {
    this.month = month;
  }
  this.setYear = function (year) {
    this.year = year;
  }
}
let date = new MyDate(2, 2, 2007);
let day = date.getDay(); // 2
let month = date.getMonth(); // 2
let year = date.getYear(); // 2007
alert(day + "/" + month + "/" + year);
*/

// thực hành xây dựng lớp hình tròn

/*let Circle = function (radius) {
  this.radius = radius;
  this.getRadius = function () {
    return radius;
  };
  this.getArea = function () {
    return Math.PI * radius * radius;
  };
};
let circle = new Circle(2);
let radius = circle.getRadius(); // 2
let area = circle.getArea(); // 12.566370614359172
alert("radius: " + radius + "; area: " + area);
*/

// Funny circles
/*function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}
function createCircle() {
  let ctx = document.getElementById("myCanvas").getContext("2d");
  let circle = new Circle(100, 50, 40);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fill();
}
function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}
function createCircle() {
  let ctx = document.getElementById("myCanvas").getContext("2d");
  let radius = Math.floor(Math.random() * 60);
  let circle = new Circle(100, 50, 40);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, radius, 0, 2 * Math.PI);
  ctx.fill();
}
createCircle();
function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}
function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  let red = getRandomHex();
  let green = getRandomHex();
  let blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function createCircle() {
  let ctx = document.getElementById("myCanvas").getContext("2d");
  let radius = Math.floor(Math.random() * 80);
  let color = getRandomColor();
  let circle = new Circle(100, 50, 40);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
createCircle();
function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}
function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  let red = getRandomHex();
  let green = getRandomHex();
  let blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function createCircle() {
  let ctx = document.getElementById("myCanvas").getContext("2d");
  let radius = Math.floor(Math.random() * 60);
  let color = getRandomColor();
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let circle = new Circle(x, y, radius);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
createCircle();
function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}
function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function createCircle() {
  var ctx = document.getElementById("myCanvas").getContext("2d");
  var radius = Math.floor(Math.random() * 80);
  var color = getRandomColor();
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var circle = new Circle(x, y, radius);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
createCircle();
createCircle();
function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}
function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  let red = getRandomHex();
  let green = getRandomHex();
  let blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function createCircle() {
  let ctx = document.getElementById("myCanvas").getContext("2d");
  let radius = Math.floor(Math.random() * 80);
  let color = getRandomColor();
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let circle = new Circle(x, y, radius);
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
function createMultipleCircle() {
  for (let i = 0; i < 30; i++) {
    createCircle();
  }
}
createMultipleCircle();
*/