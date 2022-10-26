var modal = document.getElementById("abc");
var modal2 = document.getElementById("hihi");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("fa-x")[0];
var span1 = document.getElementById("close1");
var modal3 = document.getElementById("abc1");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var modal4 = document.getElementById("abc2");
var span2 = document.getElementById("close2");
var btn3 = document.getElementById("btn3");
var modal5 = document.getElementById("abc3");
var span3 = document.getElementById("close3");

btn.onclick = function () {
  modal.style.display = "block";
  modal2.style.position = "fixed";
};
span.onclick = function () {
  modal.style.display = "none";
  modal2.style.position = "relative";
};

btn1.onclick = function () {
  modal3.style.display = "block";
  modal2.style.position = "fixed";
};
span1.onclick = function () {
  modal2.style.position = "relative";
  modal3.style.display = "none";
};

btn2.onclick = function () {
  modal4.style.display = "block";
  modal2.style.position = "fixed";
};
span2.onclick = function () {
  modal2.style.position = "relative";
  modal4.style.display = "none";
};

btn3.onclick = function () {
  modal5.style.display = "block";
  modal2.style.position = "fixed";
};
span3.onclick = function () {
  modal2.style.position = "relative";
  modal5.style.display = "none";
};
