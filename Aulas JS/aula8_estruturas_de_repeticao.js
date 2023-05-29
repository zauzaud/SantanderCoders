const input = require("readline-sync");

const numero_sorteado = 5;

let numero = input.questionInt("Digite um numero: ");

while (numero !== numero_sorteado) {
  numero = input.questionInt("Digite um numero: ");
}

console.log("Parabens, voce acertou!");
