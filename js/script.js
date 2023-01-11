const url = 'https://pokeapi.co/api/v2/pokemon/';
let idpoke = document.querySelector('#pokemon').value
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let pokeapi = data;
  return pokeapi.map(function(poke) {

    
  })
})
.catch(function(error) {
  console.log(error);
});