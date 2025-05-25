document.addEventListener("DOMContentLoaded", function() {
    // Smooth fade-in effect
    const secretSection = document.querySelector(".exclusive-section");
    secretSection.style.opacity = "0";
    secretSection.style.transition = "opacity 1.5s ease-in-out";

    setTimeout(() => {
        secretSection.style.opacity = "1";
    }, 500);
});
