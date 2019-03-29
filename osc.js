var osc;
var playing = false;

function setup() {
  canvas=createCanvas(screen.availWidth*3.5,screen.availHeight*3);
  backgroundColor = color(255,100,255);
  textAlign(CENTER);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(1240);
  osc.amp(0);
  osc.start();
}

function draw() {
  background(backgroundColor)
  text('click to play', width/2, height/2);
}

function touchStarted() {
  if (getAudioContext().state!=='running') {
      getAudioContext().resume();
      }
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.05 seconds
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255,0,255);
    }
  }
}
