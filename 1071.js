/**
 * Obter numeros a soma de numeros impares consecutivos
 * ENTRES ELES OU SEJA OS NUMEROS QUE ESTAO NA ENTRADA NAO CONTAM
 * 6 E -5
 * -5 -4 -3 -2 -1 0 1 2 3 4 5 6 -> RETIRA-SE O 6 E -5
 *  -4 -3 -2 -1 0 1 2 3 4 5 -> E A SOMA DELES IRA DAR 5
 */

var input = require("fs").readFileSync("teste", "utf-8");
var numero = input.split("\r\n");
let x = parseInt(numero[0]);
let y = parseInt(numero[1]);

let soma = 0;

if (x < y) {
  for (let index = x + 1; index < y; index++) {
    if (index % 2 != 0) {
      soma = soma + index;
    }
  }
} else {
  for (let index = y + 1; index < x; index++) {
    if (index % 2 != 0) {
      soma = soma + index;
    }
  }
}

console.log(soma);
