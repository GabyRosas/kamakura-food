//Aquí intenta poner las funcionalidades del recibo

console.log("holaa")

let windowReceipt = document.getElementById("receipt-container");
let windowCart = document.getElementById("products-container");
console.log(windowReceipt);


function openReceipt () {
    if ( windowReceipt.style.display === "none" == true) {
        windowReceipt.style.display = "flex";
        windowCart.style.display = "none";
    } else {
        windowReceipt.style.display = "none";
        windowCart.style.display = "flex";
    }
};


function manageReceipt(e) {
    
}

export {openReceipt}