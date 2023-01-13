const poke_container = document.getElementById('poke_container');
let url = 'https://pokeapi.co/api/v2/pokemon?limit=200';
  fetch(url)
  .then((r) => r.json())
  .then(async (d) => {
    const pokemons = d.results;

    for (const pokemon of pokemons) {
      pokemon.data = await fetch(pokemon.url).then((response) =>
        response.json()
      );
      // pokemons_data.push(pokemon.data);
      // console.log (pokemons_data)
    }
  });
  function getPoke() {
    fetch(url)
      .then((r) => r.json())
      .then(async (d) => {
        const pokemons = d.results;
  
        for (const pokemon of pokemons) {
          pokemon.data = await fetch(pokemon.url).then((response) =>
            response.json()
          );
        }
        
        pokemons.forEach((pokemon) => {` <li>
        <span>${pokemon.name}</span>

       </li>` ;
        });
      });
  }

function findpokemons(search, pokemon){
return pokemon.filter(pokemon =>{
    const regex = new RegExp(search, `gi` );
    return pokemon.name.match(regex)
});
}

function showresults(pokemon){
    const tableresult = getPoke(this.value.pokemons);
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