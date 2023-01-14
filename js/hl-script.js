let container = document.querySelector('.container');
let url = 'https://pokeapi.co/api/v2/pokemon?limit=200';
let pokedexWrapper = document.querySelector('#pokedex-wrapper');

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

////////////////////////////////

// console.log(pokemons_data);

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
      
      pokemons.forEach((pokemon) => {
        renderPokemon(pokemon);
      });
    });
}

// rending cards pour le pokedex

let pokedexContainer = document.querySelector('.pokedex_container');

function renderPokemon(pokemon) {
  let pokeWrapper = document.createElement('div');
  pokeWrapper.classList.add('pokemons_wrapper');

  let pokeMainInfo = document.createElement('div');
  pokeMainInfo.classList.add('pokemonMainInfo');
  pokeWrapper.appendChild(pokeMainInfo);

  let pokeImgWrapper = document.createElement('div');
  pokeImgWrapper.classList.add('pokemon_img-wrapper');
  pokeMainInfo.appendChild(pokeImgWrapper);

  let pokeImg = document.createElement('img');
  pokeImg.src = pokemon.data.sprites.front_default;
  pokeImg.alt = pokemon.data.name;
  pokeImg.classList.add('pokemon_img');
  pokeImgWrapper.appendChild(pokeImg);

  let topContent = document.createElement('div');
  topContent.classList.add('top_content');
  pokeMainInfo.appendChild(topContent);

  let pokeStatsWrapper = document.createElement('div');
  pokeStatsWrapper.classList.add('pokemon_stats-wrapper');
  topContent.appendChild(pokeStatsWrapper);

  let pokeId = document.createElement('div');
  pokeId.classList.add('pokemon_id');
  pokeId.innerHTML = '#' + pokemon.data.id.toString().padStart(3, '0');
  pokeStatsWrapper.appendChild(pokeId);

  let pokeName = document.createElement('div');
  pokeName.classList.add('pokemon_name');
  pokeName.innerHTML =
    pokemon.data.name[0].toUpperCase() + pokemon.data.name.slice(1);
  topContent.appendChild(pokeName);

  let typeContainer = document.createElement('div');
  typeContainer.classList.add('type_container');
  pokeWrapper.appendChild(typeContainer);

  // console.log(pokemon.data.sprites.versions)

  // carotte = pokemon.data.sprites.versions

  // carotte.forEach((patate) =>{
  //   patate.forEach(pomme => {
  //     pomme = pomme[0]
  //   });
  // })

  pokemon.data.types.forEach((type) => {
    // console.log(type)
    let pokeType = document.createElement('div');
    pokeType.classList.add('pokemon_type');
    pokeType.classList.add('--' + type.type.name);
    pokeType.innerHTML =
      type.type.name[0].toUpperCase() + type.type.name.slice(1);
    typeContainer.appendChild(pokeType);
    pokeWrapper.classList.add(type.type.name);
  })
  ;



  // pokemon.data.sprites.versions.forEach((type) => {
  //   let pokeGen = document.createElement('p');
  //   pokeGen.innerHTML =
  //     type.generations[0].toUpperCase() + type.generations.slice(1);
  //   typeContainer.appendChild(pokeGen);
  //   pokeWrapper.classList.add(type.generations);
  // })

  pokedexContainer.appendChild(pokeWrapper);
}

getPoke();


// filter ///////

let filterContainer = document.querySelector('.filter_container');

const urlFilter = 'https://pokeapi.co/api/v2/type';

function getFilter() {
  fetch(urlFilter)
    .then((res) => res.json())
    .then(async (data) => {
      // console.log(data)
      filters = data.results;
      // console.log(filters)

      filters.forEach((filter) => {
        let poke_filter = document.createElement('div');
        poke_filter.classList.add('poke_filter');

        let filters = document.createElement('div');
        filters.classList.add('filters');

        let pixel_button = document.createElement('button');
        pixel_button.classList.add('pixel_button', 'type_button' , `--${filter.name}`);
        pixel_button.innerHTML = filter.name;

        filters.appendChild(pixel_button);
        poke_filter.appendChild(filters);
        filterContainer.appendChild(poke_filter);

        pixel_button.addEventListener('click', () => {
          pokedexWrapper.className = filter.name;
          
          pokedexContainer.classList.remove('none');
          const divPokeByDefault = document.getElementById('pokedex');
          divPokeByDefault.classList.add('none');
        });
      });
    });

  // .then(function () {
  //   let typeButton = document.querySelectorAll('.type_button');

  //   typeButton.forEach((bouton) => {
  //     bouton.addEventListener('click', (e) => {
  //       let type_filtered = bouton.innerHTML;
  //       filterPoke(pokemons_data, type_filtered);
  //       //   for (const pokemonTest of pokemons_data){
  //       //     console.log('patate', pokemonTest)

  //       // }
  //     });
  //   });
  // });
}

getFilter();


////// filter generation 

let filterGen = document.querySelector('.filter_gen_container');
const urlGen = ('https://pokeapi.co/api/v2/generation');


function getGen() {
  fetch(urlGen)
    .then((res) => res.json())
    .then(async (data) => {
      // console.log(data)
      generations = data.results;
      // console.log(gen)

      generations.forEach((theGen) => {
        let poke_filter = document.createElement('div');
        poke_filter.classList.add('poke_filter');

        let gen = document.createElement('div');
        gen.classList.add('gen');

        let pixel_button = document.createElement('button');
        pixel_button.classList.add('pixel_button', 'gen_button' , `--${theGen.name}`);
        pixel_button.innerHTML = theGen.name;

        gen.appendChild(pixel_button);
        poke_filter.appendChild(gen);
        filterGen.appendChild(poke_filter);

        pixel_button.addEventListener('click', () => {
          pokedexWrapper.className = theGen.name;
        });
      });
    });
}

getGen()


///video home page
let videoHome = document.querySelector('#videoBack');
let videoButton = document.querySelector('#videoButton');

function pausing() {
  if (videoHome.paused) {
    videoHome.play();
    videoButton.innerHTML = 'Pause the video';
  } else {
    videoHome.pause();
    videoButton.innerHTML = 'Play the video';
  }
}

// document.querySelector('.loader').style.display="block";

// let seconds = 10;

// let countdown = setInterval(function(){
//   seconds--;
//   if(seconds<=0){
//     clearInterval(countdown);
//     document.querySelector('.loader').style.display="none";
//   }
// })

// function filteredDisplay(pokeList){
//   pokedexContainer.innerHTML = "";

//   pokeList.forEach(pokemon => {
//       renderPokemon(pokemon)
//       return
//     }
//   )
// }

// function filterPoke(array, type) {
//   pokedexContainer.innerHTML = '';

//   array = Object.values(array).filter(
//     (pokemon) => pokemon.types[0].type.name === type
//   );

//   array.forEach((pokemon) => {
//     renderPokemon(pokemon);
//   });

//   return array;
// }

// function filterChange(){
//   console.log('AAAAA')

//   pokedexContainer.innerHTML = "";

//   // typeButton.forEach((e)=> {
//   //   console.log(filter.srcElement.InnerText)
//   // })

// }
