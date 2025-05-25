function checkAccess() {
    const passcode = document.querySelector("input").value;
    const secretSection = document.getElementById("exclusive-content");

    if (passcode === "secret123") {
        secretSection.style.display = "block"; // Show hidden content
    } else {
        alert("Incorrect passcode. Try again.");
    }
}
