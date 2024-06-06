//DEBE contener las funcionalidades del carrito de compras.

//Exportar event listener a su fichero


const addButton = document.querySelectorAll(".add-button");
const cartProductsContainer = document.getElementById("cart-products");
const cartProduct = document.querySelector(".cart-container");
const cartTextContainer = document.querySelector(".text-container");
const cartProductName = document.querySelector(".text-container").children[0];
const cartSubtotal = document.querySelector(".text-container").children[1];

cartProductsContainer.removeChild(cartProduct)

console.log(addButton)

function addProduct () {
    console.log("hi")


    //Condicion - comprobar que que no esta y anadir

    //else llamar la funcion de aumentar

}