class Plinko{

    constructor(x, y){

        var options= {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.radius = 10;
    
        this.body = Bodies.circle(x,y,10,options);

        World.add(world, this.body);
    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        
        fill('white');
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}