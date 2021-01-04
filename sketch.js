
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dp1,dp2,dp3;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,500,20);
	dp1 = new Dustbin(910,600,20,140);
	dp2 = new Dustbin(1090,600,20,140);
  dp3 = new Dustbin(1000,660,200,20);
  ground = new Ground(400,680,1700,20);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  ground.display();
  paper.display();
  dp1.display();
  dp2.display();
  dp3.display();

}


function keyPressed(){
 if(keyCode === UP_ARROW){
   Body.applyForce(paper.body,paper.body.position,{x:15,y:-19});	 
 }	
}