var input = require("fs").readFileSync("teste", "utf-8");

let initial = parseFloat(input.split("\n"));
let readjustment = 0.0;
if (initial >= 0 && initial <= 400) {
  readjustment = initial * 0.15;
  initial = readjustment + initial;
  console.log(
    `Novo salario: ${initial.toFixed(
      2
    )}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 15 %`
  );
} else if (initial > 400 && initial <= 800) {
  readjustment = initial * 0.12;
  initial = readjustment + initial;
  console.log(
    `Novo salario: ${initial.toFixed(
      2
    )}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 12 %`
  );
} else if (initial > 800 && initial <= 1200) {
  readjustment = initial * 0.1;
  initial = readjustment + initial;
  console.log(
    `Novo salario: ${initial.toFixed(
      2
    )}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 10 %`
  );
} else if (initial > 1200 && initial <= 2000.0) {
  readjustment = initial * 0.07;
  initial = readjustment + initial;
  console.log(
    `Novo salario: ${initial.toFixed(
      2
    )}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 7 %`
  );
} else {
  readjustment = initial * 0.04;
  initial = readjustment + initial;
  console.log(
    `Novo salario: ${initial.toFixed(
      2
    )}\nReajuste ganho: ${readjustment.toFixed(2)}\nEm percentual: 4 %`
  );
}

var r1 = [
  { a: "a", r: "r" },
  { a: "d", r: "r1" },
  { a: "h", r: "r4" },
];
var r2 = [
  { b: "b", t: "t" },
  { b: "f", f: "r2" },
  { b: "i", f: "r5" },
];
var r3 = [
  { c: "c", z: "z" },
  { c: "g", d: "r3" },
  { c: "j", dr: "r6" },
];

var s = [];

r1.forEach((item, index) => {
  s.push({ ...r1[index], ...r2[index], ...r3[index] });
});

console.log(s);
