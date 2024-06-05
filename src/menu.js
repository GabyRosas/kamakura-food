import {filters, products} from "../assets/data/data.js"
//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

const allProductsContainer = document.getElementById("products");
const productContainer = document.querySelector(".product-container");
const productNameContainer = document.querySelector(".product-container").children[0];
const productDescriptionContainer = document.querySelector(".product-container").children[1];
const productPriceContainer = document.querySelector(".price-container").children[0];

function changeExampleCard () {
    productNameContainer.innerText = products[0].name;
    productDescriptionContainer.innerText = products[0].description;
    productPriceContainer.innerText = `Precio ${products[0].price} €`;
}


function addProductContainer (array) {
    
    changeExampleCard();
    
    for (let i = 1; i <= array.length; i++) {
        
        const productContainerCopy = productContainer.cloneNode(true);
        allProductsContainer.appendChild(productContainerCopy);    
        
        productNameContainer.innerText = array[i].name;
        productDescriptionContainer.innerText = array[i].description;
        productPriceContainer.innerText = `Precio ${array[i].price} €`;
    }
}

addProductContainer(products)
