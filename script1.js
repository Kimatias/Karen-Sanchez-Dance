
// Funcionamiento del menu mobile
const menuBurguer = document.querySelector('#menu');   
const mobileMenuHome = document.querySelector('.mobile-menu');

menuBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  mobileMenuHome.classList.toggle('inactive');
}

// Fotografias de la galería

fotografias = []

fotografias.push({
  foto:"./assets/img/Galeria/pic-1.jpg",
  alt:"Fotografía de Karen"
});

fotografias.push({
  foto:"./assets/img/Galeria/pic-2.jpg",
  alt:"Fotografía de Karen y John"
});

fotografias.push({
  foto:"./assets/img/Galeria/pic-3.png",
  alt:"Fotografía de Karen"
});

fotografias.push({
  foto:"./assets/img/Galeria/pic-4.png",
  alt: "Fotografía de grupo Original Rhythm"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-5.png",
  alt: "Fotografía de Karen"
});

fotografias.push({
  foto: "./assets/img/Galeria/DSC_2507.jpg",
  alt: "Fotografía de Karen con alas de Isis"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-6.png",
  alt: "Fotografía de pareja Karen y John"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-7.jpg",
  alt: "Fotografía de pareja Karen y John"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-8.png",
  alt: "Fotografía de Karen y Jonathan"
});

fotografias.push({
  foto: "./assets/img/Galeria/DSC_2288.jpg",
  alt: "Fotografía de Karen y John"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-9.png",
  alt: "Fotografía de pareja Karen y Harvey"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-10.jpg",
  alt: "Fotografía de pareja Karen y John"
});

fotografias.push({
  foto: "./assets/img/Galeria/DSC_1922.jpg",
  alt: "Fotografía de pareja Karen y John"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-11.jpg",
  alt: "Fotografía de Karen"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-12.png",
  alt: "Fotografía de pareja Karen y Andrés"
});

fotografias.push({
  foto: "./assets/img/Galeria/DSC_3071.jpg",
  alt: "Fotografía de Karen"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-13.png",
  alt: "Fotografía de Karen"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-14.png",
  alt: "Fotografía de Karen y entrenadora Karina Rubio"
});

fotografias.push({
  foto: "./assets/img/Galeria/DSC_2303.jpg",
  alt: "Fotografía de pareja Karen y John"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-15.png",
  alt: "Fotografía de Karen"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-16.jpg",
  alt: "Fotografía de Karen y entrenador Eduardo Rizza"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-17.jpg",
  alt: "Fotografía de grupo Original Rhythm"
});

fotografias.push({
  foto: "./assets/img/Galeria/pic-18.jpeg",
  alt: "Fotografía de pareja Karen y John"
});

const containerSlider = document.querySelector(".galeria-container--slider");

function renderGaleria(fotografias){
  
  fotografias.forEach(fotografia => {
    const containerCard = document.createElement("div");
    containerCard.classList.add("galeria-container--card");

    const imageCard = document.createElement("img");
    imageCard.setAttribute("src", fotografia.foto);
    imageCard.setAttribute("alt", fotografia.alt);
    imageCard.addEventListener("click", function(){renderFoto(fotografia)}); //colocando la funcion dentro de corchetes funciona con cada foto 

    containerCard.appendChild(imageCard);
    containerSlider.append(containerCard);
  })
}

renderGaleria(fotografias);

function renderFoto(fotografia){
  const visorFoto = document.querySelector(".visor-foto")
  visorFoto.classList.remove("inactive");

  const fotoDetail = document.querySelector(".detail-pic")
  fotoDetail.setAttribute("src", fotografia.foto);
}

// Cerrar foto aumentada

const closeFoto = document.querySelector('#close');
closeFoto.addEventListener('click', cerrarFoto);

function cerrarFoto(){
  const visorFoto = document.querySelector(".visor-foto")
  visorFoto.classList.add("inactive");
}

