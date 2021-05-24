/*
PHYSICS ENGINE

angry bird. 
ball -- circle. bounciness of the ball will be different for tennis ball, plastic ball.
Hence, we are going to use the predefine shapes(rect, ellipse)
Matter.World, Matter.Bodies, Matter.Engine
STEP:
you have to do only once
1. Create a physics engine
2. Add engine to the physics world
3. Engine.update(eng);

4. Bodies.rectangle(x,y,width, height)
5. Add that body to the world

var -- will vary from time to time.
const -- will not change at any cost.
namespacing -- nickname to the biggest name using const
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {

  //creating all the things should be done in setup
  createCanvas(800,400);

  eng = Engine.create();
  world = eng.world;

  var options = {isStatic:true
  }

  box  = Bodies.rectangle(400,350,800,30,options);
  World.add(world, box);

  console.log(box);

var options={restitution:3}
  ball=Bodies.rectangle(200,200,40,40,options)
  World.add(world,ball)
}

function draw() {
  background("pink");  
 
  Engine.update(eng);
  rectMode(CENTER);
  rect(box.position.x, box.position.y, 800,30);

  rect(ball.position.x,ball.position.y,40,40);
  
}