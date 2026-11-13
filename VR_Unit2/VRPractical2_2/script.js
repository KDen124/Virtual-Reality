window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  
  snowman = new Snowman(-5,0);
  loop();
})


function spin(){
    this.a += this.da;
    this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
}
function loop(){
  snowman.spin();
  window.requestAnimationFrame( loop );
}