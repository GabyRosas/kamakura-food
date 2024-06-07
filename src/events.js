//Intenta separar los eventos en este archivo.
import { showButtons, addProductContainer } from "./menu.js";
import { activateFilter } from "./searcher.js";
import { openCart, changeQuantity } from "./cart.js";
import { products } from "../assets/data/data.js"

const filters = document.getElementsByClassName("filter");

document.addEventListener('DOMContentLoaded',(event) =>{
    showButtons();
    addFilterEvents();
    addProductContainer(products);
    addCartEvent();
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
    
/*function addIncDecEvents() {
    let botones = document.getElementsByClassName("CLASE")
    btn.addEventListener("click", changeQuantity())
}*/
