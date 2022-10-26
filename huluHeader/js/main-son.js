function dropbtnfeature() {
  document.getElementById("tsdropdown").classList.toggle("showgrid");
}
// Close the dropdown if the user clicks outside of it

// mở đóng modalbox
var modalBtns = document.querySelectorAll(".modal-open");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = (btn.closest(".tsmodal").style.display = "none");
  };
});
