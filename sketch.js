var goodShip, badShip;
var goodShip_Image, badShip_Image;
var laser, fireball;
var laser_Image, fireball_Image;
var meteor, meteor_Image;
var score = 0;
var coins = 0;
function preload(){
goodShip_Image = loadImage("goodShip1.png")
badShip_Image = loadImage("badShip1.png")
laser_Image = loadImage("Laser .png")
fireball_Image = loadImage("fireball.png")
meteor_Image = loadImage("meteor.png")

}
function setup(){
    createCanvas(1200,600)
    goodShip = createSprite(400,400,50,50)
    goodShip.addImage(goodShip_Image)
    goodShip.scale = 0.3;
    


}
function draw(){
background(0)
spawnBadShips()
spawnMeteors()
if(keyDown (DOWN_ARROW)&&goodShip.y<550){
goodShip.y = goodShip.y + 5;

}
if(keyDown (UP_ARROW)&&goodShip.y>200){
    goodShip.y = goodShip.y - 5;
    
    }
    if(keyDown (LEFT_ARROW)&&goodShip.x>50){
        goodShip.x = goodShip.x - 5;
        
        }
        if(keyDown (RIGHT_ARROW)&&goodShip.x<1150){
            goodShip.x = goodShip.x + 5;
            
            }

drawSprites()
}
function spawnBadShips(){
if(frameCount%120 === 0){
    badShip = createSprite(200,100,50,50)
    badShip.addImage(badShip_Image)
    badShip.scale = 0.3;
    badShip.velocityX = 5;
    fireball = createSprite(200,100,50,30)
    fireball.addImage(fireball_Image)
    fireball.velocityX = 10;
    fireball.velocityY = 10;
    //fireball.velocityX = 5;
    fireball.scale  = 0.3;
    fireball.x = badShip.x

}


}

function spawnMeteors(){
if(frameCount%60 === 0){
    meteor = createSprite(100, 60,50, 50)
    meteor.addImage(meteor_Image)
    meteor.velocityX = 5;
    //meteor.velocityY = 10;
    meteor.scale = 0.2;
    //meteor.x = Math.random(round(200,1000));
    meteor.y = Math.round(random(50,600));
}





}