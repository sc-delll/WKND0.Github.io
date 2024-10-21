// Toggle Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Smooth Scroll to Portfolio Section
const scrollToPortfolio = document.getElementById('scrollToPortfolio');
scrollToPortfolio.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Please fill out all fields before submitting the form.');
    }
});
