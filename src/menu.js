import {filters} from "../assets/data/data.js"

//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

const allProductsContainer = document.getElementById("products");
const filtersContainer = document.querySelector('.filters-container'); //contenedor de los botones
const originalButton = filtersContainer.querySelector('.filter'); 

function addProductContainer (array) {
    
    for (let i = 0; i < array.length; i++) {

        const productContainer = document.createElement("div");
        productContainer.className = "product-container";
        productContainer.innerHTML = `
                    <h3>${array[i].name}</h3>
                    <p>${array[i].description}</p>
                <div class="price-container">
                        <h5>${array[i].price} €</h5>
                        <button class="add-button">Añadir</button>
                </div>`
        allProductsContainer.appendChild(productContainer);
    }

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
