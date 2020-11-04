
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1, rect2, rect3;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.\

	var groundOptions = {
		isStatic: true
	}
	groundSprite=Bodies.rectangle(width/2, height-65, width,10, groundOptions);
	World.add(world,groundSprite);

    var rectOptions = {
		isStatic: true,
		friction: 0.5,
		density: 1,
		restitution: 0.8
	}
	rectSprite1 = Bodies.rectangle(750,480,20,100,rectOptions);
	rectSprite2 = Bodies.rectangle(950,480,20,100,rectOptions);
	rectSprite3 = Bodies.rectangle(850,520,220,20,rectOptions);
	World.add(world,rectSprite1);
	World.add(world,rectSprite2);
	World.add(world,rectSprite3);

	var options={
		isStatic:false,
		restitution:0.2,
		friction:0.3,
		density:1.4
	}
	paperObject = Bodies.circle(80,450,20,options);
	World.add(world,paperObject);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("yellow");
  rectMode(CENTER);
  rect(groundSprite.position.x,groundSprite.position.y,width,10);
  rect(rectSprite1.position.x, rectSprite1.position.y,20,100);
  rect(rectSprite2.position.x, rectSprite2.position.y,20,100);
  rect(rectSprite3.position.x, rectSprite3.position.y,220,20);

 ellipseMode(RADIUS);
 ellipse(paperObject.position.x,paperObject.position.y,20,20);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject,paperObject.position,{x:85,y:-85});
	}
}



