document.addEventListener("DOMContentLoaded", ()=>{
    
    // burger functionality
    let hamburger = document.querySelector(".hamburger");
    let close = document.querySelector(".close");
    let menu = document.querySelector(".navbar__mobile")
    
    hamburger.addEventListener("click", ()=>{
            menu.classList.remove("hidden");
    })
    close.addEventListener("click", ()=>{
        menu.classList.add("hidden");
    })

    let navbar_list = document.querySelectorAll(".navbar__list-item");
    navbar_list = Array.from(navbar_list).slice(0, 2);
    console.log(navbar_list[0].childNodes)

})