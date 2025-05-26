// Password Protection for Homepage
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

// Navigation Functions
function goBack() {
    history.back();
}

function goNext() {
    window.location.href = "shop.html"; // Redirects to Shop Page
}

// Buy Product Function
function buyProduct(price) {
    alert("Product added to cart! Price: $" + price);
    window.location.href = "checkout.html"; // Redirects to Checkout
}

// Checkout Process
function processCheckout() {
    let cardNumber = document.getElementById("cardNumber").value;
    let billingAddress = document.getElementById("billingAddress").value;
    let shippingAddress = document.getElementById("shippingAddress").value;

    if (cardNumber && billingAddress && shippingAddress) {
        alert("Purchase Successful! Your order is on the way.");
        window.location.href = "confirmation.html"; // Redirect to Confirmation Page
    } else {
        alert("Please fill in all required details!");
    }
}
