// Ensure JavaScript runs after the page fully loads
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
       Application Form Submission
    =============================== */
    var applicationForm = document.querySelector(".application-form");

    if (applicationForm) {
        applicationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Your application has been submitted successfully!");
            applicationForm.reset();
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
            " Job Application Portal. Designed by Sk Saiub.";
    }

});