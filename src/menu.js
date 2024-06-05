import { filters } from "../assets/data/data.js";

//DEBE imprimir en pantalla la información de filtros.

const filtersContainer = document.querySelector('.filters-container'); //contenedor de los botones
const originalButton = filtersContainer.querySelector('.filter'); 

function showButtons() {
    //originalButton.textContent = "todos"; 
    originalButton.remove();
    for (let i = 0; i < 5; i++) {
    const newButton = originalButton.cloneNode(true);
    newButton.textContent = filters[i];
    filtersContainer.appendChild(newButton);
    }
    }


//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

export { showButtons }