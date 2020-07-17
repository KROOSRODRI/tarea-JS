

let horas = prompt('cantidad de horas:');
let cobro=0;
 totalh=horas;

 if(horas<=2){
 cobro=horas*5;
}
else if(horas>=2 && horas<=5)
{
 cobro=2*5+(horas-2)*4;
}
else if(horas>=5 && horas<=10){
 cobro=2*5+3*4+(horas-5)*3;
}
else if(horas>=10){
 cobro=2*5+3*4+3*5+(horas-10)*2;
}

console.log(`el total a pagar es=> ${cobro}`);


