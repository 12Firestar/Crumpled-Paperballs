
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide,rightSide;

function preload(){
	
}

function setup() {
	createCanvas(1000, 300);

	rectMode(CENTER)
	ellipseMode(RADIUS)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		var ball_options ={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		} 	
		ball = Bodies.circle(200,100,20,ball_options)
		World.add(world,ball)

		groundObj = new Ground (width/2,270,width,20)
		leftSide = new Ground (600,200,20,120)
		rightSide = new Ground (700,200,20,120)

		World.add(world,groundObj)
		World.add(world,leftSide)
		World.add(world,groundObj)

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)

  background(0);
  
groundObj.display()
leftSide.display()
rightSide.display()

  ellipse(ball.position.x, ball.position.y,20)

  drawSprites(); 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:-50})
	}
}



