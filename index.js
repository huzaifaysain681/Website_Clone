const menuEl=document.getElementById("menu-icon");
const menubtnEl=document.getElementById("menu-btn");
menubtnEl.addEventListener("click",()=>{
    menuEl.classList.toggle("active")
})