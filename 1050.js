var input = require("fs").readFileSync("teste", "utf-8");

let opcao = parseInt(input);


if(opcao === 61) {
  console.log("Brasilia");
}
else if(opcao === 71) {
  console.log("Salvador");
}
else if(opcao === 11) {
  console.log("Sao Paulo");
}
else if(opcao === 21) {
  console.log("Rio de Janeiro");
}
else if(opcao === 32) {
  console.log("Juiz de Fora");
}
else if(opcao === 19) {
  console.log("Campinas");
}
else if(opcao === 27) {
  console.log("Vitoria");
}
else if (opcao === 31) {
  console.log("Belo Horizonte");
} else {
  console.log("DDD nao cadastrado")
}



// switch (opcao) {
//   case 61:
//     console.log("Brasilia");
//     break;
//   case 71:
//     console.log("Salvador");
//     break;
//   case 11:
//     console.log("Sao Paulo");
//     break;
//   case 21:
//     console.log("Rio de Janeiro");
//     break;
//   case 32:
//     console.log("Juiz de Fora");
//     break;
//   case 19:
//     console.log("Campinas");
//     break;
//   case 27:
//     console.log("Vitoria");
//     break;
//   case 31:
//     console.log("Belo Horizonte");
//     break;
// }
