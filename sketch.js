
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boyImg,treeImg;
var mangoBodyPosition,stoneBodyPosition;

function preload()
{
  boyImg = loadImage("t/boy.png");
  treeImg = loadImage("t/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	ground = new Ground(600,height,1200,20);

	stone = new Stone(150,500,50,50);

	m1 = new Mango(450,300,50,50);
	m2 = new Mango(500,400,30,30);
	m3 = new Mango(600,350,50,50);
	m4 = new Mango(550,300,50,50);
	m5 = new Mango(680,350,30,30);
	m6 = new Mango(690,390,50,50);
	m7 = new Mango(610,380,30,30);
	m8 = new Mango(660,330,50,50);

	sling = new Sling(stone.body,{'x':250, 'y':600});

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  ground.display();

  
  

  sling.display(); 
  
  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  detectCollision(stone,m8);


 image(boyImg,200,550,200,200);
 image(treeImg,300,200,500,500);

 stone.display();


  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();


  
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{'x': mouseX, 'y': mouseY});
}

function mouseReleased(){
    sling.fly();
}

function detectCollision(stone,m1){

mangoBodyPosition = m1.body.position;
stoneBodyPosition = stone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance<=m1.r+stone.r)
{
	Matter.Body.setStatic(m1.body,false);
}


}



