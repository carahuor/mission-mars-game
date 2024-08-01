/* VARIABLES */
//Global Variables
let screen = 0;

//Variables for Home Screen
let button;
let bPlay;

//Variables for Intro Dialogue
let first = true;
let sayCount = 0;
let choice1;
let choice2;
let speech = ["Hi there, astronaut! I'm Sky,\na flight controller of Mission: Mars.\nI'll be helping you throught the mission.",
  "\nYou're the first person to set foot on Mars! \nIsn't that exciting?",
  "So, you'll need to move your spaceship with \nthe arrow keys to collect crystals. Break \n3 boulders maximum by clicking them with \nyour mouse. (Challenge: Break only 1 boulder!)",
  "Wow, you're a natural! Time to return to Earth! \nNow, before you set off, you need to prepare \nyour spaceship for lift off.",
  "\nUh oh, looks like the spaceship is malfunctioning.",
  "\nYou're going to be alright! Have hope! \nLet- see wh- w- can d-",
  "You'll need to navigate back to Earth yourself! \nMove your mouse up and down to steer your \nspaceship away from asteroids and return to \nEarth! *silence*"];

//Variables for Asteroid Game
let started = false;
let count = 0;
let rock;
let s;
let h1, h2, h3, h4, h5;
let w;
let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21;

let ship;
let wall;
//let earth;

//Variables for Mars Game
let mStarted = false;
let mCount = 0;
let mR1, mR2, mR3, mR4, mR5, mR6, mR7, mR8, mR9, mR10, mR11, mR12, mR13;
let crystal;
let cCount = 0;
let c1, c2, c3;

let bRestore;

//Variable for end screen
let bAgain;

/* PRELOAD LOADS FILES */
function preload() {

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  background(40);

  //Variables for Home Screen
  button = new Group();
  button.collider = "k";
  button.w = 100;
  button.h = 50;

  bPlay = new button.Sprite(-100, -100);


  //Variables from Dialogue Screen
  choice1 = new button.Sprite(-100, -100);
  choice2 = new button.Sprite(-100, -100);

  //Variables for Asteroid Game

  //Wall Group
  wall = new Group();
  wall.collider = "s";

  //Wall Sprites
  new wall.Sprite(0, -1, canvas.width, 1);
  new wall.Sprite(0, canvas.height, canvas.width, canvas.height + 1);
  new wall.Sprite(0, -1, 1, canvas.height);
  new wall.Sprite(height, -1, 1, canvas.height);

  //Value for spacing between rocks
  s = 20;

  //Rock Group
  rock = new Group();
  rock.color = color(200);
  rock.r = (height - (6 * s)) / 10;
  rock.collider = "k";

  //Values for heights and width of rocks
  h1 = rock.r + s;
  h2 = 3 * rock.r + 2 * s;
  h3 = 5 * rock.r + 3 * s;
  h4 = 7 * rock.r + 4 * s;
  h5 = 9 * rock.r + 5 * s;
  w = width / 2;

  //1st Column of Rocks
  r1 = new rock.Sprite(-100, -100);
  r2 = new rock.Sprite(-100, -100);
  r3 = new rock.Sprite(-100, -100);
  r4 = new rock.Sprite(-100, -100);

  //2nd Column of Rocks
  r5 = new rock.Sprite(-100, -100);
  r6 = new rock.Sprite(-100, -100);
  r7 = new rock.Sprite(-100, -100);

  //3rd Column of Rocks
  r8 = new rock.Sprite(-100, -100);
  r9 = new rock.Sprite(-100, -100);
  r10 = new rock.Sprite(-100, -100);

  //4th Column of Rocks
  r11 = new rock.Sprite(-100, -100);
  r12 = new rock.Sprite(-100, -100);
  r13 = new rock.Sprite(-100, -100);

  //5th Column of Rocks
  r14 = new rock.Sprite(-100, -100);
  r15 = new rock.Sprite(-100, -100);
  r16 = new rock.Sprite(-100, -100);
  r17 = new rock.Sprite(-100, -100);

  //6th Column of Rocks
  r18 = new rock.Sprite(-100, -100);
  r19 = new rock.Sprite(-100, -100);
  r20 = new rock.Sprite(-100, -100);
  r21 = new rock.Sprite(-100, -100);

  ship = new Sprite(-100, -100, 50);


  //earth = new Sprite(-200,200, 50, "k");
  //earth.color = new color(255);


  //Variables for Mars Game

  //Restore Button
  bRestore = new button.Sprite(-100,-100);

  //Crystals
  crystal = new Group();
  crystal.collider = "k";
  c1 = new crystal.Sprite(-200,-200);
  c2 = new crystal.Sprite(-200,-200);
  c3 = new crystal.Sprite(-200,-200);

  //1st Column of Rocks
  mR1 = new rock.Sprite(-300, -300);
  mR2 = new rock.Sprite(-300, -300);
  mR3 = new rock.Sprite(-300, -300);

  //2nd Column of Rocks
  mR4 = new rock.Sprite(-300, -300);
  mR5 = new rock.Sprite(-300, -300);

  //3rd Column of Rocks
  mR6 = new rock.Sprite(-300, -300);
  mR7 = new rock.Sprite(-300, -300);
  mR8 = new rock.Sprite(-300, -300);
  mR9 = new rock.Sprite(-300, -300);

  //4th Column of Rocks
  mR10 = new rock.Sprite(-300, -300);
  mR11 = new rock.Sprite(-300, -300);
  mR12 = new rock.Sprite(-300, -300);

  //5th Column of Rocks
  mR13 = new rock.Sprite(-300, -300);


  //End Screen
  bAgain = new button.Sprite(-100, -100);
}

/* DRAW LOOP REPEATS */
function draw() {
  noStroke();
  if (screen == 0) {
    showHomeScreen();
  } else if (screen == 1) {
    showDialogueScreen();
  } else if (screen == 2) {
    if (!mStarted) {
      restoreMars();
      mStarted = true;
    }
    showMarsScreen();
  } else if (screen == 3) {
    showDialogueScreen();
  } else if (screen == 4) {
    if (!started) {
      restoreAsteroids();
      ship.pos = { x: 30, y: h3 };
      started = true;
    }
    showAsteroidScreen();
  }
  else if (screen == 5) {
    showEarthScreen();
  } else if (screen == 6) {
    showEndScreen();
  }


}

/* FUNCTIONS */
function showHomeScreen() {
  background(40);
  fill(255);
  bPlay.pos = { x: width / 2, y: height / 2 + 100 };
  bPlay.text = "Play";
  if (bPlay.mouse.presses()) {
    bPlay.pos = { x: -100, y: 100 };
    screen++;
  }
}

function showDialogueScreen() {
  textAlign(CENTER);
  textSize(15);

  background(40);
  fill(255);
  rect(20, 20, width - 40, 100, 10, 10, 10, 10);
  text("Press 'space' to continue", width / 2, 140);
  fill(0);
  text(speech[sayCount], width / 2, 50);


  if (kb.pressed("space")) {
    sayCount++;
  }
  if (first && sayCount == 3){
    screen++;
    first = false;
  }
  else if (sayCount == 7) {
    screen++;
    sayCount = 0;
    first = true;
  }




}

function showMarsScreen() {
  background(40);
  fill(255);
  textAlign(LEFT);
  textSize(10);
  text("Move your spaceship with arrow keys to collect \ncrystal samples. Break 3 boulders maximum by \nclicking them with your mouse. \n(Challenge: Break only 1 boulder!)", 90, height-50);
  text("Boulders Left: "+(3-mCount)+"\nCrystals Left: "+ (3-cCount), 10, 15);
  textAlign(CENTER);

  //Button to reset board
  bRestore.w = 80;
  bRestore.h = 40;
  bRestore.pos = {x: width - 50, y:height - 30};
  bRestore.text = "Reset";

  if (bRestore.mouse.presses()){
    restoreMars();
    mCount = 0;
    cCount = 0;
  }

  //Moves screens when player destroys max 3 boulders and collected all 3 crystals
  if (cCount == 3 && mCount <= 3){
    screen++;
    cCount = 0;
    mCount = 0;
    mStarted = false;
    hideMars();
  }


  //Move ship with arrow keys
  if (kb.pressing("up")) {
    ship.vel.y = -5;
  } else if (kb.pressing("down")) {
    ship.vel.y = 5;
  } else ship.vel.y = 0;

  if (kb.pressing("left")) {
    ship.vel.x = -5;
  } else if (kb.pressing("right")) {
    ship.vel.x = 5;
  } else {
    ship.vel.x = 0;
  }

  //Makes rocks disappear when clicked, Does not allow player to break more than 3 boulders
  if (mCount >= 3){
    //Nothing happens, no boulders disappear
  }
  else if (mR1.mouse.presses()){
    mR1.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR2.mouse.presses()){
    mR2.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR3.mouse.presses()){
    mR3.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR4.mouse.presses()){
    mR4.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR5.mouse.presses()){
    mR5.pos = {x:-300,y:-300};
    mCount++;
  } 
  else if (mR6.mouse.presses()) {
    mR6.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR7.mouse.presses()) {
    mR7.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR8.mouse.presses()) {
    mR8.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR9.mouse.presses()) {
    mR9.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR10.mouse.presses()) {
    mR10.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR11.mouse.presses()) {
    mR11.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR12.mouse.presses()) {
    mR12.pos = {x:-300,y:-300};
    mCount++;
  }
  else if (mR13.mouse.presses()) {
    mR13.pos = {x:-300,y:-300};
    mCount++;
  }

  //crystals disappear when ship collides
  if (ship.collides(c1)) {
    c1.pos = {x:-300,y:-300};
    cCount++;
  }
  else if (ship.collides(c2)) {
    c2.pos = {x:-300,y:-300};
    cCount++;
  }
  else if (ship.collides(c3)) {
    c3.pos = {x:-300,y:-300};
    cCount++;
  }



}

function restoreMars(){
  //Crystals
  c1.pos  = {x:h2,y:h1};
  c2.pos = {x:h2,y:h4};
  c3.pos = {x:h4,y:h1};

  //1st Column of Rocks
  mR1.pos = { x: h1, y: h2 };
  mR2.pos = { x: h1, y: h4 };
  mR3.pos = { x: h1, y: h5 };

  //2nd Column of Rocks
  mR4.pos = { x: h2, y: h2 };
  mR5.pos = { x: h2, y: h3 };

  //3rd Column of Rocks
  mR6.pos = { x: h3, y: h1 };
  mR7.pos = { x: h3, y: h2 };
  mR8.pos = { x: h3, y: h3 };
  mR9.pos = { x: h3, y: h4 };

  //4th Column of Rocks
  mR10.pos = { x: h4, y: h2 };
  mR11.pos = { x: h4, y: h3 };
  mR12.pos = { x: h4, y: h4 };

  //5th Column of Rocks
  mR13.pos = { x: h5, y: h1 };

  //Ship
  ship.pos = { x: 30, y: h3 };
}

function hideMars() {
  //Crystals
  c1.pos  = {x:-300,y:-300};
  c2.pos = {x:-300,y:-300};
  c3.pos = {x:-300,y:-300};

  //1st Column of Rocks
  mR1.pos = { x:-300,y:-300};
  mR2.pos = {x:-300,y:-300};
  mR3.pos = {x:-300,y:-300};

  //2nd Column of Rocks
  mR4.pos = {x:-300,y:-300};
  mR5.pos = {x:-300,y:-300};

  //3rd Column of Rocks
  mR6.pos = {x:-300,y:-300};
  mR7.pos = {x:-300,y:-300};
  mR8.pos = {x:-300,y:-300};
  mR9.pos = {x:-300,y:-300};

  //4th Column of Rocks
  mR10.pos = {x:-300,y:-300};
  mR11.pos = {x:-300,y:-300};
  mR12.pos = {x:-300,y:-300};

  //5th Column of Rocks
  mR13.pos = {x:-300,y:-300};

  //Ship
  ship.pos = {x:-300,y:-300};

  //Restore Button
  bRestore.pos = { x: -100, y: -100};
}

function showAsteroidScreen() {
  background(40);
  fill(255);
  textAlign(LEFT);
  textSize(10);
  text("Move your mouse up and down to steer your spaceship away from asteroids\nRestart Counter: " + count, 10, 15);

  //Move ship with mouse
  ship.moveTowards(35, mouse.y, 1);

  //Resets to beginning when ship hits a rock
  if (ship.collides(rock)) {
    restoreAsteroids();
    count++;
  }

  //Rocks travel left across the screen until last column (save CPU resources)
  if (r21.x == 0) {
    rock.vel.x = 0;
    screen++;
    count = 0;
    started = false;
  } else {
    rock.vel.x = -4;
  }

}

function restoreAsteroids() {
  //1st Column of Rocks
  r1.pos = { x: w + 100, y: h1 };
  r2.pos = { x: w + 100, y: h2 };
  r3.pos = { x: w + 100, y: h4 };
  r4.pos = { x: w + 100, y: h5 };

  //2nd Column of Rocks
  r5.pos = { x: 2 * w + 100, y: h1 };
  r6.pos = { x: 2 * w + 100, y: h3 };
  r7.pos = { x: 2 * w + 100, y: h5 };

  //3rd Column of Rocks
  r8.pos = { x: 3 * w + 100, y: h2 };
  r9.pos = { x: 3 * w + 100, y: h3 };
  r10.pos = { x: 3 * w + 100, y: h4 };

  //4th Column of Rocks
  r11.pos = { x: 4 * w + 100, y: h1 };
  r12.pos = { x: 4 * w + 100, y: h2 };
  r13.pos = { x: 4 * w + 100, y: h3 };

  //5th Column of Rocks
  r14.pos = { x: 5 * w + 100, y: h1 };
  r15.pos = { x: 5 * w + 100, y: h3 };
  r16.pos = { x: 5 * w + 100, y: h4 };
  r17.pos = { x: 5 * w + 100, y: h5 };

  //6th Column of Rocks
  r18.pos = { x: 6 * w + 100, y: h1 };
  r19.pos = { x: 6 * w + 100, y: h2 };
  r20.pos = { x: 6 * w + 100, y: h4 };
  r21.pos = { x: 6 * w + 100, y: h5 };

  //earth.pos = {x:9*w+100,y:h3};
}

function showEarthScreen() {
  background(40);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Click Earth to return home", width / 2, height / 2 - 100);
  if (mouseIsPressed) {
    ship.pos = { x: -100, y: -100 };
    r18.pos = { x: -100, y: -100 };
    r19.pos = { x: -100, y: -100 };
    r20.pos = { x: -100, y: -100 };
    r21.pos = { x: -100, y: -100 };
    screen++;
  }
}

function showEndScreen() {
  background(40);
  bAgain.pos = { x: width / 2, y: height / 2 + 100 };
  bAgain.text = "Play Again";
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("You did it!", width / 2, 100);
  if (bAgain.mouse.presses()) {
    bAgain.pos = { x: -100, y: -100 };
    screen = 0;
  }
}