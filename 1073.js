var input = require("fs").readFileSync("teste", "utf-8");
var lines = input.split(" ")

let numero = lines[0]


for (let index = 1; index <= numero; index++) {
    if(index % 2 === 0) {
        console.log(`${index}^2 = ${Math.pow(index,2)}`)
    }
    
}