document.addEventListener("DOMContentLoaded", () =>{
    iniciarDocumento()
})

function iniciarDocumento(){
    menuResponsive()
    scrollNav()
}  

//navegacion
function menuResponsive(){
    const menu = document.querySelector(".mobile-menu");

    menu.addEventListener('click', navegacionResponsive)
}


function navegacionResponsive(){
    const navegacion = document.querySelector(".header-nav"); 
    navegacion.classList.toggle("mostrar"); 
}

//Scroll
function scrollNav(){
    const elementos = document.querySelectorAll(".header-nav a");
    
    elementos.forEach(elemento=>{
        elemento.addEventListener("click", function(e){
            e.preventDefault()
            const sectionScroll =e.target.attributes.href.value
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({behavior: "smooth"})
        })
    })
}

function loader(){
        const contenedorLoader= document.querySelector(".loading")

        contenedorLoader.classList.toggle("loading2")
        // contenedorLoader.style.visibility = 'hidden'
        // contenedorLoader.style.opacity = '0'
}

setTimeout(loader, 7000)