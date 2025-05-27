let moveBox;
let x;
function setup(){
  moveBox = select('#p5-box');
  
}

function draw(){
  	x = 50 + sin(frameCount/20) * 25;
 		moveBox.style('width', x + 'px');
}