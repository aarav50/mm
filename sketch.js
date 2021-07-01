const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var a,a1a,a2,a3
var n
var b
function preload() {
  n=loadImage("snow1.jpg")
}
function setup() {
  
  engine = Engine.create();
  world = engine.world;
  createCanvas(800, 400);
  a = new snowy(random(1,800), 100)
  a1 = new snowy(random(1,800), 200)
  a2= new snowy(random(1,800), 300)
  a3 = new snowy(random(1,800), 400)
}

function draw() {
  background(n);

  Engine.update(engine);
  
  
  a.display()
  a1.display()
  a2.display()
  a3.display()
  //drawSprites();
}