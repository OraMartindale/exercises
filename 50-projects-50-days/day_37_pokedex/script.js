const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;
const colors = {
  fire: '#fddfdf',
  grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const mainTypes = Object.keys(colors);

const fetchPokemon = () => {
  for (let i = 1; i <= pokemonCount; i++) {
    getPokemon(i);
  }
};

const getPokemon = id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then(response => response.json())
    .then(createPokemonCard)
    .catch(console.error)
};

const createPokemonCard = pokemon => {
  const { id, name, types } = pokemon;
  const pokeTypes = types.map(type => type.type.name);
  const type = mainTypes.find(type => pokeTypes.indexOf(type) != -1);

  const pokemonElement = document.createElement('div');
  pokemonElement.classList.add('pokemon');
  pokemonElement.style.backgroundColor = colors[type];
  pokemonElement.innerHTML = `
    <div class="img-container">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${id}.png">
    </div>
    <div class="info">
      <span class="number">#${id.toString().padStart(3, '0')}</span>
      <h3 class="name">${name[0].toUpperCase() + name.slice(1)}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `;
  pokeContainer.appendChild(pokemonElement);
};

fetchPokemon();
