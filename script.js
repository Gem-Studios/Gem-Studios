function checkAccess() {
    const passcode = document.querySelector("input").value; // Get the user-entered passcode
    const secretSection = document.getElementById("exclusive-content"); // Get the secret section

    if (passcode === "secret123") {
        secretSection.style.display = "block"; // Show the secret section
        document.getElementById("secret-drop").style.display = "none"; // Hide the input section
    } else {
        alert("Incorrect passcode. Try again."); // Show error message
    }
}
