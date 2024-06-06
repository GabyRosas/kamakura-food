//DEBE contener las funcionalidades del carrito de compras.

//import { addProductContainer } from "./menu.js"

//Exportar event listener a su fichero

import { products } from "../assets/data/data.js"

console.log("hi")

/* const addButton = document.querySelectorAll(".add-button");
console.log(addButton) */

const cartProductsContainer = document.getElementById("cart-products");

/* const cartProduct = document.querySelector(".cart-container");
const cartTextContainer = document.querySelector(".text-container");
const cartProductName = document.querySelector(".text-container").children[0];
const cartSubtotal = document.querySelector(".text-container").children[1];
 */

function createCartItem (name, price) {
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
    cartProductsContainer.appendChild(cartProductContainer)
}

export function addToCart (name, price) {

    createCartItem(name, price)
    
    //Condicion - comprobar que que no esta y anadir

    //else llamar la funcion de aumentar

}

//addToCart()
