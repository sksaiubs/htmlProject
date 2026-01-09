// Smooth scroll for navigation links
var links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        var targetId = link.getAttribute("href");
        var targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// Auto update footer year
var footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        "© " + new Date().getFullYear() + " Tech Conference. Designed by Sk Saiub.";
}


// Simple form submission feedback
var form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for registering! We will contact you soon.");
        form.reset();
    });
}