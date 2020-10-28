class Paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.6,
            friction:0.6,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r
        World.add(world,this.body);
    }
    display()
    {

        ellipseMode(RADIUS);
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,this.radius,20);
    }
}