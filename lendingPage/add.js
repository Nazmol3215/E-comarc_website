// Initialize cart array
let cart = [];

// Function to update cart count
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Function to update cart total
function updateCartTotal() {
    let total = cart.reduce((sum, book) => sum + book.price, 0);
    document.getElementById("cart-total").textContent = total;
}

// Function to update cart display
function updateCartDisplay() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((book, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${book.title} - $${book.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(listItem);
    });

    updateCartCount();
    updateCartTotal();
}

// Function to add book to cart
function addToCart(book) {
    cart.push(book);
    updateCartDisplay();
}

// Function to remove book from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
        const title = button.getAttribute("data-title");
        const price = parseFloat(button.getAttribute("data-price"));
        addToCart({ title, price });
    });
});

// Checkout button functionality (placeholder)
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout...");
        // Redirect to checkout page or process payment
        // window.location.href = "checkout.html";
    }
});
