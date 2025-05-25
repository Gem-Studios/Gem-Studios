// Password Protection for Homepage
document.addEventListener("DOMContentLoaded", () => {
    let password = prompt("Enter the exclusive password to access Gem Studios:");
    if (password !== "gems") {
        alert("Incorrect password. Try again.");
        window.location.reload();
    }
});

// Create Floating Ruby Gems
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");

    for (let i = 15; i > 0; i--) {
        let gem = document.createElement("img");
        gem.src = "assets/ruby_gem.png"; 
        gem.classList.add("floating-gem");

        gem.style.left = `${Math.random() * 100}vw`;
        gem.style.top = `${Math.random() * 100}vh`;
        gem.style.animationDuration = `${2 + Math.random() * 4}s`;
        
        body.appendChild(gem);
    }
});

// Redirect to Shop Page
function goToShop() {
    window.location.href = "shop.html";
}

// Ensure "Shop Now" Button Works
document.addEventListener("DOMContentLoaded", () => {
    const shopButton = document.querySelector(".shop-button");
    if (shopButton) {
        shopButton.addEventListener("click", goToShop);
    }
});

// Purchase Item Function
function purchaseItem() {
    alert("Thank you for purchasing the Alien Ware Jogging Suit for $150!");
}
