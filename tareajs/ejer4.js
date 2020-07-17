



let sueldo = prompt(`ingrese su sueldo`);
let antiguedad = prompt(`ingrese su antiguedad`);

let bonomensual = 0;
let bonoporantiguedad = 0;
let bonoporsueldo = 0;

if (antiguedad > 2 && antiguedad < 5) {
    bonoporantiguedad = sueldo * 0.2;
}
else if (antiguedad >= 5) {
    bonoporantiguedad = sueldo * 0.3;
    bonoporsueldo = 0;
}
else if (sueldo <= 1000) {
    bonoporsueldo = sueldo * 0.25;
}
else if (sueldo > 1000 && sueldo <= 3500) {
    bonoporsueldo = sueldo * 0.15;
}
else if (sueldo > 3500) {
    bonoporsueldo = sueldo * 0.1;
}
else if (bonoporantiguedad > bonoporsueldo) {
    bonomensual = bonoporantiguedad;
}
else
    bonomensual=bonoporsueldo;
    console.log(`su bono mensual es: ${bonomensual} `);
    console.log(`su bono por antiguedad es: ${bonoporantiguedad}`);
    console.log(`su bono por sueldo es: ${bonoporsueldo}`);