var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 10);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  wall.shapeColor = color (80,80,80); 
  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(225,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(value1,value2){
value1RightEdge=value1.x+value1.width;
value2LeftEdge=value2.x;
if(value1RightEdge>=value2LeftEdge)
{
  return true
}
return false;
}