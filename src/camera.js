class Camera{

    //constructor
    constructor(){
        this.fov = 60;
        this.eye = new Vector3([0,0,0]);
        this.at  = new Vector3([0,0,-1]);
        this.up  = new Vector3([0,1,0]);
        this.viewMat = new Matrix4();
        this.viewMat.setLookAt(
            this.eye.elements[0], this.eye.elements[1],  this.eye.elements[2],
            this.at.elements[0],  this.at.elements[1],   this.at.elements[2],
            this.up.elements[0],  this.up.elements[1],   this.up.elements[2]); 
        this.projMat = new Matrix4();
        this.projMat.setPerspective(50, canvas.width/canvas.height, 0.1, 1000);
     }

     //forward
     
}