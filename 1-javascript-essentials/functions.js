// Hoisting
// 'Attach' das variáveis ao seu escopo pai mais próximo

// < ES6
function giveOutput(a, b) {
  console.log(a * b);
}

giveOutput(5, 4);

// >= ES6
// Arrow Function
const modernFunction = (a, b) => {
  console.log(a * b);
};

modernFunction(5, 4);
