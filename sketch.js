function setup() {
  createCanvas (1000,1000)
  background (0)

}
function draw (){
 fill (random (0,255),random (0,255),random (0,255)); 
ellipse (mouseX,mouseY,random(0,100),15)
  stroke(random (0,255),random (0,255),random (0,255))
strokeWeight (3.3)
}