// Simulated cart from previous page (you can load this from localStorage or backend)
let cart = [
    { title: "Book Title 1", price: 20 },
    { title: "Book Title 2", price: 25 },
];

// Load cart items into the checkout page
function loadCartItems() {
    const orderItemsList = document.getElementById("order-items");
    let total = 0;

    cart.forEach(book => {
        total += book.price;
        let listItem = document.createElement("li");
        listItem.textContent = `${book.title} - $${book.price}`;
        orderItemsList.appendChild(listItem);
    });

    document.getElementById("order-total").textContent = total;
}

// Display credit card fields based on payment method
document.getElementById("payment-method").addEventListener("change", function() {
    const paymentMethod = this.value;
    const creditCardInfo = document.getElementById("credit-card-info");

    if (paymentMethod === "credit-card") {
        creditCardInfo.style.display = "block";
    } else {
        creditCardInfo.style.display = "none";
    }
});

// Handle form submission
document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const paymentMethod = document.getElementById("payment-method").value;
    
    // Simple validation for credit card if selected
    if (paymentMethod === "credit-card") {
        const cardNumber = document.getElementById("card-number").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const cvv = document.getElementById("cvv").value;

        if (!cardNumber || !expiryDate || !cvv) {
            alert("Please fill out all credit card information.");
            return;
        }
    }

    // Here you would send data to your server for processing
    alert("Thank you for your purchase!");

    // Clear the cart after successful purchase
    cart = [];
    loadCartItems();
});

// Load cart items on page load
window.onload = loadCartItems;
