//let colorlist = ['gold', 'yellow', 'turquoise', 'red']
/* VARIABLES */
//Global Variables
let screen = 0;

//Variables for Home Screen
let button;
let bPlay;

//Variables for Intro Dialogue
let name;
let sayCount=0;
let choice1;
let choice2;
let speech = ["Hi there, astronaut! I'm Sky,\na flight controller of Mission: Mars.\nI'll be helping you throught the mission.", 
"\nYou're the first person to set foot on Mars! \nIsn't that exciting?",
"Now, before you set off, you're going to \nneed to prepare your spaceship for lift off. \nI'll be leading you through the communication \nsystem.", 
"\nUh oh, looks like the spaceship is malfunctioning.",
"\nYou're going to be alright! Have hope! \nLet- see wh- w- can d-",
"You'll need to navigate back to Earth yourself! \nMove your mouse up and down to steer your \nspaceship away from asteroids and return to \nEarth! *silence*"];

//Variables for Asteroid Game
let started = false;
let count = 0;
let rock;
let s;
let h1,h2,h3,h4,h5;
let w;
let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21; 

let ship;
let wall;
//let earth;

//Variable for end screen
let bAgain;

/* PRELOAD LOADS FILES */
function preload(){

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
  new wall.Sprite(0,-1,canvas.width,1);
  new wall.Sprite(0, canvas.height,canvas.width,canvas.height+1);
  new wall.Sprite(0,-1,1,canvas.height);
  new wall.Sprite(height,-1,1,canvas.height);

  //Value for spacing between rocks
  s = 20;

  //Rock Group
  rock = new Group();
  rock.color = color(200);
  rock.r = (height-(6*s))/10;
  rock.collider = "k";

  //Values for heights and width of rocks
  h1 = rock.r+s;
  h2 = 3*rock.r+2*s;
  h3 = height/2;
  h4 = 7*rock.r+4*s;
  h5 = height-(rock.r+s);
  w = width/2;

  //1st Column of Rocks
  r1 = new rock.Sprite(-100,-100);
  r2 = new rock.Sprite(-100,-100);
  r3 = new rock.Sprite(-100,-100);
  r4 = new rock.Sprite(-100,-100);

  //2nd Column of Rocks
  r5 = new rock.Sprite(-100,-100);
  r6 = new rock.Sprite(-100,-100);
  r7 = new rock.Sprite(-100,-100);

  //3rd Column of Rocks
  r8 = new rock.Sprite(-100,-100);
  r9 = new rock.Sprite(-100,-100);
  r10 = new rock.Sprite(-100,-100);

  //4th Column of Rocks
  r11 = new rock.Sprite(-100,-100);
  r12 = new rock.Sprite(-100,-100);
  r13 = new rock.Sprite(-100,-100);

  //5th Column of Rocks
  r14 = new rock.Sprite(-100,-100);
  r15 = new rock.Sprite(-100,-100);
  r16 = new rock.Sprite(-100,-100);
  r17 = new rock.Sprite(-100,-100);

  //6th Column of Rocks
  r18 = new rock.Sprite(-100,-100);
  r19 = new rock.Sprite(-100,-100);
  r20 = new rock.Sprite(-100,-100);
  r21 = new rock.Sprite(-100,-100);

  ship = new Sprite(-100,-100);
  ship.d = 50;

  //earth = new Sprite(-200,200, 50, "k");
  //earth.color = new color(255);

  //End Screen
  bAgain = new button.Sprite(-100,-100);
}

/* DRAW LOOP REPEATS */
function draw() {
  noStroke();
  if (screen == 0){
      showHomeScreen();
  } else if (screen == 1){
    showDialogueScreen();
  } else if (screen == 2){
    if (!started){
      restore();
      ship.pos ={x:15, y:h3};
      started = true;
    }
    showAsteroidScreen();
  }
  else if (screen == 3){
    showEarthScreen();
  } else if (screen == 4){
    showEndScreen();
  }


}

/* FUNCTIONS */
function showHomeScreen(){
  background(40);
  fill(255);
  bPlay.pos = {x:width/2, y:height/2+100};
  bPlay.text = "Play";
  if (bPlay.mouse.presses()){
    bPlay.pos = {x:-100,y:100};
    screen++;
  }
}

function showDialogueScreen(){
  textAlign(CENTER);
  textSize(15);

  background(40);
  fill(255);
  rect(20,20,width-40,100,10,10,10,10);
  text("Press 'space' to continue", width/2, 140);
  fill(0);
  text(speech[sayCount], width/2, 50);


  if (kb.pressed("space")){
    sayCount++;
  } 
  if (sayCount == 6){
    screen++;
    sayCount = 0;
  }




}

function showAsteroidScreen(){
  background(40);
  fill(255);
  textAlign(LEFT);
  textSize(10);
  text("Move your mouse up and down to steer your spaceship away from asteroids\nRestart Counter: "+count,10, 15);

  //Move ship with mouse
  ship.moveTowards(35, mouse.y, 1);

  //Resets to beginning when ship hits a rock
  if (ship.collides(rock)){
    restore();
    count++;
  }

  //Rocks travel left across the screen until last column (save CPU resources)
  if (r21.x == 0){
    rock.vel.x = 0;
    screen++;
    count = 0;
    started = false;
  } else {
    rock.vel.x = -4;
  }

}

function restore(){
  //1st Column of Rocks
  r1.pos = {x:w+100,y:h1};
  r2.pos = {x:w+100,y:h2};
  r3.pos = {x:w+100,y:h4};
  r4.pos = {x:w+100,y:h5};

  //2nd Column of Rocks
  r5.pos = {x:2*w+100,y:h1};
  r6.pos = {x:2*w+100,y:h3};
  r7.pos = {x:2*w+100,y:h5};

  //3rd Column of Rocks
  r8.pos = {x:3*w+100,y:h2};
  r9.pos = {x:3*w+100,y:h3};
  r10.pos = {x:3*w+100,y:h4};

  //4th Column of Rocks
  r11.pos = {x:4*w+100,y:h1};
  r12.pos = {x:4*w+100,y:h2};
  r13.pos = {x:4*w+100,y:h3};

  //5th Column of Rocks
  r14.pos = {x:5*w+100,y:h1};
  r15.pos = {x:5*w+100,y:h3};
  r16.pos = {x:5*w+100,y:h4};
  r17.pos = {x:5*w+100,y:h5};

  //6th Column of Rocks
  r18.pos = {x:6*w+100,y:h1};
  r19.pos = {x:6*w+100,y:h2}; 
  r20.pos = {x:6*w+100,y:h4}; 
  r21.pos = {x:6*w+100,y:h5}; 

  //earth.pos = {x:9*w+100,y:h3};
}

function showEarthScreen(){
  background(40);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Click Earth to return home", width/2, height/2-100);
  if (mouseIsPressed){
    ship.pos = {x:-100,y:-100};
    r18.pos = {x:-100,y:-100};
    r19.pos = {x:-100,y:-100};
    r20.pos = {x:-100,y:-100};
    r21.pos = {x:-100,y:-100};
    screen++;
  }
}

function showEndScreen(){
  background(40);
  bAgain.pos = {x:width/2, y:height/2+100};
  bAgain.text = "Play Again";
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("You did it!", width/2, 100);
  if (bAgain.mouse.presses()){
    bAgain.pos = {x:-100,y:-100};
    screen=0;
  }
}