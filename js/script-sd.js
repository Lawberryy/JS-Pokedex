
// const pokedex = document.getElementById('pokedex');
const listPokemon = document.getElementById('list-pokemons');
const divPokemonCards = document.getElementById('pokemon-cards');

const btnShiny = document.getElementById('btn-shiny');

let nbPokemon = 10;


const GetPokemon = () => {
    const promises = []; // les arrays se rempliront au fur et à mesure
    for (let i = 1; i <= nbPokemon; i++) {
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
            <h2 class="">${poke.id}. ${poke.name}</h2>
            <p class="">Type: ${poke.type}</p>
            <!-- <p class="">Attacks: ${poke.move}</p> -->
            <span>Add to the team:</span>
            <select name="" id="select-team">
                <option value="team1">Team 1</option>
                <option value="team2">Team 2</option>
            </select>
        </div>
    `
        )
        .join(''); // permet d'enlever' la virgule qui sépare chaque card
    divPokemonCards.innerHTML = pokemonCardHTML;
};

// GetPokemon();


// ------------ display shiny function ----------------
const DivShiny = document.getElementById('div-shiny');

function displayShiny(pokemon) {

    const shinyPokemonCards = pokemon
        .map(
            (shiny) => `
        <div class="shiny">
            <img src="${shiny.image_shiny}"</img>
            <h2 class="">${shiny.id}. ${shiny.name} shiny</h2>
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
    }
// --------------- ---------------------

// -------- ajout de pokemon selon l'input.value de l'utlisateur, 
// en plus des 10 premiers par défaut --------
const btnMorePokemon = document.getElementById('seeMorePokemon');
const inputHowMany = document.querySelector('.howManyPokemon');


function seeMorePokemon () {
    var valueInput = document.getElementById('in').value;
    console.log(valueInput);

    nbPokemon = Number(nbPokemon) + Number(valueInput);
    console.log(nbPokemon);
}

btnMorePokemon.addEventListener('click', p => {
    seeMorePokemon();

    const textBtn = document.getElementById('textBtn');
    if (textBtn.innerText == "Let's begin!"){
        textBtn.innerText = "See more pokemon!";
        } 

    btnShiny.classList.remove('none');

    inputHowMany.classList.remove('none');
})

// ça, ça n'affiche que 20 pokemon en plus à chaque click, mais ça fonctionne mieux

// function seeMorePokemon () {
//     var valueInput = document.getElementById('in').value;
//     console.log(valueInput);

//     nbPokemon = nbPokemon + 20;
//     console.log(nbPokemon);
// }


// event au keyboard : play audio file

let btnPlay = document.getElementById("play");
let audio = new Audio("media/lake-theme.mp3");

function playMusic(event) {
    if (event.code == 'Enter') {
        audio.play()
    }
    if (event.code == 'Space') {
        audio.pause()
    }
}
document.body.addEventListener("keydown", playMusic);