// Smooth scroll for navigation links
var links = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        e.preventDefault();
        var targetId = this.getAttribute("href");
        var targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Auto update footer year
var footerPara = document.querySelector("footer p");

if (footerPara !== null) {
    footerPara.innerHTML =
        "© " + new Date().getFullYear() +
        " Media Showcase Platform. Designed by Sk Saiub.";
}

// Play / Pause background audio button
var audio = document.querySelector("audio");
var audioBtn = document.getElementById("audioToggle");

if (audio && audioBtn) {
    audioBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            audioBtn.innerText = "Pause Audio";
        } else {
            audio.pause();
            audioBtn.innerText = "Play Audio";
        }
    });
}