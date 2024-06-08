//Aquí intenta poner las funcionalidades del recibo

function manageReceipt(e) {
    
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

export { payOrder }