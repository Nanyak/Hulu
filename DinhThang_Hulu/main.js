window.onload = function get_body() {
  body = document.getElementsByTagName("body")[0];
};
function tabBtn1() {
  document.getElementById("activeBar").classList.add("activeBar-sports");
  document.getElementById("activeBar").classList.remove("activeBar-news");
  document.getElementById("activeBar").classList.remove("activeBar-events");
  document.getElementById("inC2").classList.remove("active");
  document.getElementById("inC3").classList.remove("active");
  document.getElementById("inC1").classList.remove("inactive");
  document.getElementById("inC1").classList.add("active");
  document.getElementById("inC2").classList.add("inactive");
  document.getElementById("inC3").classList.add("inactive");
  document.getElementById("spotlight").classList.add("sports");
  document.getElementById("spotlight").classList.remove("news");
  document.getElementById("spotlight").classList.remove("events");
}
function tabBtn2() {
  document.getElementById("activeBar").classList.remove("activeBar-sports");
  document.getElementById("activeBar").classList.add("activeBar-news");
  document.getElementById("activeBar").classList.remove("activeBar-events");
  document.getElementById("inC2").classList.remove("inactive");
  document.getElementById("inC3").classList.remove("active");
  document.getElementById("inC1").classList.remove("active");
  document.getElementById("inC1").classList.add("inactive");
  document.getElementById("inC2").classList.add("active");
  document.getElementById("inC3").classList.add("inactive");
  document.getElementById("spotlight").classList.remove("sports");
  document.getElementById("spotlight").classList.add("news");
  document.getElementById("spotlight").classList.remove("events");
}

function tabBtn3() {
  document.getElementById("activeBar").classList.remove("activeBar-sports");
  document.getElementById("activeBar").classList.remove("activeBar-news");
  document.getElementById("activeBar").classList.add("activeBar-events");
  document.getElementById("inC2").classList.remove("active");
  document.getElementById("inC3").classList.remove("inactive");
  document.getElementById("inC1").classList.remove("active");
  document.getElementById("inC1").classList.add("inactive");
  document.getElementById("inC2").classList.add("inactive");
  document.getElementById("inC3").classList.add("active");
  document.getElementById("spotlight").classList.remove("sports");
  document.getElementById("spotlight").classList.remove("news");
  document.getElementById("spotlight").classList.add("events");
}
function downBtn() {
  location.href = "#spotlight";
}
var modalContainer = document.getElementsByClassName("modal-container");
function closeModalbtn() {
  for (var i = 0; i < modalContainer.length; i++) {
    modalContainer[i].style.display = "none";
    body.style.overflow = "auto";
  }
}
function openSpotlightModal() {
  document.getElementById("modal-container-s").style.display = "block";
  body.style.overflow = "hidden";
}
function billboardModalLink() {
  document.getElementById("modal-container-b").style.display = "block";
  body.style.overflow = "hidden";
}

window.onclick = function (event) {
  //thang-js
  var x = event.target;
  if (x == document.getElementById("modal-backdrop-s")) {
    document.getElementById("modal-container-s").style.display = "none";
    body.style.overflow = "auto";
  } else if (x == document.getElementById("modal-backdrop-b")) {
    document.getElementById("modal-container-b").style.display = "none";
    body.style.overflow = "auto";
    //son-js
  } else if (!event.target.matches(".tsdropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showgrid")) {
        openDropdown.classList.remove("showgrid");
      }
    }
  }
  // đóng modalbox khi click ra ngoài
  if (event.target.className == "tsmodal") {
    event.target.style.display = "none";
  }
};
// window.onclick = function (event) {
//   var x = event.target;
//   alert(x);
// };
