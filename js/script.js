let menu = document.querySelector(".umasection")
menu.style.transition = ".8s"

document.querySelector(".menu").onclick = () =>{
    menu.classList.add("active")

}
document.querySelector(".close").onclick = () =>{
    menu.classList.remove("active")
}

onscroll = () =>{
    menu.classList.remove("active")

}
function loder(){
    document.querySelector(".preloader").style.display = "none"
    document.querySelector(".tudo").style.display = "block"
}
