const hamberg = document.querySelector("#hamberg")
const menu = document.querySelector("#menu")
const close = document.querySelector("#close")

hamberg.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamberg.classList.toggle("hidden")
    close.classList.toggle("hidden")
})

close.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    close.classList.toggle("hidden")
    hamberg.classList.toggle("hidden")
})
