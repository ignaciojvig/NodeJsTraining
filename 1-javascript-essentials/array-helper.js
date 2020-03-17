// Array Helper Methods

const listaDeFilmes = [
  {
    name: "Watchmen",
    year: 2000,
    score: 0.9
  },
  {
    name: "Lord of the Rings",
    year: 2001,
    score: 0.97
  },
  {
    name: "Warcraft",
    year: 2010,
    score: 0.8
  }
];

// 1) Retorno da lista de filmes cujo score é igual ou superior a '0.9'
// a) (Melhor) uso do Filter
const resposta = listaDeFilmes.filter(x => x.score >= 0.9);
console.log(resposta);

// b) (Não é o Ideal) usando o map() ou o forEach()
// - O ideal é do Map é ter uso fruto do seu retorno
const newList = [];
listaDeFilmes.map(x => {
  if (x.score > 0.9) {
    newList.push(x);
  }
});

// 2) Retornar apenas os filmes de antes de 2007 com o score reduzido em 20%
const filmesSelecionados = listaDeFilmes
  .filter(x => x.year < 2007)
  .map(x2 => {
    console.log(x2);
    return {
      ...x2,
      score: x2.score * 0.8
    };
  });

// const filmesSelecionados = listaDeFilmes
//   .filter(x => x.year < 2007)
//   .map(x2 => {
//     x2.score = x2.score - x2.score * 0.2;
//     return x2;
//   });

console.log(filmesSelecionados);
