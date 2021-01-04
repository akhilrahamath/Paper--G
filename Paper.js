class Paper{
    constructor(x,y,r){
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.0,
       }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body=Bodies.circle(this.x,this.y,this.r/2,options)
       World.add(world,this.body);
    }

    display(){
        var paperpos=this.body.position;

        strokeWeight(3);
        fill(255,0,255);
        ellipseMode(RADIUS);
        ellipse(paperpos.x,paperpos.y,this.r);        
    }
}