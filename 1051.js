var input = require("fs").readFileSync("teste", "utf-8");

let salario = parseFloat(input);
let renda = 0;

if (salario <= 2000) {
  console.log("Isento");
} else if (salario <= 3000) {
  salario = salario - 2000;
  renda = salario * 0.08;
  console.log(`R$ ${renda.toFixed(2)}`);
} else if (salario < 4500) {
  salario = salario - 3000;
  renda = 80 + salario * 0.18;
  console.log(`R$ ${renda.toFixed(2)}`);
} else if (salario > 4500) {
  salario = salario - 4500;
  renda = 350 + salario * 0.28;
  console.log(`R$ ${renda.toFixed(2)}`);
}
