var Boy, BoyImg;
var Dog, DogImg;
var bgImg, bg;
var Invisibleground;
var log, logImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload(){
BoyImg= loadImage("Boy running.jpg")
DogImg= loadImage("Dog.jpg")
bgImg= loadImage("bg.jpg")
logImg= loadImage("Log.jpg")
}

function setup() {
 createCanvas(600,600);

 bg=createSprite(300,300);
 bg.addImage(bgImg);
 bg.scale=2.3;

 bg.x=bg.width;
 
 Boy=createSprite(150,470,50,50);
 Boy.addImage("Boy", BoyImg);
 Boy.scale=0.3;
 Boy.setCollider("rectangle",0,0,Boy.width,Boy.height);
 Boy.debug = true;

 var log = createSprite(350,490,50,50);
    log.addImage("log", logImg);
    log.velocityX=-5
    log.scale=0.2
    log.lifetime =60;
 log.setCollider("rectangle",0,0,log.width,log.height);
 log.debug = true;

Invisibleground=createSprite(300,520,600,10);
Invisibleground.visible=false;

 Dog=createSprite(40,480,50,50);
 Dog.addImage("Dog", DogImg);
 Dog.scale=0.2
 Dog.setCollider("rectangle",0,0,Dog.width,Dog.height);
 Dog.debug = true;
}

function draw() {
 background(200);
 bg.velocityX=-3;

 if (gameState===PLAY){
 if(keyDown("space")){
    Boy.velocityY=-12;
  }



  if (frameCount % 60 === 0){
    var log = createSprite(350,490,50,50);
    log.addImage("log", logImg);
    log.velocityX=-5
    log.scale=0.2
    log.lifetime =60;
  }
    
  if(bg.x<300){
    bg.x=bg.width;
  }

  if(log.isTouching(Boy)){
    gameState = END;
  }
  Boy.velocityY=Boy.velocityY+0.8;
 
  Boy.collide(Invisibleground);
}


 drawSprites()
}