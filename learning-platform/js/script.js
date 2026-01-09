// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update footer year automatically
const footerText = document.querySelector("footer p");
if (footerText) {
    footerText.textContent = "© " + new Date().getFullYear() + " Learning Platform. Designed by Sk Saiub.";
}

// Simple contact form feedback
const contactForm = document.querySelector(".contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for contacting us! We will reach out soon.");
        contactForm.reset();
    });
}