/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  const width = 400;
  document.getElementById("mySidebar").style.width = width + "px";
  document.getElementById("main").style.marginLeft = width + "px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
