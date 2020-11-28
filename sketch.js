var car;
var wall;

var speed;
var weight;

function setup() {
  createCanvas(800,400);

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  car = createSprite(50, 200, 30, 30);
  car.shapeColor = 255;
  car.velocityX = speed;

  wall = createSprite(700, 200, 20, 400);
  wall.shapeColor = "brown";
}

function draw() {
  background(51);  

  car.debug = false;

  if(wall.x - car.x < car.width / 2 + wall.width / 2){
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed / 22500;

    if(deformation > 180){
      car.shapeColor = color(255, 0, 0);
    }
    else if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230, 230, 0);
    }
    else if(deformation < 100){
      car.shapeColor = color(0, 255, 0);
    }
  }

  console.log(deformation);

  drawSprites();
}