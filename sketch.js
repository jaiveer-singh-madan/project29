const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var block1, block2, block3, block4, block5,block6;
var polygon;
var slingshot;
var polygonImg;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    stand=new Ground(400,500,800,10);
    block1=new Box(400,400,50,50,PI/2);
    block2=new Box(450,400,50,50,PI/2);
    block3=new Box(500,400,50,50,PI/2);
    block4=new Box(425,300,50,50,PI/2);
    block5=new Box(475,300,50,50,PI/2);
    block6=new Box(450,200,50,50,PI/2);

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot= new SlingShot(this.polygon,{x:100, y:200});

}

function draw(){
    Engine.update(engine);
    strokeWeight(4);
    background(255,255,255)

    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}