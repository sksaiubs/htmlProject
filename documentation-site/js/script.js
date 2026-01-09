// Ensure JavaScript runs after the page loads
document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       Smooth Navigation Scroll
    =============================== */
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* ===============================
       Feature Card Hover Highlight
    =============================== */
    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.style.boxShadow = "0 20px 45px rgba(37,99,235,0.15)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.06)";
        });
    });

    /* ===============================
       Auto Update Footer Year
    =============================== */
    const footerText = document.querySelector(".docs-footer p");

    if (footerText) {
        footerText.textContent =
            "© " +
            new Date().getFullYear() +
            " Developer Docs. Built by Sk Saiub.";
    }

});