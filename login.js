function login() {
  var password  = document.getElementById("passwordinput").value;
  var password2 = document.getElementById("passwordinput2").value;
  var username  = document.getElementById("usernameinput").value;
  var errMsg    = document.getElementById("errormsg");
  var email = document.getElementById("emailinput").value;
  var usernamelength = username.length;

  if (password == "" || password2 == "" || username =="") {
      errMsg.innerHTML = "<h4> Blank input boxes don't work </h4>";
  }   
  else if (password != password2)  {
      errMsg.innerHTML = "<h4> Passwords do not match up </h4>";
  }
  else if (password == username & password2 == username) {
      errMsg.innerHTML = "<h4> You can't have your password the same as your username </h4>";
  }
  else if (usernamelength < 5) {
    errMsg.innerHTML = "<h4> Your username has to be five or more letters </h4>";
  }
  else if (!(email.includes('@gmail.com'))) {
    errMsg.innerHTML = "<h4> Email is incorrect </h4>";
  }
  else{
    localStorage.setItem("username", username);
    window.location="profile.html";
  }
  }