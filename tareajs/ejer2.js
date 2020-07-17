
let dinero = prompt('con cuanto dinero dispone para su compra:');
compra = 0;

if (dinero <= 10) {
    console.log("comprar tarjeta para regalo");
} else if (dinero >= 11 && dinero <= 100) {
    console.log("comprar chocolates para regalo");
}
else if (dinero >= 101 && dinero <= 250) {
    console.log("comprar flores para regalo");
}
else if (dinero >= 251) {
    console.log("comprar anillo apra regalo");
}

console.log("gracias por su compra que pase un Feliz dia del amor y la amistad");