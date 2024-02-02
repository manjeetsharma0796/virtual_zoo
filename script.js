

//TOP NAVIGATION MENU
var prevScrollpos = window.pageYOffset;
window.onscroll = function() 
{
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//SUB NAVIGATION MENU
window.onscroll = function() {myFunction()};

var navbarr = document.getElementById("navbarr");
var sticky = navbarr.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarr.classList.add("columns");
    navbarr.classList.add("sticky");
  } 
  else {
    navbarr.classList.remove("sticky");
  }
}