const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var engine
var world
var base1
var base2
var score = 0


function preload() {
 polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground(600,400,1200,20);
    base1 = new Ground(400, 250, 250, 20);
    base2 = new Ground(800, 200,300,20);

 box1 = new Box(310,225,30,40);
 box2 = new Box(340,225,30,40);
 box3 = new Box(370,225,30,40);
 box4 = new Box(400,225,30,40);
 box5 = new Box(430,225,30,40);
 box6 = new Box(460,225,30,40);
 box7 = new Box(490,225,30,40);

 box8 = new Box(340,185,30,40);
 box9 = new Box(370,185,30,40);
 box10 = new Box(400,185,30,40);
 box11 = new Box(430,185,30,40);
 box12 = new Box(460,185,30,40);

 box13 = new Box(370,145,30,40);
 box14 = new Box(400,145,30,40);
 box15 = new Box(430,145,30,40);

 box16 = new Box(400,105,30,40);


 box17 = new Box(740,175,30,40);
 box18 = new Box(770,175,30,40);
 box19 = new Box(800,175,30,40);
 box20 = new Box(830,175,30,40);
 box21 = new Box(860,175,30,40);
 box22 = new Box(890,175,30,40);

 box24 = new Box(770,135,30,40);
 box25 = new Box(800,135,30,40);
 box26 = new Box(830,135,30,40);
 box27 = new Box(860,135,30,40);

 box28 = new Box(800,95,30,40);
 box29 = new Box(830,95,30,40);

 Polygon = Bodies.circle(50,200,20);
 World.add(world, Polygon);
 slingshot1 = new Slingshot(this.Polygon,{x:100,y:200})
   
}

function draw(){
    background("blue");

    ground.display();
    base1.display();
    base2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();

    textSize(50)
    text('score:' + score, 900, 50)

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();

    imageMode(CENTER);
    image(polygonImage,Polygon.position.x,Polygon.position.y,40,40);

    slingshot1.display();

}


function mouseDragged(){

         Matter.Body.setPosition(this.Polygon, {x: mouseX , y: mouseY});

 }
 
 function mouseReleased(){
    slingshot1.fly();
  
}

function keyPressed(){
    if(keyCode == 32){
        slingshot1.attach(this.Polygon)
    }
}