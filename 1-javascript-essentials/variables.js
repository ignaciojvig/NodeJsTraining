// < ES6
// Variável de Escopo Global
var variable1 = "Pablo";

// >= ES6
// Não pode ser 're-assignada'
const variable2 = {
  name: "João Victor",
  age: 30
};

// Pode ser 're-assignada'
let variable3 = 532.22;

variable2.lastName = "Oakenshield";

console.log(variable1);
console.log(variable2);
console.log(variable3);
