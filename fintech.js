let days = [];
let tesco = [];
let leftMargin;
let myFont;

function preload(){
	  myFont = loadFont('https://fonts.cdnfonts.com/s/62895/HelveticaNeueRoman.woff');
}

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("p5-sketch");
  textFont(myFont);
  textSize(16);
  stroke(160);
  leftMargin = 20;
  setdays();
  describe(
    "a bar graph showing the days applicants were born in, from 1970 up to 2010. Most applicants were born in the late 1990s."
  );
}

function draw() {
  background(255);
  fill(0);
  line(leftMargin, 20, leftMargin, 200);
  fill(100);
  noStroke();
  text("£2134.56", leftMargin, 30);
  fill(14,93,81);
  stroke(255);
  // draw bar graph
  for (i = 0; i < days.length; i++) {
    rect(leftMargin + i * 10, 200 - days[i] / 15, 10, days[i] / 15);
  }
  // draw Tesco spending
  let xPos = 0;

  fill(100);
  noStroke();
  text("1 April", 20, 220);
  text("30 April", 300, 220);
  rollover();
}

function setdays() {
  // Set days from 1950 onwards
  days = [
    2134.56,
    1342.34,
    1243.89,
    1203.24,
    1116.16,
    1068.35,
    1045.89,
    983.23,
    978.45,
    912.52, //10
    822.45,
    803.45,
    797.92,
    791.15,
    789.82,
    784.56,
    783.82,
    782.85,
    744.66, //20
    731.47,
    721.77,
    703.58,
    701.48,
    693.68,
    669.47,
    659.38,
    624.88,
    618.47, //30
  ];
  for (i = 0; i < 33; i++) {
    tesco[i] = random(2, 44).toFixed(2);
  }
}

function rollover() {
  for (i = 0; i < days.length; i++) {
    if (
      mouseX > leftMargin + i * 10 &&
      mouseX <= leftMargin + (i + 1) * 10 &&
      mouseY < 200
    ) {
      fill('#96c8a2');
      rect(leftMargin + i * 10, 200 - days[i] / 15, 10, days[i] / 15);
      fill('white');
      stroke('#96c8a2');
      rect(mouseX + 15, mouseY, 100, 60);
      fill(0);
      noStroke();
      text(1 + i + " April", mouseX + 25, mouseY + 25);
      text("£" + days[i], mouseX + 25, mouseY + 45);
    }
  }
}
