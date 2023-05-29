// Laco for

const input = require("readline-sync");

let auxiliar = 0;

for (let i = 0; i < 10; i++) {
  auxiliar += i;
  console.log(auxiliar, i);
}

// Resolvendo o ex1 com for

let nota = 0;
let soma = 0;

for (let i = 1; i < 4; i++) {
  nota = Number(input.question(`Digite a nota ${i}: `));

  soma += nota;

  console.log("Soma: ", soma);
}

console.log("Media: ", soma / 3);
