const axios = require("axios");
const baseUrl = "https://pokeapi.co/api/v2";

// const buildPokemonPage = pokemonName => {
//   axios.get(`${baseUrl}/pokemon/${pokemonName}`).then(x => console.log(x.data));
// };

const buildPokemonPage = async pokemonName => {
  return await axios.get(`${baseUrl}/pokemon/${pokemonName}`);
};

buildPokemonPage("pikachu");

const howPromisesWorks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.random() * 10;

      if (result < 3) {
        reject("Unfortunatly job failed!");
      } else {
        resolve("Job Worked!");
      }
    }, 3000);
  });
};

// howPromisesWorks()
//   .then(x => console.log(x))
//   .catch(x => console.log(x));

// Trazer o nome e o peso dos pokemons, cujo peso for superior a 100
const listaDePokemonsFavoritos = [
  "pikachu",
  "charizard",
  "blastoise",
  "squirtle",
  "bellsprout",
  "pidgey"
];

const listaDePokemonsFavoritosComoPromises = listaDePokemonsFavoritos.map(x =>
  axios.get(`${baseUrl}/pokemon/${x}`)
);

Promise.all(listaDePokemonsFavoritosComoPromises)
  .then(x => console.log(x))
  .catch(x => console.log(x));
