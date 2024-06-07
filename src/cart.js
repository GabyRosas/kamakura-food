//DEBE contener las funcionalidades del carrito de compras.


function subTotals (price, subtotal, operator) {       
    let subTotal;
if (operator == '+'){
    subTotal = price + subtotal;
   } else {
    subTotal = price - subtotal; 
}
return subTotal;
}


export { subTotals }


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
    cartProductContainer.innerHTML = `
    <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
                        <div class="text-container">
                            <h3>${name}</h3>
                            <h5>${price} €</h5>
                        </div>
                        <div class="quantity-container" id="quantity">
                            <button>+</button>
                            <p class="quantity">1</p>
                            <button>-</button>
                        </div>`
    cartProductsContainer.appendChild(cartProductContainer);

    createCartItem(id, name, price);
}


export function addToCart (id, name, price) {
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



