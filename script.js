// Function to handle Intersection Observer for animations
const animateOnScroll = () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a class to trigger the CSS animation
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(section);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Call the animation function on page load
    animateOnScroll();
    
    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            const navLinks = document.getElementById('nav-links');
            const burger = document.getElementById('burger');
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // Mobile Navigation Toggle
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Contact Form Submission (for demonstration)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formStatus.textContent = 'Sending...';
        formStatus.style.color = '#fff';
        setTimeout(() => {
            formStatus.textContent = 'Message sent successfully! Thank you for reaching out.';
            formStatus.style.color = 'var(--primary-color)';
            contactForm.reset();
        }, 2000);
    });
});