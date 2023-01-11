let container = document.querySelector('.container')
let url = ('https://pokeapi.co/api/v2/pokemon?limit=100')

function getPoke(){
    fetch(url)

    .then(r =>r.json())
    .then((d) =>  {

        let pokemons = d.results

        pokemons.forEach(poke => {
            console.log('Big bitch :', poke.name)
        })    
    });
}


getPoke()


let videoHome = document.getElementById("videoBack");
let videoButton = document.getElementById("videoButton");

function myFunction() {
  if (videoHome.paused) {
    videoHome.play();
    videoButton.innerHTML = "Pause the video";
  } else {
    videoHome.pause();
    videoButton.innerHTML = "Play the video";
  }
}