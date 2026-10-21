let waveX;
let waveY;
let waveSize = 0;
let waveR;
let waveG;
let waveB;
function setup() {
createCanvas(500, 500);
}

function draw() {
background(220);
noStroke();
// 파도 배경
let t = frameCount * 0.005;
// 1열
let n00 = noise(t + 0.0);
fill(20 + n00 * 50, 80 + n00 * 100, 140 + n00 * 100);
rect(0, 0, 100, 100);
let n01 = noise(t + 0.2);
fill(20 + n01 * 50, 80 + n01 * 100, 140 + n01 * 100);
rect(100, 0, 100, 100);
let n02 = noise(t + 0.4);
fill(20 + n02 * 50, 80 + n02 * 100, 140 + n02 * 100);
rect(200, 0, 100, 100);
let n03 = noise(t + 0.6);
fill(20 + n03 * 50, 80 + n03 * 100, 140 + n03 * 100);
rect(300, 0, 100, 100);
let n04 = noise(t + 0.8);
fill(20 + n04 * 50, 80 + n04 * 100, 140 + n04 * 100);
rect(400, 0, 100, 100);
// 2열
let n10 = noise(t + 0.3);
fill(20 + n10 * 50, 80 + n10 * 100, 140 + n10 * 100);
rect(0, 100, 100, 100);
let n11 = noise(t + 0.5);
fill(20 + n11 * 50, 80 + n11 * 100, 140 + n11 * 100);
rect(100, 100, 100, 100);
let n12 = noise(t + 0.7);
fill(20 + n12 * 50, 80 + n12 * 100, 140 + n12 * 100);
rect(200, 100, 100, 100);
let n13 = noise(t + 0.9);
fill(20 + n13 * 50, 80 + n13 * 100, 140 + n13 * 100);
rect(300, 100, 100, 100);
let n14 = noise(t + 1.1);
fill(20 + n14 * 50, 80 + n14 * 100, 140 + n14 * 100);
rect(400, 100, 100, 100);
// 3열
let n20 = noise(t + 0.6);
fill(20 + n20 * 50, 80 + n20 * 100, 140 + n20 * 100);
rect(0, 200, 100, 100);
let n21 = noise(t + 0.8);
fill(20 + n21 * 50, 80 + n21 * 100, 140 + n21 * 100);
rect(100, 200, 100, 100);
let n22 = noise(t + 1.0);
fill(20 + n22 * 50, 80 + n22 * 100, 140 + n22 * 100);
rect(200, 200, 100, 100);
let n23 = noise(t + 1.2);
fill(20 + n23 * 50, 80 + n23 * 100, 140 + n23 * 100);
rect(300, 200, 100, 100);
let n24 = noise(t + 1.4);
fill(20 + n24 * 50, 80 + n24 * 100, 140 + n24 * 100);
rect(400, 200, 100, 100);
// 4열
let n30 = noise(t + 0.9);
fill(20 + n30 * 50, 80 + n30 * 100, 140 + n30 * 100);
rect(0, 300, 100, 100);
let n31 = noise(t + 1.1);
fill(20 + n31 * 50, 80 + n31 * 100, 140 + n31 * 100);
rect(100, 300, 100, 100);
let n32 = noise(t + 1.3);
fill(20 + n32 * 50, 80 + n32 * 100, 140 + n32 * 100);
rect(200, 300, 100, 100);
let n33 = noise(t + 1.5);
fill(20 + n33 * 50, 80 + n33 * 100, 140 + n33 * 100);
rect(300, 300, 100, 100);
let n34 = noise(t + 1.7);
fill(20 + n34 * 50, 80 + n34 * 100, 140 + n34 * 100);
rect(400, 300, 100, 100);
// 5열
let n40 = noise(t + 1.2);
fill(20 + n40 * 50, 80 + n40 * 100, 140 + n40 * 100);
rect(0, 400, 100, 100);
let n41 = noise(t + 1.4);
fill(20 + n41 * 50, 80 + n41 * 100, 140 + n41 * 100);
rect(100, 400, 100, 100);
let n42 = noise(t + 1.6);
fill(20 + n42 * 50, 80 + n42 * 100, 140 + n42 * 100);
rect(200, 400, 100, 100);
let n43 = noise(t + 1.8);
fill(20 + n43 * 50, 80 + n43 * 100, 140 + n43 * 100);
rect(300, 400, 100, 100);
let n44 = noise(t + 2.0);
fill(20 + n44 * 50, 80 + n44 * 100, 140 + n44 * 100);
rect(400, 400, 100, 100);
// 파도 + ㅇ
fill(waveR, waveG, waveB, 40);
ellipse(waveX, waveY, waveSize, waveSize);
fill(waveR, waveG, waveB, 65);
ellipse(waveX, waveY, waveSize * 0.8, waveSize * 0.8);
fill(waveR, waveG, waveB, 75);
ellipse(waveX, waveY, waveSize * 0.6, waveSize * 0.6);
fill(waveR, waveG, waveB, 100);
ellipse(waveX, waveY, waveSize * 0.4, waveSize * 0.4);
fill(waveR, waveG, waveB, 150);
ellipse(waveX, waveY, waveSize * 0.2, waveSize * 0.2);
waveSize = waveSize + 1;
}
// 클릭 인터랙션
function mousePressed() {
waveR = random(40, 220);
waveG = random(50, 180);
waveB = random(120, 240);
waveX = mouseX;
waveY = mouseY;
// 클릭할 때마다 크기 리셋
waveSize = 10;
}