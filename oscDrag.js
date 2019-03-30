var osc;
var playing = false;

function setup() {
  canvas=createCanvas(screen.availWidth*3.5,screen.availHeight*3);
 
  textAlign(CENTER);

  osc = new p5.Oscillator();
  osc.setType('sine');
  //osc.freq(1240);
  osc.amp(0);
  osc.start();
  background(255);
}

function draw() {
  fill(100,mouseY,mouseX);
  ellipse(mouseX,mouseX,mouseX-pmouseX,mouseY-pmouseY);
  text('click to play', width/2, height/2);
}

function touchStarted() {
  osc.freq(mouseY*3);
  osc.amp(1);
}


function touchEnded (){
  osc.amp(0);
}