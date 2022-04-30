
document.addEventListener("DOMContentLoaded", () => {
  iniciarDocumento();
  
});

function iniciarDocumento() {
  menuResponsive();
  scrollNav();
  //form(); 
  navegacionFija()
}

//navegacion
function menuResponsive() {
  const menu = document.querySelector(".mobile-menu");

  menu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
  const navegacion = document.querySelector(".header-nav");
  navegacion.classList.toggle("mostrar");
}

//Scroll
function scrollNav() {
  const elementos = document.querySelectorAll(".header-nav a");

  elementos.forEach((elemento) => {
    elemento.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionScroll = e.target.attributes.href.value;
      const section = document.querySelector(sectionScroll);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function loader() {
  const contenedorLoader = document.querySelector(".loading");

  contenedorLoader.classList.toggle("loading2");
}

setTimeout(loader, 1000);

//navegacion fija
function navegacionFija(){
    const header = document.querySelector('.header')
    const conocimientos = document.querySelector('.conocimientos')
    const body = document.querySelector('body')
    window.addEventListener('scroll', function(){
        if(conocimientos.getBoundingClientRect().top < 0){
            header.classList.add('fijo')
            body.classList.add('body-scroll')
        }else{
            header.classList.remove('fijo')
            body.classList.remove('body-scroll')
        }
    })
}



//formulario

function form() {

  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    //obtenemos los elementos del DOM
    nombre = document.querySelector(".nombre").value;
    correo = document.querySelector(".correo").value;
    mensaje = document.querySelector(".mensaje").value;
    erroresContenedor = document.querySelector(".errores");
    errores = [];

    if (nombre === "") {
      errores.push("El nombre es obligatorio");
    }
    expresion = "@";

    if (correo === "" || correo.includes(expresion) === false) {
      errores.push("El correo debe ser valido");
    }

    if (mensaje === "") {
      errores.push("El mensaje es obligatorio");
    }

    if (errores.length === 0) {
        
        swal({
            title: "Muchas gracias!!",
            text: "Me pondre en contacto lo mas pronto posible contigo",
            icon: "success",
            button: "Okeey :)",
          });
          
    } else {
      errores.forEach((error) => {
        p = document.createElement("P");
        p.textContent = error;

        erroresContenedor.appendChild(p);
        console.log(erroresContenedor);
      });

      setTimeout(() => {
        while (erroresContenedor.firstChild) {
          erroresContenedor.firstChild.remove();
        }
      }, 3000);
    }
  });
}

// async function enviarDatos(args){
//     const datos = new FormData()

//     // args.forEach((value) => {
//     //     datos.append(value)
//     // })
//     datos.append('Nombre', 'Juan')

//     const url = "http://localhost:3000/mail.php"    
//     const respuesta = await fetch(url, {
//         method: 'POST', 
//         body: datos
//     })



 
// }

// loader()

// window.addEventListener("load", function() {

//     contenedorLoader.style.visibility = "hidden";
//     contenedorLoader.style.opacity = "0";
//   });
