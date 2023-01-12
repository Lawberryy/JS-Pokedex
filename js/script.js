const poke_container = document.getElementById('poke_container');
const pokemons_number = 1;


const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

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

  const pokemons = [];
  const url =`https://pokeapi.co/api/v2/pokemon`;
fetch(url)
.then(blob => blob.json())
.then(data => pokemons.push(...data.pokemon));

function findpokemons(search, pokemon){
return pokemon.filter(pokemon =>{
    const reG = new RegExp(search, 'gi' );
    return pokemon.name.match(reG)
});
}

function showresults(){
    const tableresult = fetchPokemons(this.value.pokemons);
    const HTML = tableresult.map(
        pokemon =>{
            return`
            <li>${pokemon.name}</li>`;
        }
    );
    result.innerHTML = html;
    }
const input = document.querySelector('input');
const result = document.querySelector('ul');

input.addEventListener('change',showresults);
input.addEventListener('keyup',showresults);



 


