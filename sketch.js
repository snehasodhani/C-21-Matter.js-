//giving nicknames to avoid repeating
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var ground_options={
    //when using multiple names use comma
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  var ball_options={
    restitution:0.5
  }
  ball=Bodies.circle(200,100,40,ball_options);
  World.add(world,ball);
}

function draw() {
  background("blue");  
  Engine.update(engine);
 rectMode(CENTER);
 fill("pink");

 rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  fill("red")
 ellipse(ball.position.x,ball.position.y,40,40);
}