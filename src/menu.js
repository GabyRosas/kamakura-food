import { filters } from "../assets/data/data.js";

//DEBE imprimir en pantalla la información de filtros.

const menuButtons = document.getElementById("filters");
const filtersContainer = document.querySelector("filters-container");
const nameButton = document.querySelector("filters");

function showButtons(filters) {
     
    for (let i = 0; i<filters.length; i++){

        const menuButton = filtersContainer.createElement("button");
        nameButton.innerHTML = filters[i]; 
        console.log(nameButton)

        menuButtons.appendChild(menuButton)
        console.log(filter[i])
    }   

}
showButtons(filters); 

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

export { showButtons }