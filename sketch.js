let r = 0
let x = 0
let y = 5
let numX = 0.1
let numY = 0.05
let size = 0.22
let sizeNum = 0.0003
let rotUfo = 180
let rotNum = 0.15
let startAnimation = 2

function preload() {
  template = loadImage("assets/element/Cubism_painting_cropped_template.png")
  bg = loadImage("assets/element/Cubism_background_blank_v2.png")
  sun = loadImage("assets/element/sun.png")
  moon = loadImage("assets/element/moon.png")
  ufo = loadImage("assets/element/UFO.png")
  redMoon = loadImage("assets/element/red moon.png")
  greenM = loadImage("assets/element/mountain_green.png")
  yellowM = loadImage("assets/element/mountain_yellow.png")
  blueM = loadImage("assets/element/mountain_blue.png")
  orangeM = loadImage("assets/element/mountain_orange.png")
  darkBlueM = loadImage("assets/element/mountain_dark_blue.png")
  lightYellowM = loadImage("assets/element/mountain_light_yellow_v2.png")
}

function setup() {
  createCanvas(368, 500)
  angleMode(DEGREES)
  imageMode(CENTER)
  colorMode(HSB)
}


function draw() {
  
  //background
  push()
  
  translate(184, 500)
  rotate(r)
  image(bg, 0, 0)
  
  //rotating background control
  if (r == 0 || r == -90 || r == -180 || r == -270 || r == -360) {
    startAnimation = 0
  }

  if (r < -360) {
    r = 0
  }

  if (mouseIsPressed === true && mouseX <= width && mouseY <= height) {
    startAnimation = 2
  }
  
  r = r - startAnimation

  //sun
  push()
  translate(0, -406)
  scale(size)
  image(sun, 0, 0)
  pop()

  //moon
  push()
  translate(406, 0)
  rotate(90)
  scale(size)
  image(moon, 0, 0)
  pop()

  //UFO
  push()
  translate(7, 360)
  rotate(rotUfo)
  scale(0.27)
  image(ufo, 0, 0)
  pop()

  //red moon
  push()
  translate(-406, 0)
  scale(size)
  image(redMoon, 0, 0)
  pop()


  //planet size animation control
  if(size > 0.24) {
    sizeNum = -0.0003
  }
  
  if(size < 0.22) {
    sizeNum = 0.0003
  }

  size = size + sizeNum

  //UFO rotation animation control
  if(rotUfo > 185) {
    rotNum = -0.15
  }
  
  if(rotUfo < 175) {
    rotNum = 0.15
  }

  rotUfo = rotUfo + rotNum

  pop()
 
  //mountains
  push()
  translate(160, 220)
  
  //hue shift mountain

  //normal to blue
  if(r <= 0 && r >= -90) {
    tint(233, 0 - r/2, 100 + r/3)
  }

  //blue to green
  if (r <= -91 && r >= -180) {
    tint(263.3 + r / 2.5, 45, 70)
  }

  //green to red
  if (r <= -181 && r >= -270) {
    tint(353.3 + r + r * 0.55, 45, 60)
  }

  //red to normal
  if (r <= -271 && r >= -360){
    tint(350, 315 + r / 1.05, 100)
  }

  //mountain light yellow
  image(lightYellowM, -x, -y)

  //mountain dark blue
  image(darkBlueM, 0.75 * -x, y * 0.2)

  //mountain orange
  image(orangeM, -y, x)

  //mountain blue
  image(blueM, x * 1.1 + 0.5, -y)

  //mountain yellow
  image(yellowM, -x, y)

  //mountain green
  image(greenM, x, y)

  pop()
  
  //mountain animation
  x = x + numX 
  y = y + numY


  //mountain animation control
  if(x > 20) {
    numX = -0.1
  }

  if(x < -20) {
    numX = 0.1
  }


  if(y > 10) {
    numY = -0.05
  }

  if(y < -10) {
    numY = 0.05
  }

  // //visual indicator
  // text(r, 80, 20)
  // text(mouseX + "," + mouseY, 20, 20)
  
  
//   //original painting
//   push()
//   translate(184, 250)
//   rotate(r)
//   image(template, 0, 0)
//   pop()
  
}
