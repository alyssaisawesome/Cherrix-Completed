var hi="";

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 

function new_article() {
  window.location="create.html";
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


function psupport() {  

  hi = document.getElementById("pbutton").textContent;

if (hi == "Support"){

  document.getElementById("pbutton").innerHTML = "Unsupport";

}
else {

  document.getElementById("pbutton").innerHTML="Support";

}

}

function ccsupport() {  

  hi = document.getElementById("ccbutton").textContent;

  document.getElementById("ccbutton").innerHTML = hi == "Support" ? "Unsupport" : "Support"

}

function csupport() {  

  hi = document.getElementById("cbutton").textContent;

  document.getElementById("cbutton").innerHTML = hi == "Support" ? "Unsupport" : "Support"

}

function asupport() {  

  hi = document.getElementById("abutton").textContent;

  document.getElementById("abutton").innerHTML = hi == "Support" ? "Unsupport" : "Support"

}