var monkey, monkeyrunning, jungle, jungleimage, ground ;
var bananaimage, foodgroup, stoneimage, stonesgroup ;
var score = 0 ;

function preload() {
  
  monkeyrunning = loadAnimation ("Monkey_01.png" , "Monkey_02.png" , "Monkey_03.png" , "Monkey_04.png" , "Monkey_05.png" , "Monkey_06.png" , "Monkey_07.png" , "Monkey_08.png" , "Monkey_09.png" , "Monkey_10.png" ) ;
  
  jungleimage = loadImage("jungle.jpg") ;
  
  bananaimage = loadImage("banana.png") ;
  stoneimage = loadImage("stone.png") ;
   
}

function setup() {
  createCanvas(400, 400);
  
  jungle = createSprite(200,200);
  jungle.addImage(jungleimage) ;
  jungle.scale = 0.8 ;
  
  monkey = createSprite(70,330) ;
  monkey.addAnimation("monkeyi" , monkeyrunning ) ;
  monkey.scale = 0.13 ;
  
  ground = createSprite(200,372,500,4);
  ground.visible = false ;
  
  foodgroup = createGroup() ;
  stonesgroup = createGroup() ;
    
}

function draw() {
  background(220);

  food() ;
  stones() ;  
  
  monkey.collide ( ground ) ;
  jungle.velocityX = -3 ;
  monkey.velocityY = 3 ;
  
  if(jungle.x < 0 ) {
    jungle.x = ( jungle.width/2 - 100 ) ;
  }
  
  if (keyDown("space") && monkey.y > 320) {
    monkey.velocityY = -180 ;
  }
 
  if (foodgroup.isTouching(monkey)) {
     foodgroup.destroyEach(); //ADD THIS
    score = score + 2 ;
  }
  
  switch(score){
    case 10 : monkey.scale = 0.15 ;
        break ;
    case 20 : monkey.scale = 0.17 ;
        break ;
    case 30 : monkey.scale = 0.19 ;
        break ;
    case 40 : monkey.scale = 0.21 ;
        break ;
    default : break ;
  }
  
  if(monkey.isTouching(stonesgroup)){
    monkey.scale = 0.13 ;
  }
   
  drawSprites();
  
  fill(220);
  textSize(30);
  stroke(100);
  text("Score: " + score , 200, 50) ;
}
 function food () { 
   if (frameCount % 80 === 0 ) { 
   var rand = random(140,220) ;
   var banana = createSprite(410,120) ;
   banana.y = rand ;
   banana.addImage (bananaimage);
   banana.scale = 0.07
   banana.velocityX = -6 ;
   banana.lifetime = 69 ;
  // banana.add = foodgroup ; //ERROR IN CREATING GROUP
     foodgroup.add(banana);
   }
   
 }

function stones () {
  if(frameCount % 300 === 0 ) {
    var stone = createSprite ( 410 , 330 ) ;
    stone.addImage(stoneimage) ;
    stone.velocityX = -5 ;
    stone.scale = 0.22
    stone.lifetime = 83 ;
    stone.add = stonesgroup ;
  }
  
}



