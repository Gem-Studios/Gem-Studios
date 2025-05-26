function checkPassword() {
    let input = document.getElementById('password').value;
    let correctPassword = "gems";

    if (input === correctPassword) {
        alert("Access Granted!");
        window.location.href = "shop.html";
    } else {
        alert("Access Denied!");
    }
}

function goBack() {
    history.back();
}

function goNext() {
    window.location.href = "shop.html";
}

function buyProduct(price) {
    alert("Product added to cart! Price: $" + price);
    window.location.href = "checkout.html";
}

function processCheckout() {
    let cardNumber = document.getElementById("cardNumber").value;
    let billingAddress = document.getElementById("billingAddress").value;
    let shippingAddress = document.getElementById("shippingAddress").value;

    if (cardNumber && billingAddress && shippingAddress) {
        alert("Purchase Successful! Your order is on the way.");
        window.location.href = "confirmation.html";
    } else {
        alert("Please fill in all required details!");
    }
}
function rotateImage() {
    let productImage = document.getElementById("productImage");

    if (productImage.src.includes("front")) {
        productImage.src = "assets/jumpsuit-blue-side.png";
    } else if (productImage.src.includes("side")) {
        productImage.src = "assets/jumpsuit-blue-back.png";
    } else {
        productImage.src = "assets/jumpsuit-blue-front.png";
    }
}
