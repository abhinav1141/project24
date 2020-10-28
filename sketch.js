
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dust1,dust2,dust3;
var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground=new Ground(400,670,800,10);
	 dust1=new Dustbin(446,619,15,100);
	 dust2=new Dustbin(593,660,280,15);
	 dust3=new Dustbin(736,619,15,100);
	 ball=new Paper(120,570,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
   dust1.display();
   dust2.display();
   dust3.display();
   ball.display();
}
function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85});
	}
}


