// Arrays Metodos

// Slice

// Retorna um novo array "fatiando" de acordo com parametro de inicio e fim

let array = [1, 2, 3, 4, 5];

console.log(array.slice(0, 2)); // [1, 2]

console.log(array.slice(2, 4)); // [3, 4]

console.log(array.slice(2)); // [3, 4, 5]

console.log(array.slice(-1)); // [5]

// Adicionando elementos no array push e unshift

// Push

// Adiciona um ou mais elementos no final do array

console.log(array.push(6, 7, 9)); // 6

console.log(array); // [1, 2, 3, 4, 5, 6]

console.log(array.push(7, 8, 9)); // 9

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.clear();

// Unshift
// Adiciona um ou mais elementos no inicio do array e retorna o tamanho do novo array

console.log(array.unshift(0)); // adiciona o 0 no inicio

console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Removendo elementos do array com pop e shift

// Pop

// Remove o ultimo elemento do array e retorna o elemento removido

console.log(array.pop()); // 9

console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Shift

// Remove o primeiro elemento do array e retorna o elemento removido

console.log(array.shift()); // 0 eh removido

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8]

// Concat
console.clear();
// Concatena um ou mais arrays retornando um novo array

let array2 = [9, 10, 11, 12];

console.log(array.concat(array2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Buscando elementos indexOf + lastIndexOf

// IndexOf

// Retorna o primeiro indice do elemento buscado

console.clear();

console.log(array2);

let indice = array2.indexOf(12); // 3 eh o indice do elemento 12

console.log(indice);

// lastIndexOf

// Retorna o ultimo indice do elemento buscado

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

console.log(array3.lastIndexOf(1)); // 9 eh o ultimo indice do elemento 1

// Includes

// Retorna true se o elemento buscado existir no array
console.clear();

console.log(array3);

console.log(array3.includes(1)); // true

console.log(array3.includes(10)); // false

// Reverse

// Inverte os elementos do array

console.clear();

console.log(array3);

let reverseArray = array3.reverse();

console.log(reverseArray);
