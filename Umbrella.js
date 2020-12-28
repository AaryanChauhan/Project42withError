class umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.umbrella = Bodies.circle(this.x,this.y,50,options);
        this.radius = 50;
        World.add(world,this.umbrella);
        this.image = loadImage("images/Walking Frame/walking_1.png")
    }
    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300);
    }
}