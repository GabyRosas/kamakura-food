import { products } from "../assets/data/data.js";
//import { showProducts } from "./menu"
//DEBE buscar los productos por los filtros

function activateFilter(e) {
    let filter = e.target.innerText;
    let products = filterProducts(filter);
    showProducts(products); // adaptar a funcion de kate
}

function filterProducts(cat) {
    let filteredProducts = products.filter( p => p.category.includes(cat));
    return filteredProducts;
}
