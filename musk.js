let brains = [];
function setup() {
	frameRate(4);
	for(i=0; i < 66; i++)
		{
			let x = random(0,600);
			let y = random(50,200);
			brains[i] = [x, y, x, y]
		}
            let canvas = createCanvas(800, 300);
	          canvas.parent("p5-sketch");
	background(43);
  fill(60);
	stroke(153, 170, 187)
}

function draw() {
		for(i=0; i < 66; i++)
		{
			circle(brains[i][0],brains[i][1], 20);
		}
	drawVirus()
}

function drawVirus(){
			for(i=0; i < 65; i++)
		{
			if(brains[i][0] < brains[i + 1][0]){
				brains[i][2] = brains[i][2] + 2 + random(-2,2)
			}
			if(brains[i][1] < brains[i + 1][1]){
				brains[i][3] = brains[i][3] + 1 + random(-6,6)
			}
			circle(brains[i][2],brains[i][3],2);
		}
}