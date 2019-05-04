let r;
let g;
let w;
let sq;
let hi;
let tracking;

let d;
let d2;
let d3;
let d4;
let d5;
let d6;

let bool;
let inNext = false;

//cardi - i like it variables
let dragging = false;
let dragging2 = false;
let dragging3 = false;
let dragging4 = false;
let dragging5 = false;
let dragging6 = false;
let rollover = false;
let rollover2 = false;
let rollover3 = false;
let rollover4 = false;
let rollover5 = false;
let rollover6 = false;
//hov - empire state of mind variables
let draggingb = false;
let dragging2b = false;
let dragging3b = false;
let dragging4b = false;
let dragging5b = false;
let dragging6b = false;
let rolloverb = false;
let rollover2b = false;
let rollover3b = false;
let rollover4b = false;
let rollover5b = false;
let rollover6b = false;

//humble variables
let draggingc = false;
let dragging2c = false;
let dragging3c = false;
let dragging4c = false;
let dragging5c = false;
let dragging6c = false;
let rolloverc = false;
let rollover2c = false;
let rollover3c = false;
let rollover4c = false;
let rollover5c = false;
let rollover6c = false;
//motto variable
let draggingd = false;
let dragging2d = false;
let dragging3d = false;
let dragging4d = false;
let dragging5d = false;
let dragging6d = false;
let rolloverd = false;
let rollover2d = false;
let rollover3d = false;
let rollover4d = false;
let rollover5d = false;
let rollover6d = false;

//thriftshop variable
let dragginge = false;
let dragging2e = false;
let dragging3e = false;
let dragging4e = false;
let dragging5e = false;
let dragging6e = false;
let rollovere = false;
let rollover2e = false;
let rollover3e = false;
let rollover4e = false;
let rollover5e = false;
let rollover6e = false;

//black and yellow variable
let draggingf = false;
let dragging2f = false;
let dragging3f = false;
let dragging4f = false;
let dragging5f = false;
let dragging6f = false;
let rolloverf = false;
let rollover2f = false;
let rollover3f = false;
let rollover4f = false;
let rollover5f = false;
let rollover6f = false;
// general variables
var x, x2, x3, x4, x5, x6, y, y2, y3, y4, y5, y6, wid, hei, wid2, hei2;

var offsetX, offsetY;
var offsetX2, offsetY2;
var offsetX3, offsetY3;
var offsetX4, offsetY4;
var offsetX5, offsetY5;
var offsetX6, offsetY6;

var offsetXb, offsetYb;
var offsetX2b, offsetY2b;
var offsetX3b, offsetY3b;
var offsetX4b, offsetY4b;
var offsetX5b, offsetY5b;
var offsetX6b, offsetY6b;


var offsetXc, offsetYc;
var offsetX2c, offsetY2c;
var offsetX3c, offsetY3c;
var offsetX4c, offsetY4c;
var offsetX5c, offsetY5c;
var offsetX6c, offsetY6c;

var offsetXd, offsetYd;
var offsetX2d, offsetY2d;
var offsetX3d, offsetY3d;
var offsetX4d, offsetY4d;
var offsetX5d, offsetY5d;
var offsetX6d, offsetY6d;

var offsetXe, offsetYe;
var offsetX2e, offsetY2e;
var offsetX3e, offsetY3e;
var offsetX4e, offsetY4e;
var offsetX5e, offsetY5e;
var offsetX6e, offsetY6e;

var offsetXf, offsetYf;
var offsetX2f, offsetY2f;
var offsetX3f, offsetY3f;
var offsetX4f, offsetY4f;
var offsetX5f, offsetY5f;
var offsetX6f, offsetY6f;

function preload() {
  logo = loadImage('Get-Hip-Logo.png');

  //actual head bubbles
  bardi = loadImage('bub10.png');
  kl = loadImage('bub9.png');
  mack = loadImage('bub4.png');
  future = loadImage('bub8.png');
  drake = loadImage('bub7.png');
  fw = loadImage('bub6.png');
  yg = loadImage('bub5.png');
  lw = loadImage('bub3.png');
  wiz = loadImage('bub2.png');
  jay = loadImage('bub1.png');

  //actual album boxes
  iop = loadImage('box9.png');
  damn = loadImage('box8.png');
  wattba = loadImage('box7.png');
  fetty = loadImage('box6.png');
  krazy = loadImage('box5.png');
  heist = loadImage('box4.png');
  tc = loadImage('box3.png');
  rp = loadImage('box2.png');
  bp3 = loadImage('box1.png');

  //testcorrect answers  
  ye = loadImage('Kanye Head.png');
  CD = loadImage('collee dropout.jpg');

  //testincorrect answers
  cardi = loadImage('cardi head.png');


  lyte = loadImage('mc lyte transparent.png')
  eot = loadImage('MC Lyte - Eyes On This.jpg');

  buzz = loadSound('real buzz.mp3');
  buzz.loop = false;
  ding = loadSound('Ding Sound Effect.mp3');
  ding.loop = false;

  //font

  myr = loadFont('MyriadPro-Bold.otf')


  //sound and play button
  // jwalks = loadSound('jesus walks snippet.mp3');

  ilike = loadSound('CardiSnippet.mp3');
  button = createImg('playbutton.png');
  button.size(300, 300)
  button.position(windowWidth / 2 + 200)
  button.mousePressed(play)

  empire = loadSound('HovSnippet.mp3');
  button2 = createImg('playbutton.png');
  button2.size(300, 300)
  button2.position(windowWidth / 2 + 200)
  button2.mousePressed(play2)

  humb = loadSound('humblesnippet.mp3');
  button3 = createImg('playbutton.png');
  button3.size(300, 300)
  button3.position(windowWidth / 2 + 200)
  button3.mousePressed(play3)

  motto = loadSound('mottosnippet.mp3');
  button4 = createImg('playbutton.png');
  button4.size(300, 300)
  button4.position(windowWidth / 2 + 200)
  button4.mousePressed(play4)

  thriftsh = loadSound('thriftsnippet.mp3');
  button5 = createImg('playbutton.png');
  button5.size(300, 300)
  button5.position(windowWidth / 2 + 200)
  button5.mousePressed(play5)

  black = loadSound('bandysnippet.mp3');
  button6 = createImg('playbutton.png');
  button6.size(300, 300)
  button6.position(windowWidth / 2 + 200)
  button6.mousePressed(play6)

  trap = loadSound('trapqueensnippet.mp3');
  button7 = createImg('playbutton.png');
  button7.size(300, 300)
  button7.position(windowWidth / 2 + 200)
  button7.mousePressed(play7)

  hitta = loadSound('hittasnippet.mp3');
  button8 = createImg('playbutton.png');
  button8.size(300, 300)
  button8.position(windowWidth / 2 + 200)
  button8.mousePressed(play8)
}

////////AUDIO FUNCTIONS
function play() {
ilike.volume = .4;

  if (ilike.isPlaying()) {
    ilike.pause();
  }
  else {
    ilike.play();
  }
}

function play2() {
  if (empire.isPlaying()) {
    empire.pause();
  }
  else {
    empire.play();
  }
}

function play3() {
  if (humb.isPlaying()) {
    humb.pause();
  }
  else {
    humb.play();
  }
}

function play4() {
  if (motto.isPlaying()) {
    motto.pause();
  }
  else {
    motto.play();
  }
}

function play5() {
  if (thriftsh.isPlaying()) {
    thriftsh.pause();
  }
  else {
    thriftsh.play();
  }
}

function play6() {
  if (black.isPlaying()) {
    black.pause();
  }
  else {
    black.play();
  }
}

function play7() {
  if (trap.isPlaying()) {
    trap.pause();
  }
  else {
    trap.play();
  }
}

function play8() {
  if (hitta.isPlaying()) {
    hitta.pause();
  }
  else {
    hitta.play();
  }
}

function dinger() {
  if (ding.isPlaying()) {
    ding.currentTime = 0;
  }
  else {
    ding.play();
  }
}

function buzzer() {
  if (buzz.isPlaying()) {
    buzz.currentTime = 0;
  }
  else {
    buzz.play();
    buzz.currentTime = 0;
  }
}

/////////SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);

  tracking = 1;
  // coordinates
  //b = artist 2 \\\ c = artist 3 etc.

  //////////////////////Artist 1 COORDINAATES (CARDI )
  x6 = windowWidth / 2 - 350
  y6 = windowHeight / 2 + 200
  bx6 = windowWidth / 2 - 350
  by6 = windowHeight / 2 + 200
  cx6 = windowWidth / 2 - 350
  cy6 = windowHeight / 2 + 200
  dx6 = windowWidth / 2 - 350
  dy6 = windowHeight / 2 + 200
  ex6 = windowWidth / 2 - 350
  ey6 = windowHeight / 2 + 200
  fx6 = windowWidth / 2 - 350
  fy6 = windowHeight / 2 + 200
  // head coordinates
  x5 = windowWidth / 2 - 350
  y5 = windowHeight / 2 + 200
  bx5 = windowWidth / 2 - 350
  by5 = windowHeight / 2 -200
  cx5 = windowWidth / 2 - 350
  cy5 = windowHeight / 2 + 200
  dx5 = windowWidth / 2 - 350
  dy5 = windowHeight / 2 -200
  ex5 = windowWidth / 2 - 350
  ey5 = windowHeight / 2 -200
  fx5 = windowWidth / 2 - 350
  fy5 = windowHeight / 2 -200
  // wrong album
  x4 = windowWidth / 2 - 350
  y4 = windowHeight / 2 
  bx4 = windowWidth / 2 - 350
  by4 = windowHeight / 2
  cx4 = windowWidth / 2 - 350
  cy4 = windowHeight / 2 
  dx4 = windowWidth / 2 - 350
  dy4 = windowHeight / 2
  ex4 = windowWidth / 2 - 350
  ey4 = windowHeight / 2 
  fx4 = windowWidth / 2 - 350
  fy4 = windowHeight / 2 
  //wrong head coordinates
  fx3 = windowWidth / 2 - 350
  fy3 = windowHeight / 2
  ex3 = windowWidth / 2 - 350
  ey3 = windowHeight / 2
  dx3 = windowWidth / 2 - 350
  dy3 = windowHeight / 2
  cx3 = windowWidth / 2 - 350
  cy3 = windowHeight / 2
  x3 = windowWidth / 2 - 350
  y3 = windowHeight / 2
  bx3 = windowWidth / 2 - 350
  by3 = windowHeight / 2
  //first right album coordinate
  fx2 = windowWidth / 2 - 350
  fy2 = windowHeight / 2 -200
  ex2 = windowWidth / 2 - 350
  ey2 = windowHeight / 2 -200
  dx2 = windowWidth / 2 - 350
  dy2 = windowHeight / 2 -200
  cx2 = windowWidth / 2 - 350
  cy2 = windowHeight / 2 - 200
  x2 = windowWidth / 2 - 350
  y2 = windowHeight / 2 -200
  bx2 = windowWidth / 2 - 350
  by2 = windowHeight / 2 - 200
  //right head coordinate (b is second song, c is thride, etc)
  fx = windowWidth / 2 -350
  fy = windowHeight / 2 + 200
  ex = windowWidth / 2 -350
  ey = windowHeight / 2 + 200
  dx = windowWidth / 2 -350
  dy = windowHeight / 2 + 200
  cx = windowWidth / 2 - 350
  cy = windowHeight / 2 - 200
  bx = windowWidth / 2 -350
  by = windowHeight / 2 + 200
  x = windowWidth / 2 - 350
  y = windowHeight / 2 - 200
  wid = 190;
  hei = 190;
  wid2 = 200;
  hei2 = 200;

  g = color('#109346');
  r = color('#a02c2e');
  w = color('#ffffff');

  sq = width / 2
  hi = height / 2

pagenumy= windowHeight-50
artx = 75  
  nx=width/2
  ny=height/2 + 100
  depx= windowWidth / 2 + 350
  depy= windowHeight / 2 + 150

  // for (let i = 0; i < 2; i++){
  //   let x = random(250,300)
  //   let y = 300
  //   let r= random (10, 35)
  //   let b = new obj(x, y, r)
  // 	objs.push(b)
}
/////////KEY NAVIGATION
function keyPressed() {



  //arrows for back and forth navigation
  if (keyCode === 39) {
    tracking++;
    console.log("yay")
  }
 else if (keyCode === 37){
    tracking--;
    console.log("back")
  }
}

/////////DISPLAY
function draw() {
  fill(r)
  strokeWeight(2)
  stroke(g)
  ellipse(mouseX, mouseY, 10, 10)

  console.log(tracking)


  if (tracking == 1) {
    p1();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
  else if (tracking == 2) {
    p2();

    button.show();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }

  else if (tracking == 3) {
    p2a();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
    
  }

  else if (tracking == 4) {
    fact1();
    button2.hide();
    button.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
    
  }

  else if (tracking == 5) {
    p3();
    button2.show();
    button.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }

  else if (tracking == 6) {
    p3a();
    button2.show();
    button.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
  else if (tracking == 7) {
    fact2();
    button2.hide();
    button.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
  else if (tracking == 8) {
    p4();
    button2.hide();
    button.hide();
    button3.show();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
  else if (tracking == 9) {
    p4a();
    button2.hide();
    button.hide();
    button3.show();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
  else if (tracking == 10) {
    fact4();
    button2.hide();
    button.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
  else if (tracking == 11) {
    p5();
    button2.hide();
    button.hide();
    button3.hide();
    button4.show();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
  else if (tracking == 12) {
    p5a();
    button2.hide();
    button.hide();
    button3.hide();
    button4.show();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
  else if (tracking == 13) {
    fact5();
    button2.hide();
    button.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
  }
}

//////////INTRO
function p1() {
  background(g)
  button2.hide();
  button.hide();
  textFont(myr);
  
  /////////////////////////////visuals
  ///Page

  imageMode(CENTER, CENTER)
  image(logo, windowWidth/2, windowHeight - windowHeight + 100, 240, 60)

  ////NEXT TRACK
  fill(w);
  stroke(g);
  strokeWeight(3);
  rect(windowWidth/2, windowHeight - 100, 200, 40, 10);
  fill(g);
  noStroke();
  textSize(15);
  text('PRESS MOUSE TO BEGIN', windowWidth/2, windowHeight - 100);

  if(mouseIsPressed){
    tracking ++;
  }

  noFill();
  stroke(w);
  rect(windowWidth / 2, windowHeight / 2, 890, 250, 200)

  textSize(23);
  fill(w);
  noStroke();
  text('In this game you will be provided with an audio snippet - \n your goal is to MATCH THE SONG with its respective ARTIST and ALBUM. \n \n ENJOY!', (windowWidth / 2), (windowHeight / 2));

  //Page Title & Box
  fill(w)
  stroke(g);
  strokeWeight(2)
  rectMode(CENTER)
  rect(90, 25, 170, 40, 200)
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15)
  text('MATCH THE TRACK', 90, 25)
}

//////I LIKE IT////// 
function p2() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 

  ///////////////AUDIO PLAY VISUAL
  completion = ilike.currentTime() / ilike.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);


  ///////////////////Object Drag
  //////HEADS
  //right head (cardi)
  var d = dist(mouseX, mouseY, x, y)
  if (d < wid / 2) {
    rollover = true;
    console.log('u r in bubble')
  }
  else {
    rollover = false;
  }
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }


  //////////////// wrong head
  var d2 = dist(mouseX, mouseY, x3, y3)
  if (d2 < wid / 2) {
    rollover3 = true;
  }
  else {
    rollover3 = false;
  }
  if (dragging3) {
    x3 = mouseX + offsetX3;
    y3 = mouseY + offsetY3;
  }

  var d3 = dist(mouseX, mouseY, x5, y5)
  if (d3 < wid / 2) {
    rollover5 = true;
  }
  else {
    rollover5 = false;
  }
  if (dragging5) {
    x5 = mouseX + offsetX5;
    y5 = mouseY + offsetY5;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)


  ////NEXT TRACK
//   fill(w);
//   stroke(r);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// // console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }

  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(g);
  strokeWeight(3);
  ellipse(depx, depy, wid, hei, 300);

  //right cricle feedback
  var depdis= dist(mouseX, mouseY, depx, depy)
  if (dragging == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    ellipse(depx, depy, wid, hei, 300);
    dinger();
    
  }
var dis2 = dist(x, y, depx, depy)
  if (dragging == false && dis2 < wid/2 && rollover == false){

    tracking++;
  }

  

  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  // fill(w);
  // stroke(r);
  // strokeWeight(1);
  // rect(windowWidth / 2 + 300, windowHeight / 2 - 145, wid - 10, hei - 10, 10);

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)

//Instructions
  fill(r);
  noStroke();
  textAlign(LEFT);
  textSize(15)
  text('Press Play for Audio \nDrag Artist Bubble to Circle', 10, 45)

  textAlign(CENTER,CENTER)

////////// 1/2 and Bubble
translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)
  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('1/2', trx, trt)

  ///Progress bubbles
translate(-30, 0);
  strokeWeight(2)
  stroke(r)
  fill(g)
  ellipse(windowWidth-220, windowHeight-30, 20)
  strokeWeight(1)
  stroke(g)
  fill(w)
  ellipse(windowWidth-190, windowHeight-30, 20)
  ellipse(windowWidth-160, windowHeight-30, 20)
  ellipse(windowWidth-130, windowHeight-30, 20)
  ellipse(windowWidth-100, windowHeight-30, 20)
  ellipse(windowWidth-70, windowHeight-30, 20)
  ellipse(windowWidth-40, windowHeight-30, 20)
  ellipse(windowWidth-10, windowHeight-30, 20)
  
  //////////////////Photos of Albums and Artists


translate(30, 0)
  //rightartist    
  imageMode(CENTER, CENTER)
  image(bardi, x, y, wid, wid)
  //wrongartists
  image(kl, x3, y3, wid, hei)
  image(mack, x5, y5, wid, hei)

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && dragging == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)

    //not working to make ding only play once
    }



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging3 == true || mouseX > windowWidth / 2 && dragging5 == true) {
    console.log('nay')
noStroke();
    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(g);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Artist', artx, hi)
}
function p2a() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 
 //////////////////go to next page if right head is placed and mouse is out of bubble -- NOT WORKING TRY DIST
//  if (x > windowWidth / 2 + 350 && y > windowHeight / 2 + 100 && dragging == false && rollover == false) {
//   //setTimeout not working
//   tracking == tracking++
// }

  ///////////////AUDIO PLAY VISUAL
  completion = ilike.currentTime() / ilike.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);

  ///////////////////Object Drag
  //////HEADS
  //right album (iop)
  var d = dist(mouseX, mouseY, x4, y4)
  if (d < wid / 2) {
    rollover4 = true;
    console.log('u r in bubble')
  }
  else {
    rollover4 = false;
  }
  if (dragging4) {
    x4 = mouseX + offsetX4;
    y4 = mouseY + offsetY4;
  }


  //////////////// wrong album
  var d2 = dist(mouseX, mouseY, x2, y2)
  if (d2 < wid / 2) {
    rollover2 = true;
  }
  else {
    rollover2 = false;
  }
  if (dragging2) {
    x2 = mouseX + offsetX2;
    y2 = mouseY + offsetY2;
  }

  var d3 = dist(mouseX, mouseY, x6, y6)
  if (d3 < wid / 2) {
    rollover6 = true;
  }
  else {
    rollover6 = false;
  }
  if (dragging6) {
    x6 = mouseX + offsetX6;
    y6 = mouseY + offsetY6;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)

  
  ////NEXT TRACK
//   fill(w);
//   stroke(g);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250/2 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }
  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));


  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(r);
  strokeWeight(3);
  rect(depx, depy, wid , hei);

  var depdis= dist(mouseX, mouseY, depx, depy)
  if (dragging4 == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    rect(depx, depy, wid , hei);
    dinger();
  }

  var dis2 = dist(x4, y4, depx, depy)
  if (dragging4 == false && dis2 < wid/2 && rollover4 == false){

    tracking++;
  }
  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)


//Instructions
fill(r);
noStroke();
textAlign(LEFT);
textSize(15);
text('Press Play for Audio \nDrag Album Box to Square', 10, 45)

textAlign(CENTER,CENTER)

////////// 1/2 and Bubble

translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)

  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('2/2', trx, trt)
///Progress bubbles
translate(-30, 0);
strokeWeight(2)
stroke(r)
fill(g)
ellipse(windowWidth-220, windowHeight-30, 20)
strokeWeight(1)
stroke(g)
fill(w)
ellipse(windowWidth-190, windowHeight-30, 20)
ellipse(windowWidth-160, windowHeight-30, 20)
ellipse(windowWidth-130, windowHeight-30, 20)
ellipse(windowWidth-100, windowHeight-30, 20)
ellipse(windowWidth-70, windowHeight-30, 20)
ellipse(windowWidth-40, windowHeight-30, 20)
ellipse(windowWidth-10, windowHeight-30, 20)


  //////////////////Photos of Albums and Artists
  translate(30, 0)


  //rightartist    
  imageMode(CENTER, CENTER)
  image(iop, x4, y4, wid, wid)
  //wrongartists
  image(rp, x2, y2, wid, hei)
  image(krazy, x6, y6, wid, hei)

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && dragging4 == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)


    }
  



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging2 == true || mouseX > windowWidth / 2 && dragging6 == true ) {
    console.log('nay')

    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    noStroke();
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
  
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(r);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Album', artx, hi)
}
//CARDI FACT
function fact1() {
  background(g)
  button2.hide();
  button.hide();

 

  /////////////////////////////visuals
  ///Page
  imageMode(CENTER, CENTER)
  image(logo, sq, windowHeight - windowHeight + 100, 240, 60)

  
  ////NEXT TRACK
  fill(w);
  stroke(g);
  strokeWeight(1);
  rectMode(CENTER,CENTER)
  rect(nx, ny, 250, 40, 10);
  fill(g);
  noStroke();
  textSize(15);
  text('Press RIGHT ARROW To Continue', nx, ny);

console.log(mouseY)

  var n = dist(mouseX, mouseY, nx, ny)
  if (n < 250 && mouseY > 412 && mouseY <453){
    inNext = true;
    console.log('in rect')
  }else {
inNext = false;
  }

fill(r);
  stroke(w);
  strokeWeight(3)
  textSize(30);
  noStroke();
  textAlign(CENTER, CENTER);
  text('"I LIKE IT" BY CARDI B', sq, hi  - 150);


  textSize(23);
  fill(w)
  text('DID YOU KNOW: \n \n IN OCTOBER OF 2017, CARDI B BECAME THE FIRST SOLO FEMALE RAPPER TO REACH NUMBER 1 \n ON THE BILLBOARD HOT 100 SINCE 1998 WITH HER DEBUT SINGLE "BODAK YELLOW"', sq, hi  - 50);


  /////////

  //Page Title & Box
  fill(w)
  stroke(g);
  strokeWeight(2)
  rectMode(CENTER)
  rect(90, 25, 170, 40, 200)
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15)
  text('MATCH THE TRACK', 90, 25)
}

//////NYSOM//////////
function p3() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 

  ///////////////AUDIO PLAY VISUAL
  completion = empire.currentTime() / empire.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);


  ///////////////////Object Drag
  //////HEADS
  //right head (HOV)
  var d = dist(mouseX, mouseY, bx, by)
  if (d < wid / 2) {
    rolloverb = true;
    console.log('u r in bubble')
  }
  else {
    rolloverb = false;
  }
  if (draggingb) {
    bx = mouseX + offsetXb;
    by = mouseY + offsetYb;
  }


  //////////////// wrong head
  var d2 = dist(mouseX, mouseY, bx3, by3)
  if (d2 < wid / 2) {
    rollover3b = true;
  }
  else {
    rollover3b = false;
  }
  if (dragging3b) {
    bx3 = mouseX + offsetX3b;
    by3 = mouseY + offsetY3b;
  }

  var d3 = dist(mouseX, mouseY, bx5, by5)
  if (d3 < wid / 2) {
    rollover5b = true;
  }
  else {
    rollover5b = false;
  }
  if (dragging5b) {
    bx5 = mouseX + offsetX5b;
    by5 = mouseY + offsetY5b;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)


  ////NEXT TRACK
//   fill(w);
//   stroke(r);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// // console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }

  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(g);
  strokeWeight(3);
  ellipse(depx, depy, wid, hei, 300);

  //right cricle feedback
  var depdis= dist(mouseX, mouseY, depx, depy)
  if (draggingb == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    ellipse(depx, depy, wid, hei, 300);
    dinger(); 
  }
  var dis2 = dist(bx, by, depx, depy)
  if (draggingb == false && dis2 < wid/2 && rolloverb == false){

    tracking++;
  }
  

  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  // fill(w);
  // stroke(r);
  // strokeWeight(1);
  // rect(windowWidth / 2 + 300, windowHeight / 2 - 145, wid - 10, hei - 10, 10);

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)

//Instructions
  fill(r);
  noStroke();
  textAlign(LEFT);
  textSize(15)
  text('Press Play for Audio \nDrag Artist Bubble to Circle', 10, 45)

  textAlign(CENTER,CENTER)

////////// 1/2 and Bubble

translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)
  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('1/2', trx, trt)
  ///Progress bubbles
  translate(-30, 0);
  strokeWeight(2)
  noStroke();
  fill(g)
  ellipse(windowWidth-220, windowHeight-30, 20)
 
  strokeWeight(2)
  stroke(r)
  fill(g)
  ellipse(windowWidth-190, windowHeight-30, 20)
  strokeWeight(1)
  stroke(g)
  fill(w)
  ellipse(windowWidth-160, windowHeight-30, 20)
  ellipse(windowWidth-130, windowHeight-30, 20)
  ellipse(windowWidth-100, windowHeight-30, 20)
  ellipse(windowWidth-70, windowHeight-30, 20)
  ellipse(windowWidth-40, windowHeight-30, 20)
  ellipse(windowWidth-10, windowHeight-30, 20)
  //////////////////Photos of Albums and Artists

  translate(30, 0)

  //rightartist    
  imageMode(CENTER, CENTER)
  image(jay, bx, by, wid, hei)
  //wrongartists
  image(fw, bx3, by3, wid, hei)
  image(wiz, bx5, by5, wid, hei)

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && dragging == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)

    //not working to make ding only play once
    }



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging3b == true || mouseX > windowWidth / 2 && dragging5b == true) {
    console.log('nay')
noStroke();
    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(g);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Artist', artx, hi)
}
function p3a() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 
 //////////////////go to next page if right head is placed and mouse is out of bubble -- NOT WORKING TRY DIST
//  if (x > windowWidth / 2 + 350 && y > windowHeight / 2 + 100 && dragging == false && rollover == false) {
//   //setTimeout not working
//   tracking == tracking++
// }

  ///////////////AUDIO PLAY VISUAL
  completion = empire.currentTime() / empire.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);

  ///////////////////Object Drag
  //////HEADS
  //right album (iop)
  var d = dist(mouseX, mouseY, bx4, by4)
  if (d < wid / 2) {
    rollover4b = true;
    console.log('u r in bubble')
  }
  else {
    rollover4b = false;
  }
  if (dragging4b) {
   bx4 = mouseX + offsetX4b;
    by4 = mouseY + offsetY4b;
  }


  //////////////// wrong album
  var d2 = dist(mouseX, mouseY, bx2, by2)
  if (d2 < wid / 2) {
    rollover2b = true;
  }
  else {
    rollover2b = false;
  }
  if (dragging2b) {
    bx2 = mouseX + offsetX2b;
    by2 = mouseY + offsetY2b;
  }

  var d3 = dist(mouseX, mouseY, bx6, by6)
  if (d3 < wid / 2) {
    rollover6b = true;
  }
  else {
    rollover6b = false;
  }
  if (dragging6b) {
    bx6 = mouseX + offsetX6b;
    by6 = mouseY + offsetY6b;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)

  
  ////NEXT TRACK
//   fill(w);
//   stroke(g);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250/2 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }
  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));


  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(r);
  strokeWeight(3);
  rect(depx, depy, wid , hei);

  var depdis= dist(mouseX, mouseY, depx, depy)
  if (dragging4b == true && depdis < wid/2 || rollover4b == true && depdis < wid/2){
    fill(g);
    stroke(g);
    rect(depx, depy, wid , hei);
    dinger();
  }
    var dis2 = dist(bx4, by4, depx, depy)
    if (dragging4b == false && dis2 < wid/2 && rollover4b == false){
  
      tracking++;
    
  }

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)


//Instructions
fill(r);
noStroke();
textAlign(LEFT);
textSize(15);
text('Press Play for Audio \nDrag Album Box to Square', 10, 45)

textAlign(CENTER,CENTER)

////////// 1/2 and Progress Bubbles

translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)

  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('2/2', trx, trt)
///Progress bubbles

translate(-30, 0);
strokeWeight(2)
noStroke();
fill(g)
ellipse(windowWidth-220, windowHeight-30, 20)

strokeWeight(2)
stroke(r)
fill(g)
ellipse(windowWidth-190, windowHeight-30, 20)
strokeWeight(1)
stroke(g)
fill(w)
ellipse(windowWidth-160, windowHeight-30, 20)
ellipse(windowWidth-130, windowHeight-30, 20)
ellipse(windowWidth-100, windowHeight-30, 20)
ellipse(windowWidth-70, windowHeight-30, 20)
ellipse(windowWidth-40, windowHeight-30, 20)
ellipse(windowWidth-10, windowHeight-30, 20)
//////////////////Photos of Albums and Artists

translate(30, 0)
  //rightalbum    
  imageMode(CENTER, CENTER)
  image(bp3, bx4, by4, wid, hei)
  //wrongalbums
  image(wattba, bx2, by2, wid, hei)
  image(damn, bx6, by6, wid, hei)

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && dragging4b == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)

  
    }
  



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging2b == true || mouseX > windowWidth / 2 && dragging6b == true ) {
    console.log('nay')

    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
  buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(r);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Album', artx, hi)
}
//HOV FACT
function fact2() {
  background(g)
  button2.hide();
  button.hide();

  // if (inNext == true && mouseIsPressed) {
  //   console.log('cool');
  //   tracking++;
  // }

  /////////////////////////////visuals
  ///Page
  imageMode(CENTER, CENTER)
  image(logo, sq, windowHeight - windowHeight + 100, 240, 60)

  
  ////NEXT TRACK
  fill(w);
  stroke(g);
  strokeWeight(1);
  rectMode(CENTER,CENTER)
  rect(nx, ny, 250, 40, 10);
  fill(g);
  noStroke();
  textSize(15);
  text('Press RIGHT ARROW To Continue', nx, ny);

console.log(mouseY)

  var n = dist(mouseX, mouseY, nx, ny)
  if (n < 250 && mouseY > 412 && mouseY <453){
    inNext = true;
    console.log('in rect')
  }else {
inNext = false;
  }

fill(r);
  stroke(w);
  strokeWeight(3)
  textSize(30);
  noStroke();
  textAlign(CENTER, CENTER);
  text('"EMPIRE STATE OF MIND FT. ALICIA KEYS" BY JAY-Z', sq, hi  - 150);


  textSize(23);
  fill(w)
  text('DID YOU KNOW: \n \n "EMPIRE STATE OF MIND" WAS JAY-Zs FIRST NUMBER 1 SINGLE ON THE BILLBOARD HOT 100 CHART?', sq, hi  - 50);


  /////////

  //Page Title & Box
  fill(w)
  stroke(g);
  strokeWeight(2)
  rectMode(CENTER)
  rect(90, 25, 170, 40, 200)
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15)
  text('MATCH THE TRACK', 90, 25)
}

//////humble//////////
function p4() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 

  ///////////////AUDIO PLAY VISUAL
  completion = humb.currentTime() / humb.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);


  ///////////////////Object Drag
  //////HEADS
  //right head (kdot)
  var d = dist(mouseX, mouseY, cx3, cy3)
  if (d < wid / 2) {
    rollover3c = true;
    console.log('u r in bubble')
  }
  else {
    rollover3c = false;
  }
  if (dragging3c) {
    cx3 = mouseX + offsetX3c;
    cy3 = mouseY + offsetY3c;
  }


  //////////////// wrong head
  var d2 = dist(mouseX, mouseY, cx, cy)
  if (d2 < wid / 2) {
    rolloverc = true;
  }
  else {
    rolloverc = false;
  }
  if (draggingc) {
    cx = mouseX + offsetXc;
    cy = mouseY + offsetYc;
  }

  var d3 = dist(mouseX, mouseY, cx5, cy5)
  if (d3 < wid / 2) {
    rollover5c = true;
  }
  else {
    rollover5c = false;
  }
  if (dragging5c) {
    cx5 = mouseX + offsetX5c;
    cy5 = mouseY + offsetY5c;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)


//   ////NEXT TRACK
//   fill(w);
//   stroke(r);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// // console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }

  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(g);
  strokeWeight(3);
  ellipse(depx, depy, wid, hei, 300);

  //right cricle feedback
  var depdis= dist(mouseX, mouseY, depx, depy)
  if (dragging3c == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    ellipse(depx, depy, wid, hei, 300);
    dinger(); 
  }
  var dis2 = dist(cx3, cy3, depx, depy)
  if (dragging3c == false && dis2 < wid/2 && rollover3c == false){
    tracking++;
  }

  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  // fill(w);
  // stroke(r);
  // strokeWeight(1);
  // rect(windowWidth / 2 + 300, windowHeight / 2 - 145, wid - 10, hei - 10, 10);

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)

//Instructions
  fill(r);
  noStroke();
  textAlign(LEFT);
  textSize(15)
  text('Press Play for Audio \nDrag Artist Bubble to Circle', 10, 45)

  textAlign(CENTER,CENTER)

////////// 1/2 and Progress Bubbles

translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)


  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('1/2', trx, trt)
  ///Progress bubbles
  translate(-30, 0);
  strokeWeight(2)
  noStroke();
  fill(g)
  ellipse(windowWidth-220, windowHeight-30, 20)
  ellipse(windowWidth-190, windowHeight-30, 20)
  strokeWeight(2)
  stroke(r)
  fill(g)
  ellipse(windowWidth-160, windowHeight-30, 20)
  strokeWeight(1)
  stroke(g)
  fill(w)
  
  ellipse(windowWidth-130, windowHeight-30, 20)
  ellipse(windowWidth-100, windowHeight-30, 20)
  ellipse(windowWidth-70, windowHeight-30, 20)
  ellipse(windowWidth-40, windowHeight-30, 20)
  ellipse(windowWidth-10, windowHeight-30, 20)
  //////////////////Photos of Albums and Artists

  translate(30, 0)

  //rightartist    
  imageMode(CENTER, CENTER)
  image(kl, cx3, cy3, wid, hei);
  //wrongartists
  image(yg, cx, cy, wid, hei);
  image(future, cx5, cy5, wid, hei);

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && dragging3c == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)
dinger();
    //not working to make ding only play once
    }



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging5c == true || mouseX > windowWidth / 2 && draggingc == true) {
    console.log('nay')
noStroke();
    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(g);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Artist', artx, hi)
}
function p4a() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 

  ///////////////AUDIO PLAY VISUAL
  completion = humb.currentTime() / humb.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);


  ///////////////////Object Drag
  //////HEADS
  //right album (kdot)
  var d = dist(mouseX, mouseY, cx6, cy6)
  if (d < wid / 2) {
    rollover6c = true;
    console.log('u r in bubble')
  }
  else {
    rollover6c = false;
  }
  if (dragging6c) {
    cx6 = mouseX + offsetX6c;
    cy6 = mouseY + offsetY6c;
  }


  //////////////// wrong head
  var d2 = dist(mouseX, mouseY, cx2, cy2)
  if (d2 < wid / 2) {
    rollover2c = true;
  }
  else {
    rollover2c = false;
  }
  if (dragging2c) {
    cx2 = mouseX + offsetX2c;
    cy2 = mouseY + offsetY2c;
  }

  var d3 = dist(mouseX, mouseY, cx4, cy4)
  if (d3 < wid / 2) {
    rollover4c = true;
  }
  else {
    rollover4c = false;
  }
  if (dragging4c) {
    cx4 = mouseX + offsetX4c;
    cy4 = mouseY + offsetY4c;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)


//   ////NEXT TRACK
//   fill(w);
//   stroke(r);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// // console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }

  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(r);
  strokeWeight(3);
  rect(depx, depy, wid , hei);

  //right cricle feedback
  var depdis= dist(mouseX, mouseY, depx, depy)
  if (dragging6c == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    rect(depx, depy, wid , hei);
    dinger(); 
  }
  var dis2 = dist(cx6, cy6, depx, depy)
  if (dragging6c == false && dis2 < wid/2 && rollover6c == false){
    tracking++;
  }

  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  // fill(w);
  // stroke(r);
  // strokeWeight(1);
  // rect(windowWidth / 2 + 300, windowHeight / 2 - 145, wid - 10, hei - 10, 10);

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)

//Instructions
  fill(r);
  noStroke();
  textAlign(LEFT);
  textSize(15)
  text('Press Play for Audio \nDrag Artist Bubble to Circle', 10, 45)

  textAlign(CENTER,CENTER)

////////// 1/2 and Progress Bubbles

translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)


  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('2/2', trx, trt)
  ///Progress bubbles
  translate(-30, 0);
  strokeWeight(2)
  noStroke();
  fill(g)
  ellipse(windowWidth-220, windowHeight-30, 20)
  ellipse(windowWidth-190, windowHeight-30, 20)
  strokeWeight(2)
  stroke(r)
  fill(g)
  ellipse(windowWidth-160, windowHeight-30, 20)
  strokeWeight(1)
  stroke(g)
  fill(w)
  
  ellipse(windowWidth-130, windowHeight-30, 20)
  ellipse(windowWidth-100, windowHeight-30, 20)
  ellipse(windowWidth-70, windowHeight-30, 20)
  ellipse(windowWidth-40, windowHeight-30, 20)
  ellipse(windowWidth-10, windowHeight-30, 20)
  //////////////////Photos of Albums and Artists

  translate(30, 0)

  //rightartist    
  imageMode(CENTER, CENTER)
  image(damn, cx6, cy6, wid, hei);
  //wrongartists
  image(tc, cx2, cy2, wid, hei);
  image(rp, cx4, cy4, wid, hei);

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && dragging6c == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)
dinger();
    //not working to make ding only play once
    }



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging2c == true || mouseX > windowWidth / 2 && dragging4c == true) {
    console.log('nay')
noStroke();
    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(g);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Artist', artx, hi)
}
//kendrick FACT
function fact4() {
  background(g)
  button2.hide();
  button.hide();

  /////////////////////////////visuals
  ///Page
  imageMode(CENTER, CENTER)
  image(logo, sq, windowHeight - windowHeight + 100, 240, 60)

  
  ////NEXT TRACK
  fill(w);
  stroke(g);
  strokeWeight(1);
  rectMode(CENTER,CENTER)
  rect(nx, ny, 250, 40, 10);
  fill(g);
  noStroke();
  textSize(20);
  text('PRESS To Continue', nx, ny);

console.log(mouseY)

  var n = dist(mouseX, mouseY, nx, ny)
  if (n < 250 && mouseY > 412 && mouseY <453){
    inNext = true;
    console.log('in rect')
  }else {
inNext = false;
  }

fill(r);
  stroke(w);
  strokeWeight(3)
  textSize(30);
  noStroke();
  textAlign(CENTER, CENTER);
  text('"HUMBLE" BY KENDRICK LAMAR', sq, hi  - 150);


  textSize(23);
  fill(w)
  text('DID YOU KNOW: \n \n KENDRICK LAMAR IS THE ONLY RAPPER TO ATTAIN A PULLITZER PRIZE FOR HIS LAST ALBUM, "DAMN"', sq, hi  - 50);


  /////////

  //Page Title & Box
  fill(w)
  stroke(g);
  strokeWeight(2)
  rectMode(CENTER)
  rect(90, 25, 170, 40, 200)
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15)
  text('MATCH THE TRACK', 90, 25)
}

//////the motto///////
function p5() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 

  ///////////////AUDIO PLAY VISUAL
  completion = motto.currentTime() / motto.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);


  ///////////////////Object Drag
  //////HEADS
  //right head (drake)
  var d = dist(mouseX, mouseY, dx, dy)
  if (d < wid / 2) {
    rolloverd = true;
    console.log('u r in bubble')
  }
  else {
    rolloverd = false;
  }
  if (draggingd) {
    dx = mouseX + offsetXd;
    dy = mouseY + offsetYd;
  }


  //////////////// wrong head
  var d2 = dist(mouseX, mouseY, dx5, dy5)
  if (d2 < wid / 2) {
    rollover5d = true;
  }
  else {
    rollover5d = false;
  }
  if (dragging5d) {
    dx5 = mouseX + offsetX5d;
    dy5= mouseY + offsetY5d;
  }

  var d3 = dist(mouseX, mouseY, dx3, dy3)
  if (d3 < wid / 2) {
    rollover3d = true;
  }
  else {
    rollover3d = false;
  }
  if (dragging3d) {
    dx3 = mouseX + offsetX3d;
    dy3 = mouseY + offsetY3d;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)


//   ////NEXT TRACK
//   fill(w);
//   stroke(r);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// // console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }

  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(g);
  strokeWeight(3);
  ellipse(depx, depy, wid, hei, 300);

  //right ciicle feedback
  var depdis= dist(mouseX, mouseY, depx, depy)
  if (draggingd == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    ellipse(depx, depy, wid, hei, 300);
    dinger(); 
  }
  var dis2 = dist(dx, dy, depx, depy)
  if (draggingd == false && dis2 < wid/2 && rolloverd == false){
    tracking++;
  }

  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  // fill(w);
  // stroke(r);
  // strokeWeight(1);
  // rect(windowWidth / 2 + 300, windowHeight / 2 - 145, wid - 10, hei - 10, 10);

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)

//Instructions
  fill(r);
  noStroke();
  textAlign(LEFT);
  textSize(15)
  text('Press Play for Audio \nDrag Artist Bubble to Circle', 10, 45)

  textAlign(CENTER,CENTER)

////////// 1/2 and Progress Bubbles
translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)
  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('1/2', trx, trt)
  ///Progress bubbles
  translate(-30, 0);
  strokeWeight(2)
  noStroke();
  fill(g)
  ellipse(windowWidth-220, windowHeight-30, 20)
  ellipse(windowWidth-190, windowHeight-30, 20)
  ellipse(windowWidth-160, windowHeight-30, 20)
  strokeWeight(2)
  stroke(r)
  fill(g)
  
  ellipse(windowWidth-130, windowHeight-30, 20)
  strokeWeight(1)
  stroke(g)
  fill(w)

  ellipse(windowWidth-100, windowHeight-30, 20)
  ellipse(windowWidth-70, windowHeight-30, 20)
  ellipse(windowWidth-40, windowHeight-30, 20)
  ellipse(windowWidth-10, windowHeight-30, 20)
  //////////////////Photos of Albums and Artists

  translate(30, 0)

  //rightartist    
  imageMode(CENTER, CENTER)
  image(drake, dx, dy, wid, hei);
  //wrongartists
  image(lw, dx3, dy3, wid, hei);
  image(future, dx5, dy5, wid, hei);

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && draggingd == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)
dinger();
    //not working to make ding only play once
    }



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging5d == true || mouseX > windowWidth / 2 && dragging3d == true) {
    console.log('nay')
noStroke();
    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(g);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Artist', artx, hi)
}
function p5a() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 

  ///////////////AUDIO PLAY VISUAL
  completion = motto.currentTime() / motto.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);


  ///////////////////Object Drag
  //////HEADS
  //right head (drake)
  var d = dist(mouseX, mouseY, dx2, dy2)
  if (d < wid / 2) {
    rollover2d = true;
    console.log('u r in bubble')
  }
  else {
    rollover2d = false;
  }
  if (dragging2d) {
    dx2 = mouseX + offsetX2d;
    dy2 = mouseY + offsetY2d;
  }


  //////////////// wrong head
  var d2 = dist(mouseX, mouseY, dx6, dy6)
  if (d2 < wid / 2) {
    rollover6d = true;
  }
  else {
    rollover6d = false;
  }
  if (dragging6d) {
    dx6 = mouseX + offsetX6d;
    dy6= mouseY + offsetY6d;
  }

  var d3 = dist(mouseX, mouseY, dx4, dy4)
  if (d3 < wid / 2) {
    rollover4d = true;
  }
  else {
    rollover4d = false;
  }
  if (dragging4d) {
    dx4 = mouseX + offsetX4d;
    dy4 = mouseY + offsetY4d;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)


//   ////NEXT TRACK
//   fill(w);
//   stroke(r);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// // console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }

  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(r);
  strokeWeight(3);
  rect(depx, depy, wid , hei);

  //right ciicle feedback
  var depdis= dist(mouseX, mouseY, depx, depy)
  if (dragging2d == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    rect(depx, depy, wid , hei);
    dinger();
  }
  var dis2 = dist(dx2, dy2, depx, depy)
  if (dragging2d == false && dis2 < wid/2 && rollover2d == false){
    tracking++;
  }

  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  // fill(w);
  // stroke(r);
  // strokeWeight(1);
  // rect(windowWidth / 2 + 300, windowHeight / 2 - 145, wid - 10, hei - 10, 10);

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)

//Instructions
  fill(r);
  noStroke();
  textAlign(LEFT);
  textSize(15)
  text('Press Play for Audio \nDrag Artist Bubble to Circle', 10, 45)

  textAlign(CENTER,CENTER)

////////// 1/2 and Progress Bubbles
translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)
  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('2/2', trx, trt)
  ///Progress bubbles
  translate(-30, 0);
  strokeWeight(2)
  noStroke();
  fill(g)
  ellipse(windowWidth-220, windowHeight-30, 20)
  ellipse(windowWidth-190, windowHeight-30, 20)
  ellipse(windowWidth-160, windowHeight-30, 20)
  strokeWeight(2)
  stroke(r)
  fill(g)
  
  ellipse(windowWidth-130, windowHeight-30, 20)
  strokeWeight(1)
  stroke(g)
  fill(w)

  ellipse(windowWidth-100, windowHeight-30, 20)
  ellipse(windowWidth-70, windowHeight-30, 20)
  ellipse(windowWidth-40, windowHeight-30, 20)
  ellipse(windowWidth-10, windowHeight-30, 20)
  //////////////////Photos of Albums and Artists

  translate(30, 0)

  //rightartist    
  imageMode(CENTER, CENTER)
  image(tc, dx2, dy2, wid, hei);
  //wrongartists
  image(wattba, dx6, dy6, wid, hei);
  image(fetty, dx4, dy4, wid, hei);

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && dragging2d == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)
dinger();
    //not working to make ding only play once
    }



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging4d == true || mouseX > windowWidth / 2 && dragging6d == true) {
    console.log('nay')
noStroke();
    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(g);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Album', artx, hi)
}
//drake FACT
function fact5() {
  background(g)
  button2.hide();
  button.hide();

  /////////////////////////////visuals
  ///Page
  imageMode(CENTER, CENTER)
  image(logo, sq, windowHeight - windowHeight + 100, 240, 60)

  
  ////NEXT TRACK
  fill(w);
  stroke(g);
  strokeWeight(1);
  rectMode(CENTER,CENTER)
  rect(nx, ny, 250, 40, 10);
  fill(g);
  noStroke();
  textSize(20);
  text('PRESS To Continue', nx, ny);

console.log(mouseY)

  var n = dist(mouseX, mouseY, nx, ny)
  if (n < 250 && mouseY > 412 && mouseY <453){
    inNext = true;
    console.log('in rect')
  }else {
inNext = false;
  }

fill(r);
  stroke(w);
  strokeWeight(3)
  textSize(30);
  noStroke();
  textAlign(CENTER, CENTER);
  text('"THE MOTTO FT. LIL WAYNE" BY DRAKE', sq, hi  - 150);


  textSize(23);
  fill(w)
  text('DID YOU KNOW: \n \n THE ALBUM “TAKE CARE” (DEBUTED NOV. 2011) RECENTLY BROKE THE RECORD FOR\n MOST WEEKS ON THE TOP R&B/HIP-HOP ALBUMS CHART (186 WEEKS)', sq, hi  - 50);


  /////////

  //Page Title & Box
  fill(w)
  stroke(g);
  strokeWeight(2)
  rectMode(CENTER)
  rect(90, 25, 170, 40, 200)
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15)
  text('MATCH THE TRACK', 90, 25)
}

//////thriftshop///////
function p6() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 

  ///////////////AUDIO PLAY VISUAL
  completion = motto.currentTime() / motto.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);


  ///////////////////Object Drag
  //////HEADS
  //right head (drake)
  var d = dist(mouseX, mouseY, dx, dy)
  if (d < wid / 2) {
    rolloverd = true;
    console.log('u r in bubble')
  }
  else {
    rolloverd = false;
  }
  if (draggingd) {
    dx = mouseX + offsetXd;
    dy = mouseY + offsetYd;
  }


  //////////////// wrong head
  var d2 = dist(mouseX, mouseY, dx5, dy5)
  if (d2 < wid / 2) {
    rollover5d = true;
  }
  else {
    rollover5d = false;
  }
  if (dragging5d) {
    dx5 = mouseX + offsetX5d;
    dy5= mouseY + offsetY5d;
  }

  var d3 = dist(mouseX, mouseY, dx3, dy3)
  if (d3 < wid / 2) {
    rollover3d = true;
  }
  else {
    rollover3d = false;
  }
  if (dragging3d) {
    dx3 = mouseX + offsetX3d;
    dy3 = mouseY + offsetY3d;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)


//   ////NEXT TRACK
//   fill(w);
//   stroke(r);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// // console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }

  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(g);
  strokeWeight(3);
  ellipse(depx, depy, wid, hei, 300);

  //right ciicle feedback
  var depdis= dist(mouseX, mouseY, depx, depy)
  if (draggingd == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    ellipse(depx, depy, wid, hei, 300);
    dinger(); 
  }
  var dis2 = dist(dx, dy, depx, depy)
  if (draggingd == false && dis2 < wid/2 && rolloverd == false){
    tracking++;
  }

  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  // fill(w);
  // stroke(r);
  // strokeWeight(1);
  // rect(windowWidth / 2 + 300, windowHeight / 2 - 145, wid - 10, hei - 10, 10);

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)

//Instructions
  fill(r);
  noStroke();
  textAlign(LEFT);
  textSize(15)
  text('Press Play for Audio \nDrag Artist Bubble to Circle', 10, 45)

  textAlign(CENTER,CENTER)

////////// 1/2 and Progress Bubbles
translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)
  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('1/2', trx, trt)
  ///Progress bubbles
  translate(-30, 0);
  strokeWeight(2)
  noStroke();
  fill(g)
  ellipse(windowWidth-220, windowHeight-30, 20)
  ellipse(windowWidth-190, windowHeight-30, 20)
  ellipse(windowWidth-160, windowHeight-30, 20)
  strokeWeight(2)
  stroke(r)
  fill(g)
  
  ellipse(windowWidth-130, windowHeight-30, 20)
  strokeWeight(1)
  stroke(g)
  fill(w)

  ellipse(windowWidth-100, windowHeight-30, 20)
  ellipse(windowWidth-70, windowHeight-30, 20)
  ellipse(windowWidth-40, windowHeight-30, 20)
  ellipse(windowWidth-10, windowHeight-30, 20)
  //////////////////Photos of Albums and Artists

  translate(30, 0)

  //rightartist    
  imageMode(CENTER, CENTER)
  image(drake, dx, dy, wid, hei);
  //wrongartists
  image(lw, dx3, dy3, wid, hei);
  image(future, dx5, dy5, wid, hei);

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && draggingd == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)
dinger();
    //not working to make ding only play once
    }



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging5d == true || mouseX > windowWidth / 2 && dragging3d == true) {
    console.log('nay')
noStroke();
    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(g);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Artist', artx, hi)
}
function p6a() {

  background(w)
  textFont(myr);

  ///////////////////////page interaction
  /////half gray

  if (mouseX > windowWidth / 2) {
    rectMode(CENTER, CENTER);
    noStroke();
    fill(231, 231, 231, 500);

    rect(windowWidth / 2 + 340, windowHeight / 2, windowWidth / 2, windowHeight);
  } else {
    noStroke()
    fill(240, 240, 240)
    rect(windowWidth / 2 - 340, windowHeight / 2, windowWidth / 2, windowHeight);
  }

 

  ///////////////AUDIO PLAY VISUAL
  completion = motto.currentTime() / motto.duration();
  fill(g)
  rect(windowWidth / 2 + 350, 300, 200, 5)
  noStroke()
  fill(r)
  ellipse((completion * 200) + windowWidth / 2 + 250, 300, 30, 30);


  ///////////////////Object Drag
  //////HEADS
  //right head (drake)
  var d = dist(mouseX, mouseY, dx2, dy2)
  if (d < wid / 2) {
    rollover2d = true;
    console.log('u r in bubble')
  }
  else {
    rollover2d = false;
  }
  if (dragging2d) {
    dx2 = mouseX + offsetX2d;
    dy2 = mouseY + offsetY2d;
  }


  //////////////// wrong head
  var d2 = dist(mouseX, mouseY, dx6, dy6)
  if (d2 < wid / 2) {
    rollover6d = true;
  }
  else {
    rollover6d = false;
  }
  if (dragging6d) {
    dx6 = mouseX + offsetX6d;
    dy6= mouseY + offsetY6d;
  }

  var d3 = dist(mouseX, mouseY, dx4, dy4)
  if (d3 < wid / 2) {
    rollover4d = true;
  }
  else {
    rollover4d = false;
  }
  if (dragging4d) {
    dx4 = mouseX + offsetX4d;
    dy4 = mouseY + offsetY4d;
  }
 

  /////////////////////////////visuals
  ///Page
  stroke(r)
  strokeWeight(3)
  line(sq, 0, sq, windowHeight)
  imageMode(CENTER, CENTER)
  image(logo, sq, hi, 240, 60)


//   ////NEXT TRACK
//   fill(w);
//   stroke(r);
//   strokeWeight(3);
//   rectMode(CENTER,CENTER)
//   rect(nx, ny, 250, 40, 10);
//   fill(g);
//   noStroke();
//   textSize(20);
//   text('PRESS To Continue', nx, ny);

// // console.log(mouseY)

//   var n = dist(mouseX, mouseY, nx, ny)
//   if (n < 250 && mouseY > 412 && mouseY <453){
//     inNext = true;
//     console.log('in rect')
//   }else {
// inNext = false;
//   }

  /////// Song Name, Boxes, Etc
  // fill(g);
  // noStroke();
  // textSize(50);
  // textAlign(CENTER, CENTER);
  // text('"I LIKE IT" BY', (windowWidth / 2) - 280, ((windowHeight / 2) - (145)));

  fill(w);
  stroke(r);
  strokeWeight(3);
  rect(depx, depy, wid , hei);

  //right ciicle feedback
  var depdis= dist(mouseX, mouseY, depx, depy)
  if (dragging2d == true && depdis < wid/2){
    fill(g);
    stroke(g);
    strokeWeight(3);
    rect(depx, depy, wid , hei);
    dinger();
  }
  var dis2 = dist(dx2, dy2, depx, depy)
  if (dragging2d == false && dis2 < wid/2 && rollover2d == false){
    tracking++;
  }

  // text('ON', (windowWidth / 2) + 150, ((windowHeight / 2) - (145)));

  // fill(w);
  // stroke(r);
  // strokeWeight(1);
  // rect(windowWidth / 2 + 300, windowHeight / 2 - 145, wid - 10, hei - 10, 10);

  /////////


//Title
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13)
  text('MATCH THE TRACK', 65, 15)

//Instructions
  fill(r);
  noStroke();
  textAlign(LEFT);
  textSize(15)
  text('Press Play for Audio \nDrag Artist Bubble to Circle', 10, 45)

  textAlign(CENTER,CENTER)

////////// 1/2 and Progress Bubbles
translate(20, 0)
trx = windowWidth-50
trt = 20
fill(g);
noStroke();
textSize(16)
text('PROGRESS:', trx-20, windowHeight-50)
  fill(w);
  strokeWeight(3);
  stroke(g)
  textSize(20)
  rect(trx, trt, 35, 35, 30)
  noStroke();
  fill(g);
  text('2/2', trx, trt)
  ///Progress bubbles
  translate(-30, 0);
  strokeWeight(2)
  noStroke();
  fill(g)
  ellipse(windowWidth-220, windowHeight-30, 20)
  ellipse(windowWidth-190, windowHeight-30, 20)
  ellipse(windowWidth-160, windowHeight-30, 20)
  strokeWeight(2)
  stroke(r)
  fill(g)
  
  ellipse(windowWidth-130, windowHeight-30, 20)
  strokeWeight(1)
  stroke(g)
  fill(w)

  ellipse(windowWidth-100, windowHeight-30, 20)
  ellipse(windowWidth-70, windowHeight-30, 20)
  ellipse(windowWidth-40, windowHeight-30, 20)
  ellipse(windowWidth-10, windowHeight-30, 20)
  //////////////////Photos of Albums and Artists

  translate(30, 0)

  //rightartist    
  imageMode(CENTER, CENTER)
  image(tc, dx2, dy2, wid, hei);
  //wrongartists
  image(wattba, dx6, dy6, wid, hei);
  image(fetty, dx4, dy4, wid, hei);

 

/////////////////////////right answer feedback

  if (mouseX > windowWidth / 2 + 200 && dragging2d == true) {
    console.log('yay')

    fill(g)
    rectMode(CENTER)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    textSize(30)
    text('RIGHT!', windowWidth / 2, windowHeight / 2)
dinger();
    //not working to make ding only play once
    }



  //wrong answer feedback
  if (mouseX > windowWidth / 2 && dragging4d == true || mouseX > windowWidth / 2 && dragging6d == true) {
    console.log('nay')
noStroke();
    fill(r)
    rect(windowWidth / 2, windowHeight / 2, 350, 200, 200)
    fill(w)
    text('WRONG! \n \n TRY AGAIN!', windowWidth / 2, windowHeight / 2)
    buzzer();


  }
  //Albums and Artists Titles
  // fill(g)
  // noStroke();
  // fill(w)
  // stroke(g);
  // strokeWeight(2)
  // rectMode(CENTER)
  // rect((windowWidth / 2) / 2, windowHeight / 2 + 30, 100, 30, 200)
  // rect(((windowWidth / 2) + (windowWidth / 2) / 2), windowHeight / 2 + 30, 100, 30, 200)
  // noStroke();
  fill(g);
  textSize(40)
  // text('Albums', (windowWidth / 2) / 2, windowHeight / 2 + 30)
  text('Album', artx, hi)
}
//drake FACT
function fact6() {
  background(g)
  button2.hide();
  button.hide();

  /////////////////////////////visuals
  ///Page
  imageMode(CENTER, CENTER)
  image(logo, sq, windowHeight - windowHeight + 100, 240, 60)

  
  ////NEXT TRACK
  fill(w);
  stroke(g);
  strokeWeight(1);
  rectMode(CENTER,CENTER)
  rect(nx, ny, 250, 40, 10);
  fill(g);
  noStroke();
  textSize(20);
  text('PRESS To Continue', nx, ny);

console.log(mouseY)

  var n = dist(mouseX, mouseY, nx, ny)
  if (n < 250 && mouseY > 412 && mouseY <453){
    inNext = true;
    console.log('in rect')
  }else {
inNext = false;
  }

fill(r);
  stroke(w);
  strokeWeight(3)
  textSize(30);
  noStroke();
  textAlign(CENTER, CENTER);
  text('"THE MOTTO FT. LIL WAYNE" BY DRAKE', sq, hi  - 150);


  textSize(23);
  fill(w)
  text('DID YOU KNOW: \n \n THE ALBUM “TAKE CARE” (DEBUTED NOV. 2011) RECENTLY BROKE THE RECORD FOR\n MOST WEEKS ON THE TOP R&B/HIP-HOP ALBUMS CHART (186 WEEKS)', sq, hi  - 50);


  /////////

  //Page Title & Box
  fill(w)
  stroke(g);
  strokeWeight(2)
  rectMode(CENTER)
  rect(90, 25, 170, 40, 200)
  fill(g);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(15)
  text('MATCH THE TRACK', 90, 25)
}




//click
function mousePressed() {
 
  //text('PRESS FOR NEXT TRACK', windowWidth - 100, windowHeight - 30);
  

  //movement

  //Cardi B Right Head Movement
  if (rollover == true) {
    dragging = true;
    offsetX = x - mouseX;
    offsetY = y - mouseY;
  } else { rollover = false }

  //wrong album
  if (rollover2 == true) {
    dragging2 = true;
    offsetX2 = x2 - mouseX;
    offsetY2 = y2 - mouseY;
  } else { rollover2 = false }
  

  //Kendrick Wrong Movement
  if (rollover3 == true) {
    dragging3 = true;
    offsetX3 = x3 - mouseX;
    offsetY3 = y3 - mouseY;
  } else { rollover3 = false }

// right album
if (rollover4 == true) {
  dragging4 = true;
  offsetX4 = x4 - mouseX;
  offsetY4 = y4 - mouseY;
} else { rollover4 = false }
  

  //Macklemore Wrong Movement
  if (rollover5 == true) {
    dragging5 = true;
    offsetX5 = x5 - mouseX;
    offsetY5 = y5 - mouseY;
  } else { rollover5 = false }

//wrong album
if (rollover6 == true) {
  dragging6 = true;
  offsetX6 = x6 - mouseX;
  offsetY6 = y6 - mouseY;
} else { rollover6 = false }
 
  //strokeWeight(2)
  stroke(r)
  ellipse(mouseX, mouseY, 10, 10)

////////////////////////artist 2

  //  Head Movement
  if (rolloverb == true) {
    draggingb = true;
    offsetXb = bx - mouseX;
    offsetYb = by - mouseY;
  } else { rolloverb = false }

  //wrong album
  if (rollover2b == true) {
    dragging2b = true;
    offsetX2b = bx2 - mouseX;
    offsetY2b = by2 - mouseY;
  } else { rollover2b = false }
  

  //Kendrick Wrong Movement
  if (rollover3b == true) {
    dragging3b = true;
    offsetX3b = bx3 - mouseX;
    offsetY3b = by3 - mouseY;
  } else { rollover3b = false }

// right album
if (rollover4b == true) {
  dragging4b = true;
  offsetX4b = bx4 - mouseX;
  offsetY4b = by4 - mouseY;
} else { rollover4b = false }
  

  if (rollover5b == true) {
    dragging5b = true;
    offsetX5b = bx5 - mouseX;
    offsetY5b = by5 - mouseY;
  } else { rollover5b = false }

//wrong album
if (rollover6b == true) {
  dragging6b = true;
  offsetX6b = bx6 - mouseX;
  offsetY6b = by6 - mouseY;
} else { rollover6b = false }
 

////////////////////////artist 3

  //  Head Movement
  if (rolloverc == true) {
    draggingc = true;
    offsetXc = cx - mouseX;
    offsetYc = cy - mouseY;
  } else { rolloverc = false }

  //wrong album
  if (rollover2c == true) {
    dragging2c = true;
    offsetX2c = cx2 - mouseX;
    offsetY2c = cy2 - mouseY;
  } else { rollover2c = false }
  

  //Kendrick Right Movement
  if (rollover3c == true) {
    dragging3c = true;
    offsetX3c = cx3 - mouseX;
    offsetY3c = cy3 - mouseY;
  } else { rollover3c = false }

// right album
if (rollover4c == true) {
  dragging4c = true;
  offsetX4c = cx4 - mouseX;
  offsetY4c = cy4 - mouseY;
} else { rollover4c = false }
  

  if (rollover5c == true) {
    dragging5c = true;
    offsetX5c = cx5 - mouseX;
    offsetY5c = cy5 - mouseY;
  } else { rollover5c = false }

//wrong album
if (rollover6c == true) {
  dragging6c = true;
  offsetX6c = cx6 - mouseX;
  offsetY6c = cy6 - mouseY;
} else { rollover6c = false }
 
////////////////////////artist 4

  //  right Head Movement
  if (rolloverd == true) {
    draggingd = true;
    offsetXd = dx - mouseX;
    offsetYd = dy - mouseY;
  } else { rolloverd = false }

  // album
  if (rollover2d == true) {
    dragging2d = true;
    offsetX2d = dx2 - mouseX;
    offsetY2d = dy2 - mouseY;
  } else { rollover2d = false }
  

  // Right Movement
  if (rollover3d == true) {
    dragging3d = true;
    offsetX3d = dx3 - mouseX;
    offsetY3d = dy3 - mouseY;
  } else { rollover3d = false }

// right album
if (rollover4d == true) {
  dragging4d = true;
  offsetX4d = dx4 - mouseX;
  offsetY4d = dy4 - mouseY;
} else { rollover4d = false }
  

  if (rollover5d == true) {
    dragging5d = true;
    offsetX5d = dx5 - mouseX;
    offsetY5d = dy5 - mouseY;
  } else { rollover5d = false }

//wrong album
if (rollover6d == true) {
  dragging6d = true;
  offsetX6d = dx6 - mouseX;
  offsetY6d = dy6 - mouseY;
} else { rollover6d = false }
 
////////////////////////artist 5

  //  right Head Movement
  if (rollovere == true) {
    dragginge = true;
    offsetXe = ex - mouseX;
    offsetYe = ey - mouseY;
  } else { rollovere = false }

  // album
  if (rollover2e == true) {
    dragging2e = true;
    offsetX2e = ex2 - mouseX;
    offsetY2e = ey2 - mouseY;
  } else { rollover2e = false }
  

  // Right Movement
  if (rollover3e == true) {
    dragging3e = true;
    offsetX3e = dxe - mouseX;
    offsetY3e = dye - mouseY;
  } else { rollover3e = false }

// right album
if (rollover4e == true) {
  dragging4e = true;
  offsetX4e = ex4 - mouseX;
  offsetY4e = ey4 - mouseY;
} else { rollover4e = false }
  

  if (rollover5e == true) {
    dragging5e = true;
    offsetX5e = ex5 - mouseX;
    offsetY5e = ey5 - mouseY;
  } else { rollover5e = false }

//wrong album
if (rollover6e == true) {
  dragging6e = true;
  offsetX6e = ex6 - mouseX;
  offsetY6e = ey6 - mouseY;
} else { rollover6e = false }

////////////////////////artist 6

  //  right Head Movement
  if (rolloverf == true) {
    draggingf = true;
    offsetXf = fx - mouseX;
    offsetYf = fy - mouseY;
  } else { rolloverf = false }

  // album
  if (rollover2f == true) {
    dragging2f = true;
    offsetX2f = fx2 - mouseX;
    offsetY2f = fy2 - mouseY;
  } else { rollover2f = false }
  

  // Right Movement
  if (rollover3f == true) {
    dragging3f = true;
    offsetX3f = dxf - mouseX;
    offsetY3f = dyf - mouseY;
  } else { rollover3f = false }

// right album
if (rollover4f == true) {
  dragging4f = true;
  offsetX4f = fx4 - mouseX;
  offsetY4f = fy4 - mouseY;
} else { rollover4f = false }
  

  if (rollover5f == true) {
    dragging5f = true;
    offsetX5f = fx5 - mouseX;
    offsetY5f = fy5 - mouseY;
  } else { rollover5f = false }

//wrong album
if (rollover6f == true) {
  dragging6f = true;
  offsetX6f = fx6 - mouseX;
  offsetY6f = fy6 - mouseY;
} else { rollover6f = false} 

}

//drop
function mouseReleased() {
  dragging = false;
  dragging2 = false;
  dragging3 = false;
  dragging4 = false;
  dragging5 = false;
  dragging6 = false;

  draggingb = false;
  dragging2b = false;
  dragging3b = false;
  dragging4b = false;
  dragging5b = false;
  dragging6b = false;

  draggingc = false;
  dragging2c = false;
  dragging3c = false;
  dragging4c = false;
  dragging5c = false;
  dragging6c = false;

  draggingd = false;
  dragging2d = false;
  dragging3d = false;
  dragging4d = false;
  dragging5d = false;
  dragging6d = false;

  dragginge = false;
  dragging2e = false;
  dragging3e = false;
  dragging4e = false;
  dragging5e = false;
  dragging6e = false;

  draggingf = false;
  dragging2f = false;
  dragging3f = false;
  dragging4f = false;
  dragging5f = false;
  dragging6f = false;

  // inNext=true;
}
