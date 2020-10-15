const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;

function preload(){
  polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  //Creating Canvas and engine
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(200,600,30);
  World.add(world, polygon);

  stand = new Stand(605,350,183,15);

  //base level blocks
  block1 = new Ground(545,335,20,20);
  block2 = new Ground(565,335,20,20);
  block3 = new Ground(585,335,20,20);
  block4 = new Ground(605,335,20,20);
  block5 = new Ground(625,335,20,20);
  block6 = new Ground(645,335,20,20);
  block7 = new Ground(665,335,20,20);
  // level 2 blocks
  block8 = new Ground(565,315,20,20);
  block9 = new Ground(585,315,20,20); 
  block10 = new Ground(605,315,20,20);
  block11 = new Ground(625,315,20,20); 
  block12 = new Ground(645,315,20,20);
  //level 3 blocks
  block13 = new Ground(585,295,20,20);
  block14 = new Ground(605,295,20,20);
  block15 = new Ground(625,295,20,20);
  //level 4 blocks 
  block16 = new Ground(605,275,20,20);

  sling1 = new Slingshot(this.polygon,{x:170, y:350});

  Engine.run(engine);

}

function draw() {
  background(0);  
  Engine.update(engine);

  textSize(20);
  fill("lightgreen");
  text("Drag the hexagonal stone and release it to launch it towards the blocks!",65,30);

  strokeWeight(2);
  stroke(15)
  fill("lightpink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("turquoise");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("lightpink");
  block13.display();
  block14.display();
  block15.display();

  fill("turquoise");
  block16.display();

  fill("white");
  stand.display();

  sling1.display();
  

  imageMode(CENTER)
  image(polygonImage, polygon.position.x, polygon.position.y, 30, 30);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}