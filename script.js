const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .service-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed('#typing-hero', {
    strings: [
      'Actuarial Student', 
      'Digital Designer', 
      'Data Storyteller'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '|',
  });
});
