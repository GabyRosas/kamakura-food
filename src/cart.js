//DEBE contener las funcionalidades del carrito de compras.

console.log("hi")

const cartProductsContainer = document.getElementById("cart-products");
const cart = [];

function createCartItem (id, name, price) {
    const cartItem = {
        id,
        name,
        price,
        quantity: 1
    }
    cart.push(cartItem)
}

function createCartProduct (id, name, price) {
    const cartProductContainer = document.createElement("div");
    cartProductContainer.className = "cart-container";
    const closeButton = document.createElement("button");
    closeButton.className = "close-button";
    const closeImage = document.createElement("img");
    closeImage.src = "./assets/img/close.svg";
    closeImage.alt = "close";
    closeButton.onclick = function (e) {
        deleteCartItem(id)
        };

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    const cartProductName = document.createElement("h3");
    const cartProductPrice =  document.createElement("h5");

    const quantityContainer = document.createElement("div");
    quantityContainer.className = "quantity-container";
    const plusButton = document.createElement("button");
    
    plusButton.innerText = "+";
    plusButton.onclick = function (e) {
        console.log("sumado")
        //Aqui va la funcion de sumar
        };
    const quantity = document.createElement("p");
    quantity.innerText = "1";
    quantity.className = "quantity";

    const minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.onclick = function (e) {
        console.log("restado")
        //Aqui va la funcion de restar
        };

    cartProductsContainer.appendChild(cartProductContainer);
    cartProductContainer.append(closeButton, textContainer, quantityContainer);
    closeButton.appendChild(closeImage);
    textContainer.append(cartProductName, cartProductPrice);
    quantityContainer.append(plusButton, quantity, minusButton);

    cartProductName.innerText = name;
    cartProductPrice.innerText = `${price} €`;

    createCartItem(id, name, price);

}


export function addToCart (id, name, price) {
    let startText = document.getElementById('cart-products').children[0];
    startText.style.display = "none";

    let positionThisProductInCart = cart.findIndex((value) => value.id == id);
    if (cart.length <= 0) {
        createCartProduct(id, name, price)
    } else if (positionThisProductInCart < 0) {
        createCartProduct(id, name, price)
    } else {
     // llamar la funcion de aumentar
        console.log("works")
    }
}

function deleteCartItem (id) {

    let positionThisProductInCart = cart.findIndex((prod) => prod.id == id) + 1;
    let thisProductContainer = cartProductsContainer.children[positionThisProductInCart];
    cartProductsContainer.removeChild(thisProductContainer);
    
    cart.splice((positionThisProductInCart - 1), 1);

    if (cart.length == 0) {
        
    startText.style.display = "block";
    }

}

