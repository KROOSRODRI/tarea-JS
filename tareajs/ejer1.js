let ht = prompt('Ingrese sus horas trabajadas:', '');
let ph = prompt('Ingrese su pago por horas:', '');
let salariosht = 0;
let horasextra = 0;
let excedente = 0;
let salarioextras = 0;


if (ht <= 40) {
  salariosht = ht * ph;
  console.log(`su salario es = ${salariosht}`);
}
else {
  horasextra = ht - 40;
  excedente = horasextra * (ph * 2);
  salarioextras = (ht * ph) +  excedente;
  console.log(`su salario con horas extras es = ${salarioextras}`);
}
