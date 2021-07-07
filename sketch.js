const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,Stone1,rubber1,iron1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,600,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(800,570);
    rubber1 = new Rubber(650,500,50);
    iron1 = new Iron(500,500);
        


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    rubber1.display();
    iron1.display();
    
    
 
}