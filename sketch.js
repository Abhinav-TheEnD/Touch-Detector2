var fixedRect, movingRect;
var Abhinav;
function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "purple";


  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";

  Abhinav = createSprite(300, 500, 70, 100)
  Abhinav.shapeColor = 'red';
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "cyan";
    fixedRect.shapeColor = "cyan";
  }
  else if (isTouching(movingRect,Abhinav)) {
    movingRect.shapeColor = 'yellow'
    Abhinav.shapeColor = 'yellow'

  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "purple";
    Abhinav.shapeColor = "Red";

  }


  drawSprites();
}

