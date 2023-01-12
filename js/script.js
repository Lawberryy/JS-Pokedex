let container = document.querySelector('.container')
let url = ('https://pokeapi.co/api/v2/pokemon?limit=6')
let pokemons_data = [];
let tempPokemons;

fetch(url)

.then(r =>r.json())
.then(async d =>  {

    const pokemons = d.results

    for (const pokemon of pokemons){
      pokemon.data = await fetch(pokemon.url).then(response => response.json())
      pokemons_data.push(pokemon.data) 
      // console.log (pokemons_data)
  }
});

////////////////////////////////

console.log(pokemons_data)

function getPoke(){
    fetch(url)

    .then(r =>r.json())
    .then(async d =>  {

        const pokemons = d.results

        for (const pokemon of pokemons){
          pokemon.data = await fetch(pokemon.url).then(response => response.json())
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

// rending cards pour le pokedex

let pokedexContainer = document.querySelector('.pokedex_container')

function renderPokemon(pokemon){
  html = `
  <div class="pokemons_wrapper">
    <div class="pokemonMainInfo">
      <div class="pokemon_img-wrapper">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}" class="pokemon_img">
      </div>

      <div class="top_content">
        <div class="pokemon_stats-wrapper">
        <div class="pokemon_id">#${pokemon.data.id.toString().padStart(3,"0")}</div>
        </div>

        <div class="pokemon_name">${pokemon.data.name[0].toUpperCase() + pokemon.data.name.slice(1)}</div>
      </div>
    </div>

    <div class="type_container">
      <div class="pokemon_type is--${pokemon.data.types[0].type.name}">${pokemon.data.types[0].type.name[0].toUpperCase() + pokemon.data.types[0].type.name.slice(1)}</div>
    </div>
  </div>
  `;
  pokedexContainer.insertAdjacentHTML("beforeend" ,html);
}

getPoke()

///video home page
let videoHome = document.querySelector("#videoBack");
let videoButton = document.querySelector("#videoButton");

function pausing() {
  if (videoHome.paused) {
    videoHome.play();
    videoButton.innerHTML = "Pause the video";
  } else {
    videoHome.pause();
    videoButton.innerHTML = "Play the video";
  }
}

// filter ///////

let filterContainer = document.querySelector('.filter_container')

const urlFilter = ('https://pokeapi.co/api/v2/type')


function getFilter(){
  fetch(urlFilter)

  .then(res => res.json())
  .then(async data => {
    // console.log(data)
    filters = data.results
    // console.log(filters)

    filters.forEach(filter =>{
      // console.log(filter)
      html = `
      <div class="poke_filter">
        <div class="filters">
          <button class="pixel_button button-${filter.name} type_button">${filter.name}</button>
        </div>
      </div>
      `;
      filterContainer.insertAdjacentHTML("beforeend" ,html);      
    })
  })

  
  .then(function(){
    let typeButton = document.querySelectorAll('.type_button')

    typeButton.forEach((bouton) =>{
      bouton.addEventListener('click',(e) =>{
        let type_filtered = bouton.innerHTML;
        filterPoke(pokemons_data, type_filtered)
      //   for (const pokemonTest of pokemons_data){
      //     console.log('patate', pokemonTest)

      // }
      });

    });
  });
}

getFilter();

// function filteredDisplay(pokeList){
//   pokedexContainer.innerHTML = "";

//   pokeList.forEach(pokemon => {
//       renderPokemon(pokemon)
//       return
//     }
//   )
// }

function filterPoke(array,type){

  pokedexContainer.innerHTML = "";
  
  array = Object.values(array).filter(pokemon => pokemon.types[0].type.name === type);


  array.forEach((pokemon) =>{
    renderPokemon(pokemon)
  })

  return array
  
}






// function filterChange(){
//   console.log('AAAAA')

//   pokedexContainer.innerHTML = "";

  
//   // typeButton.forEach((e)=> {
//   //   console.log(filter.srcElement.InnerText)
//   // })

// }

