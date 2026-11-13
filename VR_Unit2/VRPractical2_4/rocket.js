class Rocket{
  constructor(x,y,z,speed){

    this.x = x;
    this.y = y;
    this.z = z;
    this.speed = speed;
    this.obj = document.createElement("a-entity");
    
    
    let position = 0;
    
    let base = document.createElement("a-cylinder");
    base.setAttribute("radius", 1);
    base.setAttribute("height", 3);
    base.setAttribute("position",{x:0,y:position,z:0});
    position += 1;
    this.obj.append(base);
    
    let nose = document.createElement("a-cone");
    nose.setAttribute("radius-bottom", 0.5);
    nose.setAttribute("radius-top", 1);
    nose.setAttribute("height", 3);
    nose.setAttribute("color", "red");
    nose.setAttribute("rotation",{x:180,y:0,z:0});
    nose.setAttribute("position",{x:0,y:position,z:0});
    position += 1;
    this.obj.append(nose);
    
    let butt = document.createElement("a-cone");
    butt.setAttribute("radius-bottom", 0.5);
    butt.setAttribute("radius-top", 1);
    butt.setAttribute("height", 1);
    butt.setAttribute("color", "orange");
    butt.setAttribute("rotation",{x:180,y:0,z:0});
    butt.setAttribute("position",{x:0,y:-position,z:0});
    position += 1;
    this.obj.append(butt);


    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append( this.obj );
  }

  launch(){
    this.y += this.speed;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})

  }
}