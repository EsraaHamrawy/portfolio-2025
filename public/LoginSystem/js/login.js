let signinLink = document.getElementById("signinLink");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let getLocal = []
getLocal =   JSON.parse(localStorage.getItem("info"));

// getLocal = 
console.log(getLocal);
let delIconOne = document.getElementById("delIconOne");
let delIconTwo = document.getElementById("delIconTwo");
let loginSure = document.getElementById("loginSure");
let passwordSure = document.getElementById("passwordSure");
let loginBtn = document.getElementById("loginBtn");



loginEmail.addEventListener("input",function(){
    loginEmailValue()
})

function loginEmailValue(){
    
for(let i = 0; i < getLocal.length;i++){
    if(getLocal[i].email == loginEmail.value){
        // console.log(getLocal[i].email);
        loginEmail.classList.add("is-valid")
        loginEmail.classList.remove("is-invalid")
        delIconOne.remove();
        loginSure.classList.add("d-none")
        loginSure.classList.remove("d-block")
        localStorage.setItem("username",getLocal[i].name)
        return true
    }
    
    else {
        loginEmail.classList.remove("is-valid")
        loginEmail.classList.add("is-invalid")
        delIconOne.remove();
        loginSure.classList.remove("d-none")
        loginSure.classList.add("d-block")
        // return false
    }
}

}


loginPassword.addEventListener("input",function(){
    loginPasswordValue()
})


function loginPasswordValue(){
    for(let i = 0;i <  getLocal.length;i++){
        if(getLocal[i].password == loginPassword.value){
        console.log("good");
        loginPassword.classList.add("is-valid");
        loginPassword.classList.remove("is-invalid");
        passwordSure.classList.add("d-none");
        passwordSure.classList.remove("d-block");
        delIconTwo.remove();
        return true
        }
        else{
            loginPassword.classList.remove("is-valid");
            loginPassword.classList.add("is-invalid");
            passwordSure.classList.remove("d-none");
            passwordSure.classList.add("d-block");
            delIconTwo.remove();
            // return false
        }
    }

}










loginBtn.addEventListener("click",function(){
    welcomePage() 
})

function welcomePage(){
if(loginEmailValue() == true && loginPasswordValue() == true){
    window.location.href = "welcome.html"
    
}
}







signinLink.addEventListener("click",function(){
    window.location.replace("index.html")  
})