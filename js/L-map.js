    const url = 'https://pokeapi.co/api/v2/pal-park-area/';
    const url1 = 'https://pokeapi.co/api/v2/pal-park-area/1';
    const map = document.querySelector("#map");
    let villes = document.querySelector('#villes')
    let pokevilles = document.querySelector('#pokémons')
    let zoom = 1;

    const ZOOM_SPEED = 0.1;
    
    document.addEventListener("wheel", function(e) {  
        
        if(e.deltaY > 0){    
            map.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
        }else{    
            map.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }
        
    
    });

  
function Showregion(){

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let pokeapi = data.results;
      console.log(pokeapi)
      pokeapi.forEach(p => {
        let li = document.createElement('li')
        li.innerHTML = "<button onclick='pokevilles()' >" + p.name + "</button>" ;
        villes.appendChild(li)
      });        
      
    })
    .catch(function(error) {
      console.log(error);
    });

}

Showregion()


function pokeville(){

    fetch(url1)
    .then((resp) => resp.json())
    .then(function(data) {
      let pokeapi = data.pokemon_encounters;
      pokeapi.forEach(p => {
        let li = document.createElement('li')
        let button = document.createElement('button')
        li.innerHTML = "<p class='pokeregions'>" + p.pokemon_species.name + "</p>" ;
        pokevilles.appendChild(li)
      });        
      
    })
    .catch(function(error) {
      console.log(error);
    });

}

pokeville() 
    




    




