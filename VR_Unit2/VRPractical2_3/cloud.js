class Cloud {
  constructor(x, y, z){
  

    this.obj = document.createElement("a-entity");
    
    let sphere1 = document.createElement("a-sphere");
    sphere1.setAttribute("color","white");
    sphere1.setAttribute("radius","2");
    this.obj.append( sphere1 );

    let sphere2 = document.createElement("a-sphere");
    sphere2.setAttribute("color","white");
    sphere2.setAttribute("radius","2");
    sphere2.setAttribute("position","2 0 0");
    this.obj.append( sphere2 );

    let sphere3 = document.createElement("a-sphere");
    sphere3.setAttribute("color","white");
    sphere3.setAttribute("radius","2");
    sphere3.setAttribute("position","-2 0 0");
    this.obj.append( sphere3 );

    let sphere4 = document.createElement("a-sphere");
    sphere4.setAttribute("color","white");
    sphere4.setAttribute("radius","2");
    sphere4.setAttribute("position","0 0 2");
    this.obj.append( sphere4 );

    let sphere5 = document.createElement("a-sphere");
    sphere5.setAttribute("color","white");
    sphere5.setAttribute("radius","2");
    sphere5.setAttribute("position","0 -2 1");
    this.obj.append( sphere5 );


    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj );
}
}