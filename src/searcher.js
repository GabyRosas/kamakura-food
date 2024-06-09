import { products } from "../assets/data/data.js";
import { addProductContainer } from "./menu.js"

//DEBE buscar los productos por los filtros

function activateFilter(e) {
    console.log(e.target.dataset)
    let filter = e.target.innerText;
    let products = filterProducts(filter);
    addProductContainer(products);
}

function filterProducts(cat) {
    let filteredProducts = products.filter( prod => cat == "todos" ? prod : prod.category.includes(cat));
    return filteredProducts;
}

export { activateFilter }