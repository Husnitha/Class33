var backgroundImg;
var backgroundImg = "sprites/snow2.jpg";



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  if(backgroundImg)
      backgroundImg(backgroundImg);

    
  drawSprites();
}

function preload(){
    backgroundImg = loadImage("sprites/snow2.jpg")
}