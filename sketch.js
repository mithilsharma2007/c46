var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsTop1Img
var obsTopGroup
var obsTop2Img
function preload(){
bgImg = loadImage("assets/bg.png")
obsTop1Img=loadImage("assets/obsTop1.png")
obsTop2Img=loadImage("assets/obsTop2.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas (600,600);
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
obsTopGroup = new Group ();



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
           spawnobstacles();
           spawnobstaclesBird();
   
        drawSprites();
        
} 
function spawnobstacles(){
  if (frameCount % 60 === 0) {
    var obsTop1 = createSprite(600,120,40,10);
    obsTop1.y = Math.round(random(80,120));
    obsTop1.addImage(obsTop1Img);
    obsTop1.scale = 0.1;
    obsTop1.velocityX = -3;
    
     //assign lifetime to the variable
    obsTop1.lifetime = 200;
    
    //adjust the depth
    obsTop1.depth = balloon.depth;
    balloon.depth = balloon.depth + 1;
    
    //add each cloud to the group
    obsTopGroup.add(obsTop1);
  }
}
function spawnobstaclesBird(){
  if (frameCount % 120 === 0) {
    var obsTop2 = createSprite(600,120,40,10);
    obsTop2.y = Math.round(random(80,120));
    obsTop2.addImage(obsTop2Img);
    obsTop2.scale = 0.1;
    obsTop2.velocityX = -2;
    
     //assign lifetime to the variable
    obsTop2.lifetime = 300;
    
    //adjust the depth
    obsTop2.depth = balloon.depth;
    balloon.depth = balloon.depth + 1;
    
    //add each cloud to the group
    obsTopGroup.add(obsTop2);
  }
}