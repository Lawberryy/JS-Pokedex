    const url1 = 'https://pokeapi.co/api/v2/pal-park-area/1';
    const url2 = 'https://pokeapi.co/api/v2/pal-park-area/2';
    const url3 = 'https://pokeapi.co/api/v2/pal-park-area/3';
    const url4 = 'https://pokeapi.co/api/v2/pal-park-area/4';

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
    let regions = [
          "Forest",
          "field",
          "mountain",
          "pond",
          "sea",
    ]  
        let li = document.createElement('li')
        let li1 = document.createElement('li')
        let li2 = document.createElement('li')
        let li3 = document.createElement('li')

        li.innerHTML = "<button onclick='pokeville()' >" + regions[0] + "</button>" ;
        li1.innerHTML = "<button onclick='pokeville1()' >" + regions[1] + "</button>" ;
        li2.innerHTML = "<button onclick='pokeville2()' >" + regions[2] + "</button>" ;
        li3.innerHTML = "<button onclick='pokeville3()' >" + regions[3] + "</button>" ;

        villes.appendChild(li)
        villes.appendChild(li1)
        villes.appendChild(li2)
        villes.appendChild(li3)

        pokevilles.style.display = "none"
      }       
      


Showregion()


function pokeville(){

    fetch(url1)
    .then((resp) => resp.json())
    .then(function(data) {
      let pokeapi = data.pokemon_encounters;
      pokeapi.forEach(p => {
        let li = document.createElement('div')
        li.innerHTML = "<p>" + p.pokemon_species.name + "</p>" ;
        pokevilles.style.display = "grid"
        pokevilles.appendChild(li)

      });        
      
    })
    .catch(function(error) {
      console.log(error);
    });

}


function pokeville1(){

  fetch(url2)
  .then((resp) => resp.json())
  .then(function(data) {
    let pokeapi = data.pokemon_encounters;
    pokeapi.forEach(p => {
      let li = document.createElement('div')
      li.innerHTML = "<p>" + p.pokemon_species.name + "</p>" ;
      pokevilles.style.display = "grid"
      pokevilles.appendChild(li)

    });        
    
  })
  .catch(function(error) {
    console.log(error);
  });

}

function pokeville2(){

  fetch(url3)
  .then((resp) => resp.json())
  .then(function(data) {
    let pokeapi = data.pokemon_encounters;
    pokeapi.forEach(p => {
      let li = document.createElement('div')
      li.innerHTML = "<p>" + p.pokemon_species.name + "</p>" ;
      pokevilles.style.display = "grid"
      pokevilles.appendChild(li)

    });        
    
  })
  .catch(function(error) {
    console.log(error);
  });

}


function pokeville3(){

  fetch(url3)
  .then((resp) => resp.json())
  .then(function(data) {
    let pokeapi = data.pokemon_encounters;
    pokeapi.forEach(p => {
      let li = document.createElement('div')
      li.innerHTML = "<p>" + p.pokemon_species.name + "</p>" ;
      pokevilles.style.display = "grid"
      pokevilles.appendChild(li)

    });        
    
  })
  .catch(function(error) {
    console.log(error);
  });

}

    




    




