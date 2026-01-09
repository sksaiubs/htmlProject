// Run JavaScript only after the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       Smooth Navigation Scroll
    =============================== */
    var navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            var targetId = link.getAttribute("href");
            var targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* ===============================
       Contact Form Submission Feedback
    =============================== */
    var contactForm = document.querySelector(".contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for reaching out! I will get back to you soon.");
            contactForm.reset();
        });
    }

    /* ===============================
       Auto Update Footer Year
    =============================== */
    var footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            "© " +
            new Date().getFullYear() +
            " Sk Saiub. Built with semantic HTML, modern CSS, and JavaScript.";
    }

});