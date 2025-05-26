function checkPassword() {
    let input = document.getElementById('password').value;
    let correctPassword = "futuristic123"; // Change this to your actual password

    if (input === correctPassword) {
        alert("Access Granted!");
        window.location.href = "exclusive.html"; // Redirect to Exclusive Page
    } else {
        alert("Access Denied!");
    }
}

function goBack() {
    history.back();
}

function goNext() {
    window.location.href = "shop.html"; // Redirects to Shop Page
}
