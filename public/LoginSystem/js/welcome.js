let logoutBtn = document.getElementById("logoutBtn");
let welcomeWorld = document.getElementById("welcomeWorld");








logoutBtn.addEventListener("click",function(){
    window.location.href ="index.html"
})

welcomeWorld.innerHTML += localStorage.getItem("username")
