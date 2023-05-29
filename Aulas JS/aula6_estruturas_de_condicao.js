// Estruturas de condição

// if...else

let temperature = 36.5;

if (temperature >= 37.5) {
  console.log("Febre alta");
} else if (temperature < 37.5 && temperature >= 37) {
  console.log("Febre moderada");
} else {
  console.log("Saudável");
}

// switch

let expression = "a";

switch (expression) {
  case "a": // expression === 'a'
    console.log("a");
    break;
  case "b": // expression === 'b'
    console.log("b");
    break;
  default:
    console.log("default");
    break;
}

// throw

console.clear();

function sayMyName(name = "") {
  if (name == "") {
    throw "Nome é obrigatório";
  }

  console.log(name);
}

// Ex1 if else

let nota1 = 7.5;
let nota2 = 4;

let media = (nota1 + nota2) / 2;

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
