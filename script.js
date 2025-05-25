function checkAccess() {
    const passcode = document.querySelector("#password-field").value;
    const secretSection = document.getElementById("exclusive-content");
    const inputSection = document.getElementById("secret-drop");

    if (passcode === "secret123") {
        secretSection.style.display = "block"; // Show the secret section
        inputSection.style.display = "none"; // Hide the passcode entry
    } else {
        alert("Incorrect passcode. Try again.");
    }
}
