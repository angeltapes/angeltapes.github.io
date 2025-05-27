let yScroll = 0;
let xPos = 0;
window.onscroll = function() {scrollChanged()};

function setup() {
	// let canvas = createCanvas(windowWidth, windowHeight);
	// canvas.parent("p5-sketch");
	// background(100);
}

function scrollChanged(){
	yScroll = document.body.scrollTop || document.documentElement.scrollTop
}

function draw() {
	let scrollText = select('#scrollCounter');
	scrollText.html(yScroll);
	background(yScroll,90,20);
	fill(yScroll / 5, yScroll /10, 90);
	strokeWeight(yScroll);
	if(yScroll > 1200){
		xPos = yScroll
	}
  circle(100 + xPos,300,50 + yScroll)
	let varText = select('#textCounter');
	if(yScroll > 1200){
		varText.html('<p>New text</p>')
	}
}