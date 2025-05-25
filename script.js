document.addEventListener("DOMContentLoaded", function() {
    const unlockBtn = document.getElementById("unlock-btn");
    unlockBtn.addEventListener("click", function() {
        const passcode = document.getElementById("password-field").value;

        if (passcode === "secret123") {
            window.location.href = "exclusive.html"; // Redirect to the new page
        } else {
            alert("Incorrect passcode. Try again.");
        }
    });
});
