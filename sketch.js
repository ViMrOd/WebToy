let theta //angle rope and ceiling
let sway //rope attaches to ball
let length //length of rope
let pivot //rope attaches to ceiling
let d_theta //rate which theta changes produce motion

function setup() {
  createCanvas(400, 400);
  
  pivot = createVector(200, 0)
  sway = createVector()
  length = 200
  theta = PI/3
  d_theta = 0.05
}

function draw() {
  background(220);
  
  // next position ball is
  sway.x = length * sin(theta) + pivot.x
  sway.y = length * cos(theta) + pivot.y
  
  //change direction of pendulum angle goes beyond initial angle
  if (theta >= PI/3 || theta <= -PI/3) 
      d_theta *= -1
  
  theta += d_theta // next theta
  
  line(pivot.x, pivot.y, sway.x, sway.y)
  circle(sway.x, sway.y, 50)
}
