//Intenta separar los eventos en este archivo.
import { showButtons, addProductContainer } from "./menu.js";
import { activateFilter } from "./searcher.js";
import { products } from "../assets/data/data.js"

const filters = document.getElementsByClassName("filter");

document.addEventListener('DOMContentLoaded',(event) =>{
    showButtons();
    addFilterEvents();
    addProductContainer(products);
});

function addFilterEvents(){
    for (let filter of filters) {
        filter.addEventListener("click", activateFilter);
    }
}