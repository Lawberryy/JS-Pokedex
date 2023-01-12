let container = document.querySelector('.container')
let url = ('https://pokeapi.co/api/v2/pokemon?limit=100')

function getPoke(){
    fetch(url)

    .then(r =>r.json())
    .then(async d =>  {

        const pokemons = d.results

        for (const pokemon of pokemons){
          pokemon.data = await fetch(pokemon.url).then(response => response.json())
          console.log(pokemon.data)
        }


        // pokemons.forEach(  poke => {
        //   const urlData = fetch(`${url}`);
        //   response => response.json();
        //   const dataPokemon =  response.json();
        //     console.log('Big bitch :', poke.name)
        //     console.log(urlData)
        // })    

        pokemons.forEach(pokemon =>{
          renderPokemon(pokemon);
        })
    });
}

let pokedexContainer = document.querySelector('.pokedex_container')

function renderPokemon(pokemon){
  html = `
  <div class="pokemons_wrapper">
    <div class="pokemon_img-wrapper">
      <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}" class="pokemon_img">
    </div>
    <div class="pokemon_stats-wrapper">
      <div class="pokemon_id">#${pokemon.data.id.toString().padStart(3,"0")}</div>
    </div>
    <div class="pokemon_name">${pokemon.data.name[0].toUpperCase() + pokemon.data.name.slice(1)}</div>
    <div class="pokemon_type is--${pokemon.data.types[0].type.name}">${pokemon.data.types[0].type.name[0].toUpperCase() + pokemon.data.types[0].type.name.slice(1)}</div>
  </div>
  `;
  pokedexContainer.insertAdjacentHTML("beforeend" ,html);
}

getPoke()

///video home page
let videoHome = document.getElementById("videoBack");
let videoButton = document.getElementById("videoButton");

function pausing() {
  if (videoHome.paused) {
    videoHome.play();
    videoButton.innerHTML = "Pause the video";
  } else {
    videoHome.pause();
    videoButton.innerHTML = "Play the video";
  }
}


class PokeModel {
  constructor(d = {}){
    this.name = d.name
    this.types = this.getTypes(d.types)
  }

  _getTypes(types = []) {
    return types.map((type) => {
      return {
        name: type.name
      }
    })
  }
}

// window.onload=()=>{
//   const transition_el = document.querySelector('.transition');
//   const anchors = document.querySelectorAll('a');
//   setTimeout(() => {
//     transition_el.classList.remove('is-active')
//   }, 500);

//   for (let i = 0; i < anchors.length; i++) {
//     const anchor = anchors[i];

//     anchor.addEventListener('click',e=>{
//       e.preventDefault();
//       let target = e.target.href;
//       console.log
//     })
    
//   }
// }