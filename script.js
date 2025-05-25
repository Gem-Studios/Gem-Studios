function validatePassword() {
    let password = prompt("Enter the exclusive password:");
    if (password === "gems") {
        window.location.href = "exclusive.html";
    } else {
        alert("Incorrect password. Try again.");
    }
}
