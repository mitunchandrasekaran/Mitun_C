// Store the number of products added to cart
let cartCount = 0;


// Function called when "Add +" is clicked
function addToCart(productName) {

    // Increase cart count
    cartCount++;

    // Update cart number
    document.getElementById("cartCount").textContent = cartCount;

    // Show confirmation
    alert(productName + " added to your cart!");
}


// Function for cart button
function showCart() {

    if (cartCount === 0) {

        alert("Your cart is empty.");

    } else {

        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );

    }
}