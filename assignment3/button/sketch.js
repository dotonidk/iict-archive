let font;
let lightOff = false;

function preload() {
  font = loadFont("assets/Pretendard-SemiBold.ttf");
}

function setup() {
  createCanvas(800, 500);
  textFont(font);
  textAlign(CENTER, CENTER);
  noCursor();
}

function draw() {
  if (lightOff) {
    background(0);
    fill(48, 49, 45);
  } else {
    background(105, 96, 82);
    fill(235, 225, 201);
  }
  noStroke();
  rect(105, 85, 555, 330);

  // 불 켜진 상태 문장
  textSize(28);
  if (!lightOff) {
    fill(42, 43, 41);
    text("BLACK IS THE SHOP OWNER.", 382, 250);
  }

  // 불 끄면 커서 = 노이즈 + 광원
  if (lightOff) {
    let glow = noise(frameCount * 0.01) * 20;
    fill(255, 240, 190, 5 + noise(frameCount * 0.01));
    ellipse(mouseX, mouseY, 320 + glow, 320 + glow);
    ellipse(mouseX, mouseY, 300 + glow, 300 + glow);
    ellipse(mouseX, mouseY, 280 + glow, 280 + glow);
    ellipse(mouseX, mouseY, 260 + glow, 260 + glow);
    ellipse(mouseX, mouseY, 240 + glow, 240 + glow);
    ellipse(mouseX, mouseY, 220 + glow, 220 + glow);
    ellipse(mouseX, mouseY, 200 + glow, 200 + glow);
    ellipse(mouseX, mouseY, 180 + glow, 180 + glow);
    ellipse(mouseX, mouseY, 160 + glow, 160 + glow);
    ellipse(mouseX, mouseY, 140 + glow, 140 + glow);
    ellipse(mouseX, mouseY, 120 + glow, 120 + glow);
    ellipse(mouseX, mouseY, 100 + glow, 100 + glow);
    ellipse(mouseX, mouseY, 80 + glow, 80 + glow);
    ellipse(mouseX, mouseY, 60 + glow, 60 + glow);
    ellipse(mouseX, mouseY, 40 + glow, 40 + glow);

    // 광원이 문장에 닿으면 숨은 문장 등장
    if (mouseX > 160 && mouseX < 610 && mouseY > 205 && mouseY < 295) {
      fill(245, 224, 180);
      text("BLACK IS THE WEAPON DEALER.", 382, 250);
    }
  }

  // 방 불 스위치: 마우스를 올리면 하이라이트
  if (mouseX > 700 && mouseX < 765 && mouseY > 190 && mouseY < 300) {
    fill(255, 241, 187);
  } else {
    fill(214, 210, 199);
  }
  rect(700, 190, 65, 110);
  fill(67, 70, 68);
  rect(717, 215, 31, 59);
  fill(242, 240, 230);
  if (lightOff) {
    rect(720, 244, 25, 25);
  } else {
    rect(720, 218, 25, 25);
  }

  // 불이 켜져 있을 때의 작은 포인터
  if (!lightOff) {
    fill(245);
    ellipse(mouseX, mouseY, 7, 7);
  }
}

function mousePressed() {
  if (mouseX > 700 && mouseX < 765 && mouseY > 190 && mouseY < 300) {
    lightOff = !lightOff;
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    lightOff = false;
  }
}
