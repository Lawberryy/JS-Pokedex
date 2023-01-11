const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
let idpoke = document.querySelector('#pokemon')

function showpoke(){
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let pokeapi = data.results;
      console.log(pokeapi)
      let option = document.createElement('option')
      pokeapi.forEach(p => {

        option.innerHTML = p.name;
        idpoke.appendChild(option)

        
      });
      
            
      
    })
    .catch(function(error) {
      console.log(error);
    });
}

showpoke()