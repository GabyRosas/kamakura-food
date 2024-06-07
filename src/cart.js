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
