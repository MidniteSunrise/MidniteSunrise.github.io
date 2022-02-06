/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
  var x = document.getElementById("toggleMenu");
  if (x.style.display === "inline-grid") {
    x.style.removeProperty("display");
  } else {
    x.style.display = "inline-grid";
  }
}

window.onresize = () => {
  var x = document.getElementById("toggleMenu");
  x.style.removeProperty("display");
};
