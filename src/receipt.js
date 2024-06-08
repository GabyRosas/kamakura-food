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

function openModal () {
    let modal = document.createElement('div');
    let body = document.querySelector(".container")
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-content">
    <button class="close-button" id="close-modal"><img src="./assets/img/close.svg" alt="close"></button>
    <h3 class="modal-title">Gracias por tu Compra</h3>
    <p class="modal-text">¡Pedido realizado con éxito, gracias por comprar en Kamakura Food!</p>
    <img class="image-logo" src="./assets/img/logo.svg" alt="restaurant logo">
    </div>
    `
    body.appendChild(modal);
    modal.style.display = "block";
    let closeModalButton = document.getElementById("close-modal");
    closeModalButton.addEventListener("click", closeModal)
}

function closeModal () {
    let modal = document.querySelector(".modal"); 
    modal.style.display = "none";
    location.reload();
}

function payOrder () {
    console.log("pagado");
    if (cart.length <= 0) {
        let receiptContainer = document.getElementById("receipt-container");
        let textMessage = document.createElement("p");
        textMessage.innerText = "Tu orden está vacia";
        textMessage.style.color = "#fc3232";
        receiptContainer.appendChild(textMessage);
    } else {
        openModal();
        console.log("modal")
    }
}

export { openReceipt, emptyCart, payOrder }

