var input = require("fs").readFileSync("teste", "utf-8");

let opcoes = input.split("\r\n");

let type1 = opcoes[0];
let type2 = opcoes[1];
let type3 = opcoes[2];

if (type1 === "vertebrado") {
  if (type2 === "ave") {
    type3 === "carnivoro" ? console.log("aguia") : console.log("pomba");
  } else {
    type3 === "onivoro" ? console.log("homem") : console.log("vaca");
  }
} else {
  if (type2 === "inseto") {
    type3 === "hematofago" ? console.log("pulga") : console.log("lagarta");
  } else {
    type3.match("hematofago")
      ? console.log("sanguessuga")
      : console.log("minhoca");
  }
}
