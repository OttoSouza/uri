var input = require("fs").readFileSync("teste", "utf-8");

const valores = input.split("\n");
let pos = 0;
for (const item of valores) {
    if(item > 0) {
        pos++;
    }
}

console.log(`${pos} valores positivos`)