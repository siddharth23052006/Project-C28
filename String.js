class String {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 20
        }
       this.string = Constraint.create(options);
       World.add(world, this.string);
    }
    fly(){
        this.string.bodyA = null;
    }

    display(){
        push();
        if (this.string.bodyA != null){
            var posA = this.string.bodyA.position;
            var posB = this.string.pointB;
            strokeWeight(2);
            line(posA.x,posA.y,posB.x,posB.y);
        }
        pop();
    }
}