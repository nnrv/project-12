var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, leafImage;
var apple, appleImage;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(keyDown("left_arrow")&& rabbit.y >= 100) {
  rabbit.velocityX = -2;
  }

  if(keyDown("right_arrow")&& rabbit.y >= 100) {
    rabbit.velocityX = 10;
  }

  var select_sprites = Math.round(random(1,2))

if (frameCount % 80 === 0) {
  if(select_sprites == 1){
    createApples();
  }
  else{
    createLeaves();
  }
}

  drawSprites();
} 

function createApples(){
  if (frameCount % 80 === 0){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.04;
  apple.velocityY = 2;
  apple.lifetime = 150;

  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}
}

function createLeaves(){
  if (frameCount % 80 === 0){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.04;
  leaf.velocityY = 2;
  leaf.lifetime = 150;

  leaf.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}
}

