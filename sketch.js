const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse

function setup() {
	createCanvas(800, 400);
    canvas= createCanvas(windowWidth / 2 , windowHeight / 1.5)
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse : canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world , mConstraint)
  
  //Create the Bodies Here.
pendulum1 = new Pendulum(300,300);
pendulum2 = new Pendulum(350,300);
pendulum3 = new Pendulum(400,300);
pendulum4 = new Pendulum(450,300);
pendulum5 = new Pendulum(500,300);
sling1 = new Sling(bob1.body,roof.body,-100,0);
sling2 = new Sling(bob2.body,roof.body,-50,0);
sling3 = new Sling(bob3.body,roof.body,0,0)
sling4 = new Sling(bob4.body,roof.body,50,0)
sling5 = new Sling(bob5.body,roof.body,100,0)

	//Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  background("lightgrey");
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.applyForce(pendulum1.body,pendulum1.position, {x: -20, y: 10});	
	}
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, {x: mouseX , y: mouseY});
}