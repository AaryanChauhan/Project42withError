const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var umbrella1;
var thunder,thunder1,thunder2,thunder3,thunder4;
var maxDrops = 100;
var drops=[];
var thunderFrameCount = 0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(400,700);

   engine = Engine.create();
	world = engine.world;

   umbrella1 = new umbrella(200,500);

   if(frameCount%100===0){
      for(var i; i<maxDrops; i++){
         drops.push(new drop(random(0,400),random(0,400)));
      }
   }
    
}

function draw(){

   Engine.update(engine);

   background(0);

   var rand = Math.round(random(1,4));

   if(frameCount%50===0){
      thunderFrameCount = frameCount;
      thunder = createSprite(random(10,370),random(10,30),10,10);

      switch(rand){
         case 1: thunder.addImage(thunder1);
         break;
         case 2: thunder.addImage(thunder2);
         break;
         case 3: thunder.addImage(thunder3);
         break;
         case 4: thunder.addImage(thunder4);
         break;
         default: 
         break;
      }
      thunder.scale = random(0.3,0.6);
   }
    umbrella1.display();

    for(var i = 0; i<maxDrops; i++){
      drops[i].showDrop();
      drops[i].updateY();
    }

    drawSprites();
}   

