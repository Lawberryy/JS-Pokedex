    /*let zoom = 0.5;

    const ZOOM_SPEED = 0.1;
    
    document.addEventListener("wheel", function(e) {  
        
        if(e.deltaY > 0){    
            map.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
        }else{    
            map.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }
        
    
    });*/


    // TAB MAP 

    function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
    
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

      }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }

  




    




    




