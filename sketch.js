function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  var hr,mn,sc;

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}