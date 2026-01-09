// Add to Cart button alert
var cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Item added to cart!");
    });
});

// Highlight active navigation link on scroll
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    var currentSection = "";

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// Auto update footer year (safe)
var footer = document.querySelector("footer p");

if (footer) {
    footer.textContent = "© " + new Date().getFullYear() + " E-Commerce UI Project. Designed by Sk Saiub.";
}