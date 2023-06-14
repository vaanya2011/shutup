var images=["Teacher's health.png", "Teacher's health (1).png"];

var i= 0;
function next() { 
   if(i == 2)
     {
       i=0;
     }

    
      document.getElementById("main1").src = images[i]  ;
      i++;
     
    //add images[i] to add new image link to image component.
    
 
}


function cure(){
  window.location.replace('cure.html');
}
function music(){
  window.location.replace('music.html');
}
function exercise(){
  window.location.replace('exercise.html');
}

function Throat(){
  window.location.replace('throat.html');
}
function back(){
  window.location.replace('index.html');
}

