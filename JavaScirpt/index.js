function init(){
document.getElementsByClassName("login").onclick = function(){
    let loginsection = document.getElementsByClassName("loginsection");
    if((loginsection.classList.contains("hidden")) == true){
        loginsection.classList.remove("hidden");
    }else{//沒有hidden
        loginsection.classList.add("hidden");
    }
}
}
window.addEventListener("load", init, false);