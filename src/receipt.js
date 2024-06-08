//Aquí intenta poner las funcionalidades del recibo


let windowReceipt = document.getElementById("receipt-container");
let windowCart = document.getElementById("products-container");
let totalCart = document.getElementById("cart-total");
let emptyMessage = document.getElementById("receipt-product").firstElementChild;
let receiptPrice = document.querySelector(".receipt-price");
let receiptTotal = document.getElementById("receipt-total");
let redMessage = document.createElement("p");
windowReceipt.appendChild(redMessage);


function openReceipt () {
    if ( windowReceipt.style.display === "flex" == false) {
        windowReceipt.style.display = "flex";
        windowCart.style.display = "none";
    } else {
        windowReceipt.style.display = "none";
        windowCart.style.display = "flex";
    }
};

function emptyCart () {
    if ( totalCart = "0" ) {
    emptyMessage.innerHTML = ("Aún no has escogido tu orden");
    receiptPrice.style.display = "none";
    receiptTotal.innerHTML = ("Total 0.00 €");
    redMessage.innerHTML = ("Tu orden esta vacia");
    redMessage.style.color = "red";
    }
}

function manageReceipt(e) {
    
}

export {openReceipt, emptyCart}