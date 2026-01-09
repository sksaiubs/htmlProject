// Ensure JS runs after page loads
document.addEventListener("DOMContentLoaded", function () {

    // Sidebar active item toggle
    const menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            menuItems.forEach(function (el) {
                el.classList.remove("active");
            });
            item.classList.add("active");
        });
    });

    // Highlight stat cards on hover (extra UX feedback)
    const statCards = document.querySelectorAll(".stat-card");

    statCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.style.boxShadow = "0 18px 40px rgba(37,99,235,0.2)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.boxShadow = "0 12px 35px rgba(0,0,0,0.06)";
        });
    });

    // Auto update footer year safely
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            "© " +
            new Date().getFullYear() +
            " Company Dashboard Interface. Designed by Sk Saiub.";
    }

});