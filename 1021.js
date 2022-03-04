var input = require("fs").readFileSync("teste", "utf-8");

var lines = input.split("\r\n");

let value = lines.shift();

const bank_note = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:")

for (const bn of bank_note) {
    console.log(`${parseInt(value/bn)} nota(s) de ${bn.toFixed(2)}`)
    value = value % bn;
}

console.log("MOEDAS:")
for (const coin of coins) {
    console.log(`${parseInt(value / coin)} moedas ${coin.toFixed(2)}`)
    value = value % coin;
}
