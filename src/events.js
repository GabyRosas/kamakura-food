//Intenta separar los eventos en este archivo.
import { showButtons, addProductContainer } from "./menu.js";
import { activateFilter } from "./searcher.js";
import {openReceipt, showReceipt, payOrder} from "./receipt.js";
import { openCart, changeQuantity } from "./cart.js";
import { products } from "../assets/data/data.js"

const filters = document.getElementsByClassName("filter");
let buttonProceedPay= document.getElementById("proceedPay-button");
let buttonClose= document.getElementById("close-receipt");


document.addEventListener('DOMContentLoaded',(event) =>{
    showButtons();
    addFilterEvents();
    addProductContainer(products);
    addCartEvent();
    addReceiptEvent();
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

function addReceiptEvent() {
    buttonProceedPay.addEventListener("click", openReceipt);
    buttonClose.addEventListener("click", openReceipt);
    buttonProceedPay.addEventListener("click", showReceipt);
}

function addPayButtonEvent() {
    let payButton = document.getElementById("pay-button");
    payButton.addEventListener("click", payOrder);
}

