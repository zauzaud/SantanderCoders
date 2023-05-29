// Objetos no JS

// Criando um objeto

let friend = {
  name: "Gabriel",
  age: 25,
  city: "Sao Paulo",
  state: "SP",
};

console.log(friend); // { name: 'Gabriel', age: 25, city: 'Sao Paulo', state: 'SP' }
console.log(friend.name); // Gabriel
console.log(friend.age); // 25
console.log(friend.city); // Sao Paulo
console.log(friend.state); // SP

// Adicionar propriedades ao objeto

friend.country = "Brasil";

console.log(friend); // { name: 'Gabriel', age: 25, city: 'Sao Paulo', state: 'SP', country: 'Brasil' }

// Deletar propriedades do objeto

delete friend.country;

console.log(friend); // { name: 'Gabriel', age: 25, city: 'Sao Paulo', state: 'SP' }

// Percorrendo um objeto

for (let property in friend) {
  console.log(property); // name age city state
  console.log(friend[property]); // Gabriel 25 Sao Paulo SP
}
