/**
    W dia(s)
    X hora(s)
    Y minuto(s)
    Z segundo(s)
 */

var input = require("fs").readFileSync("teste", "utf-8");
var lines = input.split(" ").map(item => item.split("\r\n"))


let diaInicio = lines[1][0];
let horasInicio = lines[1][1];
let minutosInicio = lines[3];
let segundosInicio = lines[5][0];

let diaFim = lines[6][0];
let horasFim = lines[6][1];
let minutosFim = lines[8];
let segundosFim = lines[10];

let diasTotais = parseInt(diaFim) - parseInt(diaInicio);
let horasTotais = parseInt(horasFim) - parseInt(horasInicio);
let minutosTotais = parseInt(minutosFim) - parseInt(minutosInicio);
let segundosTotais = parseInt(segundosFim) - parseInt(segundosInicio);

if(segundosTotais < 0) {
    segundosTotais += 60;
    minutosTotais--;
}

if(minutosTotais < 0) {
    minutosTotais+=60;
    horasTotais--;
}

if(horasTotais < 0) {
    horasTotais+=24;
    diasTotais--;
}


console.log(`${diasTotais} dia(s)\n${horasTotais} hora(s)\n${minutosTotais} minuto(s)\n${segundosTotais} segundo(s)`)
