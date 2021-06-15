class launcher{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:10
        }
        this.body=Constraint.create(options)
        this.pointB=pointB
        World.add(world, this.body);
      }

      fly() {
          this.body.bodyA=null
      }

      attach(body){
        this.body.bodyA=body
      }
      
      display(){
        if(this.body.bodyA){  
        strokeWeight(5)
    line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)       
}
}
}