
// Funcionamiento del menu mobile
const menuBurguer = document.querySelector('#menu');   
const mobileMenuHome = document.querySelector('.mobile-menu');

menuBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  mobileMenuHome.classList.toggle('inactive');
}

// Ocultar titulo h1 y mostrar texto de explicación
const latinDancesport = document.querySelector('#latin-dancesport');
const bellyDance = document.querySelector('#bellydance');
const textoLa = document.querySelector('section.que-es-latindancesport');
const textoBe = document.querySelector('section.que-es-bellydance');
const portadaActiva = document.querySelector('figure.portada');
const botonAtrasLa = document.querySelector('#back-button-la');
const botonAtrasBe = document.querySelector('#back-button-be');

latinDancesport.addEventListener('click', subirLa);
bellyDance.addEventListener('click', subirBe);
botonAtrasLa.addEventListener('click', bajarLa);
botonAtrasBe.addEventListener('click', bajarBe);

function subirLa(){
  
  textoLa.classList.remove('inactive');

  if (portadaActiva.classList.contains('animacion-salida--portada')) {
    portadaActiva.classList.remove('animacion-salida--portada');
    portadaActiva.classList.add('animacion-entrada--portada');
  }
  else {
    portadaActiva.classList.add('animacion-entrada--portada');
  }
}

function subirBe(){
  
  textoBe.classList.remove('inactive');

  if (portadaActiva.classList.contains('animacion-salida--portada')) {
    portadaActiva.classList.remove('animacion-salida--portada');
    portadaActiva.classList.add('animacion-entrada--portada');
  }
  else {
    portadaActiva.classList.add('animacion-entrada--portada');
  }
}

function bajarLa(){

  textoLa.scrollTo({top:0});  
  textoLa.classList.add('inactive'); 
  portadaActiva.classList.remove('animacion-entrada--portada');
  portadaActiva.classList.add('animacion-salida--portada');

  const iframe = document.querySelector('#video1');
  var temp = iframe.src;      //Esta línea y la siguiente es para para detener el video cuando hacemos click en el botón atrás
  iframe.src = temp;
}

function bajarBe(){

  textoBe.scrollTo({top:0});  
  textoBe.classList.add('inactive'); 
  portadaActiva.classList.remove('animacion-entrada--portada');
  portadaActiva.classList.add('animacion-salida--portada');

  const iframe = document.querySelector('#video2');
  var temp = iframe.src;    //Esta línea y la siguiente es para para detener el video cuando hacemos click en el botón atrás
  iframe.src = temp;
}

// Funcionamiento de los videos del portafolio
document.addEventListener(
  "play",
  function(e) {
    var videos = document.getElementsByTagName("video");
    for (var i = 0, len = videos.length; i < len; i++) {
      if (videos[i] != e.target) {
        videos[i].pause();
      }
    }
  },
  true
);





