let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let signinBtnAdd = document.getElementById("signinBtnAdd");
let signinData = [];
let removeIconOne = document.getElementById("removeIconOne");
let removeIconTwo = document.getElementById("removeIconTwo");
let removeIconThree = document.getElementById("removeIconThree");
let nameRgex = document.getElementById("nameRgex");
let emailRgex = document.getElementById("emailRgex");
let passwordRgex = document.getElementById("passwordRgex");
let loginLink = document.getElementById("loginLink");
let sameReg = document.getElementById("sameReg");

if (localStorage.getItem("info")) {
  signinData = JSON.parse(localStorage.getItem("info"));
  console.log(signinData);
}

signinBtnAdd.addEventListener("click", function () {
  addSignin();
});

function addSignin() {
  if (ifcheck() == true) {
    sameReg.classList.add("d-block");
    sameReg.classList.remove("d-none");
  } else {
    if (userNameRegex() == true && userEmailRegex() == true) {
      let userInfo = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
      };
      signinData.push(userInfo);
      localStorage.setItem("info", JSON.stringify(signinData));
      window.location.href = "login.html";
    }
  }
}

userName.addEventListener("input", function () {
  userNameRegex();
});

function userNameRegex() {
  var regexName = /^[a-zA-z10-9]{3,25}$/;
  if (regexName.test(userName.value) == true) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    removeIconOne.remove();
    nameRgex.classList.add("d-none");
    nameRgex.classList.remove("d-block");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    userName.classList.remove("icon-in-div");
    removeIconOne.remove();
    nameRgex.classList.remove("d-none");
    nameRgex.classList.add("d-block");
    return false;
  }
}

userEmail.addEventListener("input", function () {
  userEmailRegex();
});

function userEmailRegex() {
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailRegex.test(userEmail.value) == true) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    removeIconTwo.remove();
    emailRgex.classList.remove("d-block");
    emailRgex.classList.add("d-none");
    return true;
  } else {
    userEmail.classList.remove("is-valid");
    userEmail.classList.add("is-invalid");
    removeIconTwo.remove();
    emailRgex.classList.add("d-block");
    emailRgex.classList.remove("d-none");
    return false;
  }
}

userPassword.addEventListener("input", function () {
  userPasswordRegex();
});

function userPasswordRegex() {
  let userpasswordRgex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  if (userpasswordRgex.test(userPassword.value) == true) {
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    removeIconThree.remove();
    passwordRgex.classList.remove("d-block");
    passwordRgex.classList.add("d-none");
  } else {
    userPassword.classList.remove("is-valid");
    userPassword.classList.add("is-invalid");
    removeIconThree.remove();
    passwordRgex.classList.remove("d-none");
    passwordRgex.classList.add("d-block");
  }
}

loginLink.addEventListener("click", function () {
  window.location.replace("login.html");
});

function ifcheck() {
  for (let i = 0; i < signinData.length; i++) {
    if (
      userEmail.value == signinData[i].email &&
      userPassword.value == signinData[i].password
    ) {
      return true;
    }
  }
}
