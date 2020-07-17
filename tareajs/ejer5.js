

let padece_enfermedad=0;
let tipo_de_poliza=0;
let toma_alcohol=0;
let utiliza_lentes=0;
let costopoliza=0;


let edad= prompt("ingrese su edad");
let tipo_de_poliza= prompt("ingrese tipo de poliza");
let toma_alcohol=prompt("toma alcohol");
let utiliza_lentes=prompt("utiliza lentes");
let padece_enfermedad=prompt("padece de alguna enfermedad");

if(tipo_de_poliza==1)
cuota=1200;
else
cuota=950;
cargos=0;
if(toma_alcohol==1)
cargos=cargos+cuota*0.1;
if(utiliza_lentes==1)
cargos=cargos+cuota*0.05;
if(padece_enfermedad==1)
cargos=cargos+cuota*0.05;
if(edad>40)
cargos=cargos+cuota*0.2;
else
cargos=cargos+cuota*0.1;
costopoliza=cuota+cargos;


  