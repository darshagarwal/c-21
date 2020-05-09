var thickness,wall
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  speed= random(233,312);
  weight = random(30,52);
  thickness = random(23,83);
 bullet = createSprite(50, 200, 50, 20);
 bullet.shapecolor = "white";
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);
}

function draw() {
  background(10,10,10);  
  bullet.velocityX = speed;
  
    if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/( thickness* thickness * thickness);
      
      if(damage>10){
        bullet.shapecolor = "blue";
      }
      if(damage<10){
        bullet.shapecolor = "green";
      }
      if(damage === 10){
        bullet.shapecolor = "red";
      }
    }
  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge = Lbullet.x+Lbullet.width;
  wallLeftEdge = Lwall.x
  if(bulletRightEdge>=wallLeftEdge )
  {
    return true
  }
    return false;
}