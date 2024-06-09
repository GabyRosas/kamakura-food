//DEBE contener las funcionalidades del carrito de compras.

import { filters } from "../assets/data/data";

console.log("hi")

const cartProductsContainer = document.getElementById("cart-products");
const cart = [];

function createCartItem (id, name, price) {
    const cartItem = {
        id,
        name,
        price,
        quantity: 1
    }
    cart.push(cartItem)
}

function createCartProduct (id, name, price) {
    const cartProductContainer = document.createElement("div");
    cartProductContainer.className = "cart-container";
    cartProductContainer.innerHTML = `
    <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
                        <div class="text-container">
                            <h3>${name}</h3>
                            <h5>${price} €</h5>
                        </div>
                        <div class="quantity-container" id="quantity">
                            <button>+</button>
                            <p class="quantity">1</p>
                            <button>-</button>
                        </div>`
    cartProductsContainer.appendChild(cartProductContainer);

    createCartItem(id, name, price);
}


export function addToCart (id, name, price) {
    let positionThisProductInCart = cart.findIndex((value) => value.id == id);
    if (cart.length <= 0) {
        createCartProduct(id, name, price)
    } else if (positionThisProductInCart < 0) {
        createCartProduct(id, name, price)
    } else {
     // llamar la funcion de aumentar
        console.log("works")
    }
}

ResultTotal = Element.getElementById("receipt-total");

function totalAll() {
    // Recorremos el array del carrito
    return cart.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = filters.filter((itemBD) => {
            return itemBD.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].price;
    }, 0).toFixed(2);
    Element.innerHTML = total;
}
