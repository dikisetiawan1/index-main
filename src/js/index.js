// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}





// haburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');


})


// tyepd js library
var typed = new Typed('#typed', {
    // Waits 1000ms after typing "First"
    strings: ["I'm", "Diki Setiawan."],
    typeSpeed:70,
    startDelay:90,
    loop:true,
    backSpeed:50

  });