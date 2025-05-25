// Password Protection for Exclusive Page
function validatePassword() {
    let password = prompt("Enter the exclusive password:");
    if (password === "gems") {
        window.location.href = "exclusive.html";
    } else {
        alert("Incorrect password. Try again.");
    }
}

// Floating Text Animation for Title
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".futuristic-text");
    heading.innerHTML = heading.textContent.split("").map((letter, index) =>
        `<span style="--delay: ${index}">${letter}</span>`
    ).join("");
});
// Purchase Item Function
function purchaseItem() {
    alert("Thank you for purchasing the Alien Ware Jogging Suit for $150!");
}
// Purchase Item Function
function purchaseItem() {
    alert("Thank you for purchasing the Alien Ware Jogging Suit for $150!");
}
