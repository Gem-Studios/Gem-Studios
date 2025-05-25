function checkAccess() {
    const passcode = document.querySelector("input").value;
    if (passcode === "secret123") {
        alert("Access granted! Welcome to the exclusive shop.");
    } else {
        alert("Incorrect passcode. Try again.");
    }
}
