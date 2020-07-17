

let dinero_recibido = prompt("cuanto dinero recibio");



if (dinero_recibido >= 50000) {
    console.log('Paquete A');
}
if (dinero_recibido >= 20000 && dinero_recibido < 50000) {
console.log('Paquete B');
}
if (dinero_recibido >= 10000 && dinero_recibido < 20000){
    console.log('Paquete C');
}
if (dinero_recibido < 10000){
    console.log('Paquete D');
}

