class Ufo{
  constructor(x,y,z,speed){

    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = speed;
    this.obj = document.createElement("a-entity");


    
    
    let position = 0;
    let saucer = document.createElement("a-cylinder");
    saucer.setAttribute("color", "purple");
    saucer.setAttribute("position",{x:0,y:position,z:0});
    saucer.setAttribute("radius", 5);
    saucer.setAttribute("height", 2.5);
    position += 0.5;
    this.obj.append(saucer);

    let cockpit = document.createElement("a-sphere");
    cockpit.setAttribute("color", "green");
    cockpit.setAttribute("position",{x:0,y:position,z:0});
    cockpit.setAttribute("radius", 2);
    position += 0.5;
    this.obj.append(cockpit);
    
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    
    scene.append( this.obj );
  }

  invade(){
    this.y -= this.speed;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if (this.y < 1){
      this.y = 1;
    }
  }
}