//Intenta separar los eventos en este archivo.

import { showButtons, addProductContainer } from "./menu.js";
import { products } from "../assets/data/data.js"

document.addEventListener('DOMContentLoaded',(event) =>{
    showButtons();
    addProductContainer(products)
});