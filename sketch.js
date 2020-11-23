
var fix;
var move;

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 30, 50);
  move = createSprite(800, 200, 50, 30);
}

function draw() {
  background(255,255,255);  
move.x=World.mouseX;
move.y=World.mouseY;
if((move.x-fix.x <=( move.width/2+fix.width/2))&&
  (fix.x-move.x <=( fix.width/2+move.width/2))&&
  (move.y-fix.y <=( move.height/2+fix.height/2))&&
  (fix.y-move.y <=( fix.height/2+move.height/2))){
move.shapeColor = "red";
fix.shapeColor = "blue";
}else{
  move.shapeColor = "purple";
  fix.shapeColor = "green";

}


  drawSprites();
}