//Intenta separar los eventos en este archivo.
import { showButtons, addProductContainer } from "./menu.js";
import { activateFilter } from "./searcher.js";
import { payOrder /* closeModal */ } from "./receipt.js";
import { openCart, changeQuantity } from "./cart.js";
import { products } from "../assets/data/data.js"

const filters = document.getElementsByClassName("filter");

document.addEventListener('DOMContentLoaded',(event) =>{
    showButtons();
    addFilterEvents();
    addProductContainer(products);
    addCartEvent();
    addPayButtonEvent();
});

function addFilterEvents(){
    for (let filter of filters) {
        filter.addEventListener("click", activateFilter);
    }
}

function addCartEvent(){
    let buttonCart = document.getElementById("cart");
    buttonCart.addEventListener("click", openCart);
}

function addPayButtonEvent() {
    let payButton = document.querySelector(".nav-link");
    //let payButton = document.getElementById("pay-button");
    payButton.addEventListener("click", payOrder);
}


