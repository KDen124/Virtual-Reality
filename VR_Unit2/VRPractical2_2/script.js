window.addEventListener("DOMContentLoaded",function() {



  loop();
})

function loop(){
  for (let rocket of rockets){
    rocket.launch();
  }

  for (let ufo of ufos){
    ufo.invade();
  }
   
  setTimeout(loop, 100);
}
