var input = require("fs").readFileSync("teste", "utf-8");

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
