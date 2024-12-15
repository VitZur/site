<script>
document.addEventListener("DOMContentLoaded", () => {
    const cart = document.getElementById("cart");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const addToCartButton = document.querySelector(".add-to-cart");
    const selectSize = document.querySelector("select");
    const quantityInput = document.querySelector("input[type='number']");

    const basePrice = 1.80; // Базовая цена за 100g
    const sizePrices = {
        "100g": 1.80,
        "250g": 4.50,
        "500g": 8.00,
        "1000g": 15.00
    };

    // Обновление цены в зависимости от граммовки
    selectSize.addEventListener("change", updatePrice);
    quantityInput.addEventListener("input", updatePrice);

    function updatePrice() {
        const selectedSize = selectSize.value;
        const quantity = parseInt(quantityInput.value, 10) || 1;
        const price = sizePrices[selectedSize] * quantity;
        document.querySelector(".product-details h3").textContent = `Цена: £${price.toFixed(2)}`;
    }

    // Добавление товара в корзину
    addToCartButton.addEventListener("click", () => {
        const selectedSize = selectSize.value;
        const quantity = parseInt(quantityInput.value, 10) || 1;
        const itemPrice = sizePrices[selectedSize] * quantity;

        const listItem = document.createElement("li");
        listItem.textContent = `${quantity} x Spudos Chips (${selectedSize}) - £${itemPrice.toFixed(2)}`;
        cartItems.appendChild(listItem);

        updateTotalPrice(itemPrice);

        // Открываем корзину
        cart.classList.add("open");
    });

    // Обновление общей цены
    function updateTotalPrice(amount) {
        const currentTotal = parseFloat(totalPrice.textContent.replace("£", "")) || 0;
        const newTotal = currentTotal + amount;
        totalPrice.textContent = `£${newTotal.toFixed(2)}`;
    }
});
</script>
