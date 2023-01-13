let team = document.querySelector('#teamname')
let result = document.querySelector('#teams')


/*function showpoke(){
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let pokeapi = data.results;
      console.log(pokeapi)
      pokeapi.forEach(p => {
        let option = document.createElement('option')
        option.innerHTML = p.name  ;
        idpoke.appendChild(option)
      });        
      
    })
    .catch(function(error) {
      console.log(error);
    });
}

showpoke() */


let datateam = []


function add(){

  if(team == "" ){

    let h3 = document.createElement('h3')
    h3.innerHTML = "Veuillez remplir le champ"
    team.appendChild(h3)


  }else{


    datateam.push(team)
    console.log(team)
    let h1 = document.createElement('h1')
    h1.innerHTML = "Bienvenue" + datateam
    team.appendChild(h1)

  }
  
}
add()

