var helicopterIMG, helicopterSprite,border1Sprite , border2Sprite , border3Sprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	border1Sprite=createSprite(400,650,200,20);
	border1Sprite.shapeColor = "red"

	border2Sprite=createSprite(310,600,20,100);
	border2Sprite.shapeColor = "red"

	border3Sprite=createSprite(490,600,20,100);
	border3Sprite.shapeColor = "red"



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


    border1Body = Bodies.rectangle(400,650,200,20,{isStatic:true} );
 	World.add(world, border1Body);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
  
	border1Sprite.x = border1Body.position.x
	border1Sprite.y = border1Body.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW ) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
	
	
  }
  
}

