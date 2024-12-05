const pokeJSON = localStorage.getItem("most-recent-card");
console.log(JSON.parse(pokeJSON));
const pokemonCard = new Pokemon(JSON.parse(pokeJSON));
console.log(pokemonCard);

const output = document.getElementById("cardOutput");

output.appendChild(pokemonCard.getCard());
