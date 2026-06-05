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

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;
    
    const myPhoneNumber = "6285796902590"; 

    const textMessage = `*Pesan Baru dari Website Portofolio*%0A%0A` +
                        `*Nama:* ${name}%0A` +
                        `*Email:* ${email}%0A` +
                        `*No HP:* ${phone}%0A` +
                        `*Subjek:* ${subject}%0A%0A` +
                        `*Pesan:*%0A${message}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${myPhoneNumber}&text=${textMessage}`;
    window.open(whatsappURL, '_blank');
});
