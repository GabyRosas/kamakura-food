import {filters} from "../assets/data/data.js"
import {addToCart} from "./cart.js"

export const allProductsContainer = document.getElementById("products");
const filtersContainer = document.querySelector('.filters-container');
const originalButton = filtersContainer.querySelector('.filter'); 

function addProductContainer (array) {
    emptyProductsContainer();
    for (let i = 0; i < array.length; i++) {
        const productContainer = document.createElement("div");
        productContainer.className = "product-container";
        const productNameContainer = document.createElement("h3");
        const productDescriptionContainer = document.createElement("p");
        const productPriceContainer = document.createElement("div");
        productPriceContainer.className = "price-container";
        const productPriceValue = document.createElement("h5");
        const addButton = document.createElement("button");
        addButton.className = "add-button";
        addButton.innerText = "Añadir";
        addButton.onclick = function (e) {
            addToCart(array[i].id, array[i].name, array[i].price)
        };
        allProductsContainer.appendChild(productContainer);
        productContainer.appendChild(productNameContainer);
        productContainer.appendChild(productDescriptionContainer);
        productContainer.appendChild(productPriceContainer);
        productPriceContainer.appendChild(productPriceValue);
        productPriceContainer.appendChild(addButton);
    
        productNameContainer.innerText = array[i].name;
        productDescriptionContainer.innerText = array[i].description;
        productPriceValue.innerText = `${array[i].price} €`; 
    }
}

function emptyProductsContainer() {
    allProductsContainer.querySelectorAll('*').forEach(child => child.remove());
}

function showButtons() {
    
    originalButton.remove();
    for (let i = 0; i < 5; i++) {
        const newButton = originalButton.cloneNode(true);
        newButton.textContent = filters[i];
        filtersContainer.appendChild(newButton);
    }
} 

export { addProductContainer, showButtons }
