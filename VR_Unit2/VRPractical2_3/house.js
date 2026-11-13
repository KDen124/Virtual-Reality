class House {
  constructor(x, y, z) {


    this.obj = document.createElement("a-entity");

    let base = document.createElement("a-box");
    base.setAttribute("color", "brown");
    base.setAttribute("width", 4);
    base.setAttribute("height", 2);
    base.setAttribute("depth", 4);
    base.setAttribute("position", { x: 0, y: 1, z: 0 });
    this.obj.append( base );

    let roof = document.createElement("a-cone");
    roof.setAttribute("color", "red");
    roof.setAttribute("radius-bottom", 3);
    roof.setAttribute("radius-top", 0);
    roof.setAttribute("height", 2);
    roof.setAttribute("position", { x: 0, y: 3, z: 0 });
    this.obj.append( roof );

    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
  }

}
