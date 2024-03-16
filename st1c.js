
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").style.backgroundColor = "blue";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "#030065";
  }
}