class mech{
	constructor (x,y,z);



        this.obj=mechTemplate.cloneNode(True);
        this.obj.setAttribute("position", { x:x, y:y, z:z});
        scene.append(this.obj);
}
