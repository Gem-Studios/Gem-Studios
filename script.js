// Password Protection for Exclusive Page
function validatePassword() {
    let password = prompt("Enter the exclusive password:");
    if (password === "gems") {
        window.location.href = "exclusive.html";
    } else {
        alert("Incorrect password. Try again.");
    }
}

// Redirect to Shop Page
function goToShop() {
    window.location.href = "shop.html";
}

// Apply Shop Button Fix on Exclusive Page
document.addEventListener("DOMContentLoaded", () => {
    const shopButton = document.querySelector(".button");
    if (shopButton) {
        shopButton.addEventListener("click", goToShop);
    }
});

// Purchase Item Function
function purchaseItem() {
    alert("Thank you for purchasing the Alien Ware Jogging Suit for $150!");
}

// Floating Text Animation for Title
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".futuristic-text");
    if (heading) {
        heading.innerHTML = heading.textContent.split("").map((letter, index) =>
            `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`
        ).join("");
    }
});

// Alien Glow Effect Activation
document.addEventListener("DOMContentLoaded", () => {
    const glowingImage = document.querySelector(".alien-glow");
    if (glowingImage) {
        glowingImage.style.animation = "alienGlow 5s infinite alternate ease-in-out";
    }
});
