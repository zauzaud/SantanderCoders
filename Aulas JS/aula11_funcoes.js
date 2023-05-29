// Funcoes

// Funcao simples

function helloWorld() {
  console.log("Hello World");
}

helloWorld(); // Hello World  // Chamando e executando a funcao

// Funcao com parametros

let name1 = "Gabriel";
let age = "25";
let city = "Sao Paulo";
let state = "SP";

function greeting(name1, age, city, state) {
  console.log("Hello " + name1, age, city, state, "!");
}

greeting(name1, age, city, state); // Hello Gabriel, 25, Sao Paulo, SP !

// Funcao com retorno

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);

console.log(result); // Resultado 1+2 = 3

// Funcao com retorno e sem parametros

function hello() {
  return "Hello World";
}

let result2 = hello();

console.log(result2); // Hello World
