// const base_URL = 'https://pokeapi.co/api/v2/pokemon';
// const first10Pokemon = '?limit=10';
// const API_URL = base_URL + first10Pokemon;

const pokedex = document.getElementById('pokedex');
const listPokemon = document.getElementById('list-pokemons');
const divPokemonCards = document.getElementById('pokemon-cards');

const btnShiny = document.getElementById('btn-shiny');


const GetPokemon = () => {
    const promises = []; // les arrays se rempliront au fur et à mesure
    for (let i = 1; i <= 10; i++) {
        // on récupère les données des 10 premiers pokemon pour l'affichage par défaut
        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(urlPokemon).then((res) => res.json()));
        // on push dans le tableau promises la data récupérée avec le fetch(urlPokemon)
    }
    Promise.all(promises).then((results) => {
        // on va créer une "map" avec les informations qui nous intéressent sur le pokemon
        const pokemon = results.map((result) => ({
            id: result.id,
            name: result.name,
            image: result.sprites['front_default'],
            image_shiny: result.sprites['front_shiny'],
            type: result.types.map((type) => type.type.name).join(', '),
            // le join sert à séparer les types, ici par une virgule
            move: result.moves.map((move) => move.move.name).join(', '),
        }));
        
        displayPokemon(pokemon);

        // event display shiny au clic
        btnShiny.addEventListener('click', p => {
            displayShiny(pokemon);
        })
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonCardHTML = pokemon
        .map(
            (poke) => `
        <div class="pokemonCard">
            <img class="" src="${poke.image}"/>
            <h2 class="">${poke.name}</h2>
            <p class="">Type: ${poke.type}</p>
            <!-- <p class="">Attacks: ${poke.move}</p> -->
            <!-- <button class="btn-shiny">Shiny</button> -->
            <!-- <div class="modalInfoPokemon">
                <img src="${poke.image_shiny}"</img>
            </div> -->
        </div>
    `
        )
        .join(''); // permet d'enlever' la virgule qui sépare chaque card
    divPokemonCards.innerHTML = pokemonCardHTML;
};

GetPokemon();


// ------------ display shiny function ----------------
const DivShiny = document.getElementById('div-shiny');

function displayShiny(pokemon) {

    const shinyPokemonCards = pokemon
        .map(
            (shiny) => `
        <div class="shiny">
            <img src="${shiny.image_shiny}"</img>
        </div>
    `
        )
        .join(''); // permet d'enlever' la virgule qui sépare chaque card
    DivShiny.innerHTML = shinyPokemonCards;
};

function hideShiny() {
    DivShiny.classList.toggle("none");
    //btnShiny.innerText = 'Hide shiny';

    if (btnShiny.innerText == "Show shiny"){
        btnShiny.innerText = "Hide shiny";
        } else if (btnShiny.innerText == "Hide shiny"){
        btnShiny.innerText = "Show shiny";
        } else {
        null
        }

    //if (btnShiny.style.backgroundColor ==)
}
// --------------- ---------------------