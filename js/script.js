const poke_container = document.getElementById('poke_container');
const pokemons_number = 1;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};
/*const Pokemois = async () => {
	for (let i = 0; i <= 0; i++) {
		await getPokemon(i);
	}
};*/

const getPokemon = async id => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon)
  }
  

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokeInnerHTML = `
    <div class='new_pokemon'>
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <h3>
    ${pokemon.types[0].type.name}
    </h3>
    
    </div>`;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
  }

  fetchPokemons();

function findpokemons(search, pokemon){
return pokemon.filter(pokemon =>{
    const regex = new RegExp(search, `gi` );
    return pokemon.name.match(regex)
});
}

function showresults(pokemon){
    const tableresult = fetchPokemons(this.value.pokemons);
    const HTML =
    /*    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"
     <span>${pokemon.stats[0].type.name}</span> />*/ `
    <li>
    <span>${pokemon.name}</span>
    <span>${pokemon.weight}</span>
   </li>`;
    tableresult.innerHTML = HTML;
    }
const input = document.querySelector('input');
const result = document.querySelector('ul');

input.addEventListener('change',showresults);
input.addEventListener('keyup',showresults);





 


