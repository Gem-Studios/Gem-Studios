document.addEventListener("DOMContentLoaded", function() {
    const unlockBtn = document.getElementById("unlock-btn");
    unlockBtn.addEventListener("click", function() {
        const passcode = document.getElementById("password-field").value;
        const secretSection = document.getElementById("exclusive-content");
        const inputSection = document.getElementById("secret-drop");

        if (passcode === "secret123") {
            secretSection.classList.remove("hidden"); // Reveal secret content
            inputSection.classList.add("hidden"); // Hide passcode entry
        } else {
            alert("Incorrect passcode. Try again.");
        }
    });
});
