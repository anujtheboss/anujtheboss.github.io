
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Form Submission (you'll need a backend service to handle actual submissions)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Display submission confirmation
    alert('Thanks for your message! I\'ll get back to you soon.');
    contactForm.reset();
    
    // In a real application, you would send the form data to your backend here
});
