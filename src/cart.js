const cartTotalElement = document.getElementById("cart-total");
const cartProductsContainer = document.getElementById("cart-products");
const cart = [];
let total = 0;

function openCart() {
    let showCart = document.getElementById("cart-container");
    if (showCart.style.display == "flex") {
        showCart.style.display = "none";
    } else {
        showCart.style.display = "flex";
    }
}

function createCartItem(id, name, price, subtotal) {
    const cartItem = {
        id,
        name,
        price,
        quantity: 1,
        subtotal,
    };
    cart.push(cartItem);
    return cart[cart.length - 1];
}

function createCartProduct(id, name, price) {
    let newItem = createCartItem(id, name, price, price);
    const cartProductContainer = document.createElement("div");
    cartProductContainer.className = "cart-container";
    const closeButton = document.createElement("button");
    closeButton.className = "close-button";
    const closeImage = document.createElement("img");
    closeImage.src = "/assets/img/close.svg";
    closeImage.alt = "close";
    closeButton.onclick = function (e) {
        deleteCartItem(id);
    };

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    const cartProductName = document.createElement("h3");
    const cartProductPrice = document.createElement("h5");

    const quantityContainer = document.createElement("div");
    quantityContainer.className = "quantity-container";
    const plusButton = document.createElement("button");

    plusButton.innerText = "+";
    plusButton.onclick = function (e) {
        changeQuantity(newItem, plusButton.innerText);
    };
    const quantity = document.createElement("p");
    quantity.innerText = "1";
    quantity.className = "quantity";

    const minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.onclick = function (e) {
        changeQuantity(newItem, minusButton.innerText);
    };

    cartProductsContainer.appendChild(cartProductContainer);
    cartProductContainer.append(closeButton, textContainer, quantityContainer);
    closeButton.appendChild(closeImage);
    textContainer.append(cartProductName, cartProductPrice);
    quantityContainer.append(plusButton, quantity, minusButton);

    cartProductName.innerText = name;
    cartProductPrice.innerText = `${price} €`;
}
export function addToCart(id, name, price) {
    let startText = document.getElementById("cart-products").children[0];
    startText.style.display = "none";
    let positionThisProductInCart = cart.findIndex((value) => value.id == id);
    if (cart.length <= 0) {
        createCartProduct(id, name, price);
        updateTotal(price, "+");
    } else if (positionThisProductInCart < 0) {
        createCartProduct(id, name, price);
        updateTotal(price, "+");
    } else {
        changeQuantity(cart[positionThisProductInCart], "+");
    };
}

function deleteCartItem(id) {
    let startText = document.getElementById("cart-products").children[0];
    let positionThisProductInCart = cart.findIndex((prod) => prod.id == id) + 1;
    let thisProductContainer = cartProductsContainer.children[positionThisProductInCart];
    updateTotal(cart[positionThisProductInCart - 1].subtotal, "-");
    cartProductsContainer.removeChild(thisProductContainer);
    cart.splice(positionThisProductInCart - 1, 1);
    if (cart.length == 0) {
        startText.style.display = "block";
        cartTotalElement.innerText = "Total €";
        total = 0;
    }
}

function changeQuantity(item, operator) {
    item.quantity = calcQuantity(item, operator);
    if (item.quantity <= 0) {
        deleteCartItem(item.id);
    } else {
        let positionThisProductInCart =
            cart.findIndex((prod) => prod.id == item.id) + 1;
        let thisProductContainer =
            cartProductsContainer.children[positionThisProductInCart];
        item.subtotal = subTotals(item.price, item.subtotal, operator);
        updateSubtotal(item.subtotal, thisProductContainer);
        updateQuantity(item.quantity, thisProductContainer);
        updateTotal(item.price, operator);
    }
}

function calcQuantity(item, operator) {
    if (operator == "+") {
        item.quantity++;
    } else {
        item.quantity--;
    }
    return item.quantity;
}

function updateSubtotal(subtotal, container) {
    container.querySelector("h5").innerText = `${subtotal.toFixed(2)} €`;
}

function updateQuantity(quantity, container) {
    container.querySelector(".quantity").innerText = quantity;
}

function updateTotal(price, operator) {
    if (operator == '+'){
        total = price + total;
    } else {
        total = total - price; 
    }
    cartTotalElement.innerText = `Total €${total.toFixed(2)}`;
}

function subTotals(price, subtotal, operator) {
    let subTotal;
    if (operator == "+") {
        subTotal = price + subtotal;
    } else {
        subTotal = subtotal - price;
    }
    return subTotal;
}

export { changeQuantity, openCart, subTotals, updateTotal };
