
// Funcionamiento del menu mobile
const menuBurguer = document.querySelector('#menu');   
const mobileMenuHome = document.querySelector('.mobile-menu');

menuBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  mobileMenuHome.classList.toggle('inactive');
}

// Funcionamiento de los videos del portafolio
document.addEventListener(
  "play",
  function(e) {
    var videos = document.getElementsByTagName("video");
    for (var i = 0, len = videos.length; i < len; i++) {
      if (videos[i] != e.target) {
        videos[i].pause();
        videos[i].style.opacity = "0.65";
      }
      if (videos[i] == e.target) {
        videos[i].style.opacity = "1";
      }
    }
  },
  true
);

