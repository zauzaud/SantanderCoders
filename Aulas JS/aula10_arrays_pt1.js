// Arrays

// Criando um array

let array = [1, 2, 3, 4, 5];

console.log(array);

let array2 = ["a", "b", 1, 2, 3];

console.log(array2);

// Acessando um elemento do array, ter em mente que o primeiro elemento é o 0

console.log(array[0]); // 1

console.log(array[1]); // 2

console.log(array2[1]); // b

// Obtendo o tamanho de um array

console.log(array.length); // 5

console.log(array2.length); // 5

// Percorrendo um array

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Percorrendo um array com for of

for (let i of array) {
  console.log(i);
}

console.clear();

// Percorrendo um array com for in

for (let i in array) {
  console.log(array[i]);
}
