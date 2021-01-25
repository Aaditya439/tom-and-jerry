var tom,jerry,back
function preload() {
   tom$ = loadImage("cat1.png")
   jerry$ = loadImage("mouse1.png")
   tom1 = loadAnimation("cat2.png","cat3.png")
   jerry1 = loadAnimation("mouse2.png","mouse3.png")
   tom2 = loadAnimation("cat4.png")
   jerry2 = loadAnimation("mouse4.png")
   back$ = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);


    back = createSprite(500,400,1000,800);
    back.addImage(back$);
    
   tom = createSprite(850,600,1,1)
   tom.scale = 0.2
   tom.addImage(tom$)
   tom.setCollider("circle",0,50,50)

   jerry = createSprite(100,600)
   jerry.addImage(jerry$)
   jerry.scale = 0.2
   jerry.setCollider("circle",0,50,50)

   
}

function draw() {

    background(255);
    if (jerry.x - tom.x < tom.width/2 +jerry.width/2
      && tom.x - jerry.x < tom.width/2 + jerry.width/2
      && jerry.y - tom.y < tom.height/2 + jerry.height/2
      && tom.y - jerry.y < tom.height/2 + jerry.height/2) {
        
    tom.addAnimation("end",tom2)
    tom.changeAnimation("end")
    tom.debug = true
    jerry.debug = true
    jerry.addAnimation("end1",jerry2)
    jerry.changeAnimation("end1")
    tom.velocityX = 0
    jerry.velocityX = 0
    
  }

    drawSprites();
}


function keyPressed(){
  
  if (keyCode === LEFT_ARROW){
 tom .velocityX = -5
 tom.addAnimation("tom running",tom1)
 tom.changeAnimation("tom running")
 jerry.addAnimation("jerry teasing",jerry1)
 jerry.changeAnimation("jerry teasing")

  }
  //For moving and changing animation write code here


}
