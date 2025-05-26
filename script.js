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

function goNext() {
    window.location.href = "shop.html";
}

function buyProduct(price) {
    alert("Product added to cart! Price: $" + price);
    window.location.href = "checkout.html";
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
