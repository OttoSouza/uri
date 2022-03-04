var input = require("fs").readFileSync("teste", "utf-8");

let horas1 = input.split(" ");

let hora_start = parseInt(horas1[0]);
let minutos_start = parseInt(horas1[1]);
let all_minu_start = (hora_start * 60) + minutos_start;

let hora_end = parseInt(horas1[2]);
let minutos_end = parseInt(horas1[3]);
let total_minutos = hora_end * 60 + minutos_end;

let all_minu_dif = (24 * 60 - all_minu_start) + total_minutos

let horas = all_minu_dif / 60;
let minutos = all_minu_dif % 60;

if (horas >= 24 && minutos >= 1) {
  horas = horas % 24;
}

console.log("O JOGO DUROU "+ parseInt(horas) + " HORA(S) E " + parseInt(minutos) + " MINUTO(S)")

