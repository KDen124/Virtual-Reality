let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [], ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for (let i = 0; i < 100; i++){
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let y = rnd(0,2);
    let speed = rnd(1,5) / 75;
    let rocket = new Rocket(x,y,z, speed);
    rockets.push(rocket);

  }
  
  for(let i = 0; i < 100; i++){
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let y = rnd(10,200);
    let speed = rnd(1,5) / 75;
    let ufo = new Ufo(x,y,z, speed);
    ufos.push(ufo);

  }




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
