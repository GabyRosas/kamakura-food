//Aquí intenta poner las funcionalidades del recibo
import { cart, total } from "./cart.js";

let windowReceipt = document.getElementById("receipt-container");
let windowCart = document.getElementById("products-container");
let totalCart = document.getElementById("cart-total");
let productOrder = document.getElementById("receipt-product");
let receiptPrice = document.querySelector(".receipt-price");
let receiptTotalElement = document.getElementById("receipt-total");
let textMessage = document.createElement("p");
windowReceipt.appendChild(textMessage);

let product;

function openReceipt () {
    if ( windowReceipt.style.display === "flex" == false) {
        windowReceipt.style.display = "flex";
        windowCart.style.display = "none";
    } else {
        windowReceipt.style.display = "none";
        windowCart.style.display = "flex";
    }
};

function showReceipt () {
    if (cart.length <= 0) {
        productOrder.firstChild.innerHTML = ("Aún no has escogido tu orden");
        receiptPrice.style.display = "none";
        receiptTotal.innerHTML = ("Total 0.00 €");
    } else {
        for (let product of cart) {
            let item=document.createElement("div");
            item.className="receipt-product";
            item.innerHTML=`            
            <h3>${product.name}</h3> 
            <div class="receipt-price"> 
            <p>Cantidad: ${product.quantity}</p> 
            <h5>Subtotal: €${product.subtotal.toFixed(2)}</h5> 
            </div> `
            windowReceipt.insertBefore(item, receiptTotalElement);
            }
        receiptTotalElement.innerText = `Total: €${total.toFixed(2)}`; 
    }
};

function openModal () {
    let modal = document.createElement('div');
    let body = document.querySelector(".container")
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-content">
    <button class="close-button" id="close-modal"><img src="/assets/img/close.svg" alt="close"></button>
    <h3 class="modal-title">Gracias por tu Compra</h3>
    <p class="modal-text">¡Pedido realizado con éxito, gracias por comprar en Kamakura Food!</p>
    <img class="image-logo" src="/assets/img/logo.svg" alt="restaurant logo">
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
    if (receiptTotal.innerHTML == "Total 0.00 €") {
        let receiptContainer = document.getElementById("receipt-container");
        let textMessage = document.createElement("p");
        textMessage.innerText = "Tu orden está vacia";
        textMessage.style.color = "#fc3232";
    } else {
        openModal();
    }
}

export { openReceipt, showReceipt, payOrder }
