var car;
var wall;
var speed, weight;

function setup() {
  createCanvas(1200,500);
  car=createSprite(50, 250, 50, 50);
  car.shapeColor="white";
 wall=createSprite(1100,250,50,150)
  wall.shapeColor="black"
speed=random(75,105)
weight=random(400,1500)
car.velocityX=speed

}

function draw() {
  background("brown");
  if (wall.x-car.x< wall.width/2+car.width/2){
   car.velocityX=0;



  }
  var deformation=0.5*speed*weight*speed/22509
  if (deformation>180&&car.x>300) {
    car.shapeColor="yellow"
  }
  if (deformation<180&&deformation>100&&car.x>300) {
   
     car.shapeColor="red"
   
 }                                        
   if (deformation<100&&car.x>300) {
     car.shapeColor="green"
   }        




  drawSprites();
}