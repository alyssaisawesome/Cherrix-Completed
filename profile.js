



/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}



/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 

function backtomain() {

  window.location="news.html";

}

function about() {
  window.location="about.html";
}

function profile() {
  window.location="profile.html";
}

function articles() {
  window.location="news.html";
}

function projects() {
  window.location="projects.html";
}


 function logout() {
  window.location="index.html";
}