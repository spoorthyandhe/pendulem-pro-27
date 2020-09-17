
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5,bob;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofobject=new Roof(400,200,600,20);

bobDiameter=40;

startbobPositionX=width/2;
startbobPositionY=height/4+500;

bob1=new Bob(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);
bob2=new Bob(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter);
bob3=new Bob(startbobPositionX,startbobPositionY,bobDiameter);
bob4=new Bob(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter);
bob5=new Bob(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter);

rope1=new Rope(bob1.body,roofobject.body,-bobDiameter*5,0);
rope2=new Rope(bob2.body,roofobject.body,-bobDiameter*4,0);
rope3=new Rope(bob3.body,roofobject.body,-bobDiameter*3,0);
rope4=new Rope(bob4.body,roofobject.body,-bobDiameter*2,0);
rope5=new Rope(bob5.body,roofobject.body,-bobDiameter*1,0);

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

roofobject.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function KeyPressed(){

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})

}

