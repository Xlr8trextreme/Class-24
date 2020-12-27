const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,530,70,70);
    box2 = new Box(1000,530,70,70);
    box3 = new Box(800,430,70,70);
    box4 = new Box(1000,430,70,70);
    pig1= new Pig(900,530);
    log1 = new Log(900,500,300,PI/2);
    ground = new Ground(width/2,height-10,width,10)
    pig2= new Pig(900,430);
    log2 = new Log(900,400,300,PI/2);
    box5 = new Box(900,380,70,70);
    log3 = new Log(950,380,150,-PI/7)
    log4 = new Log(850,380,150,PI/7)
    bird = new Bird(400,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}