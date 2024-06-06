import { products } from "../assets/data/data.js";
import { addProductContainer } from "./menu"
//DEBE buscar los productos por los filtros

function activateFilter(e) {
    let filter = e.target.innerText;
    let products = filterProducts(filter);
    addProductContainer(products);
}

function filterProducts(cat) {
    let filteredProducts = products.filter( p => p.category.includes(cat));
    return filteredProducts;
}

export { activateFilter }