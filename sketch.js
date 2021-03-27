var egg,eggIMG

var basket,basketSafeZone,b1,b2,b3,b4,b5,b6,basketGroup,basketIMG

var bgSprite;
var bg2;
var gameState=0,score = 0
var canvas
var edge;
var bg1
var bg
var currentBasket = "b1";
var isCollided1 = false;
var initialBasket = true



function preload() {
  basketIMG = loadImage("basket.png");
  eggIMG = loadImage("egg1.png");
  bg1 = loadImage("bg1.png");
  bg2 = loadImage("bg2.png");
  bg = loadImage("bg.png");
}


function setup() {
  
  canvas = createCanvas(500,800);

  play = createButton("Play");
  play.position(200,600);
  basketGroup = createGroup();
  
  bgSprite = createSprite(250,400,500,800);
  bgSprite.scale = 1.3;
  bgSprite.addImage("bg1",bg);
  edge = createEdgeSprites();
  createBasket();
  egg = createSprite(400,700);
  egg.addImage("egg",eggIMG);
  
  egg.scale = 0.3  
}

function draw() {
  
  background(bg1);
  if(bgSprite.y>800){
    bgSprite.y = 400;
  }
  play.mousePressed(()=>{
    gameState = 1;
    play.style("visibility","hidden");
    bg1 = bg2;
    initialBasket = false
  })
  console.log(gameState) 
  if(gameState==1){
    
  b1.bounceOff(edge[0]);
  b2.bounceOff(edge[0]);
  b3.bounceOff(edge[0]);
  b4.bounceOff(edge[0]);
  b5.bounceOff(edge[0]);
  b6.bounceOff(edge[0]);

  
  
  b1.bounceOff(edge[1]);
  b2.bounceOff(edge[1]);
  b3.bounceOff(edge[1]);
  b4.bounceOff(edge[1]);
  b5.bounceOff(edge[1]);
  b6.bounceOff(edge[1]);

    drawSprites();

    egg.velocityY = egg.velocityY +0.1;
    
    if(egg.isTouching(b1)&& egg.velocityY>0 &&currentBasket =="b1"){
      egg.position.x = b1.position.x;
      egg.position.y = b1.position.y - 20;
      initialBasket = true;
      egg.VelocityY = 0;
      
    }
    if(egg.isTouching(b2)&& egg.velocityY>=0 &&currentBasket =="b2"){
      
      if(isCollided){
        
      score = score +1;
      isCollided1 =false
      bgSprite.velocityY = 0;
    }
      egg.position.x = b2.position.x;
      egg.position.y = b2.position.y - 20;
      for(var i = 0;i <basketGroup.length;i++){
        basketGroup.get([i]).velocityY = 3;
        if(b2.position.y>700){
          basketGroup.get([i]).velocityY = 0;
        }
      }
      
    }
    if(!egg.isTouching(b2)&&currentBasket=="b2"&&egg.velocityY>4){
      gameState = 2;
    }
 /////////////////
 if(egg.isTouching(b3)&& egg.velocityY>=0 &&currentBasket =="b3"){
  if(isCollided){
  score = score +1;
  isCollided1 =false
  bgSprite.velocityY = 0;
}
  egg.position.x = b3.position.x;
  egg.position.y = b3.position.y - 20;
  for(var i = 0;i <basketGroup.length;i++){
    basketGroup.get([i]).velocityY = 3;
    if(b3.position.y>700){
      basketGroup.get([i]).velocityY = 0;
    }
  }
  
}
if(!egg.isTouching(b3)&&currentBasket=="b3"&&egg.velocityY>2){
  gameState = 2;
}
    
     
  ////////////////////////////////////////
  if(egg.isTouching(b4)&& egg.velocityY>0 &&currentBasket =="b4"){
    if(isCollided){
    score = score +1;
    isCollided1 =false
    bgSprite.velocityY = 0;
  }
    egg.position.x = b4.position.x;
    egg.position.y = b4.position.y - 20;
    for(var i = 0;i <basketGroup.length;i++){
      basketGroup.get([i]).velocityY = 3;
      if(b4.position.y>700){
        basketGroup.get([i]).velocityY = 0;
      }
    }
    
  }
  if(!egg.isTouching(b4)&&currentBasket=="b4"&&egg.velocityY>2){
    gameState = 2;
  }
  /////////
  if(egg.isTouching(b5)&& egg.velocityY>=0 &&currentBasket =="b5"){
    if(isCollided){
    score = score +1;
    isCollided1 =false
    bgSprite.velocityY = 0;
  }
    egg.position.x = b5.position.x;
    egg.position.y = b5.position.y - 20;
    for(var i = 0;i <basketGroup.length;i++){
      basketGroup.get([i]).velocityY = 3;
      if(b5.position.y>700){
        basketGroup.get([i]).velocityY = 0;
      }
    }
    
  }
  if(!egg.isTouching(b5)&&currentBasket=="b5"&&egg.velocityY>2){
    gameState = 2;
  }
//////////////////////////////
   if(egg.isTouching(b6)&& egg.velocityY>=0 &&currentBasket =="b6"){
  if(isCollided){
  score = score +1;
  isCollided1 =false
  bgSprite.velocityY = 0;
}
  egg.position.x = b6.position.x;
  egg.position.y = b6.position.y - 20;
  alert("You Win!");
}
    if(keyDown("space")){
      egg.velocityY = -5;
    }
  }
  if(gameState ==2){
    gameOver();
  }
}
function createBasket(){
  
  b1 = createSprite(400,700);
  b1.shapeColor = "red"
  b2 = createSprite(400,500);
  b2.shapeColor = "yellow"
  b3 = createSprite(400,300);
  b3.shapeColor = "purple"
  b4 = createSprite(400,100);
  b4.shapeColor = "green"
  b5 = createSprite(400,-100);
  b5.shapeColor = "blue"
  b6 = createSprite(400,-400);
  b6.shapeColor = "red"

  b1.addImage("basket6",basketIMG);
  b2.addImage("basket5",basketIMG);
  b3.addImage("basket4",basketIMG);
  b4.addImage("basket3",basketIMG);
  b5.addImage("basket2",basketIMG);
  b6.addImage("basket1",basketIMG);




  b1.setCollider("rectangle",0,0,30,30);
  b2.setCollider("rectangle",0,0,30,30);
  b3.setCollider("rectangle",0,0,30,30);
  b4.setCollider("rectangle",0,0,30,30);
  b5.setCollider("rectangle",0,0,30,30);
  b6.setCollider("rectangle",0,0,30,30);

  basketGroup.add(b1);
  basketGroup.add(b2);
  basketGroup.add(b3);
  basketGroup.add(b4);
  basketGroup.add(b5);
  basketGroup.add(b6)
       
  b2.velocityX = -5;
  b3.velocityX = 5;
  b4.velocityX = -5;
  b5.velocityX = 5;
  b6.velocityX = -5;
}

function mouseClicked(){
  if(gameState ==1){
    if(initialBasket =true){
      
    
    if(egg.velocityY ==0){
      egg.velocityY = -5;
    }
    
    bgSprite.velocityY = 5;
    isCollided1 = true
    if(currentBasket == "b1"){
      currentBasket = "b2"
    }else if(currentBasket =="b2"){currentBasket ="b3"}else if
    (currentBasket =="b3"){currentBasket = "b4"}else if(
      currentBasket =="b4"){currentBasket = "b5"}else if(
      currentBasket=="b5"){gameState =3}
    }  
    
  }
}
function gameOver(){
  alert("you lost!");
}