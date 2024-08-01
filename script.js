//let colorlist = ['gold', 'yellow', 'turquoise', 'red']
//Global Variables
let screen = 0;

//Variables for Home Screen
let button;
let bPlay;

//Variables for Asteroid Game
let count = 0;
let rock;
let s;
let h1,h2,h3,h4,h5;
let w;
let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21; 

let ship;
let wall;

function setup() {
  createCanvas(400, 400);
  background(40);

  //Variables for Home Screen
  button = new Group();
  button.collider = "k";
  button.w = 100;
  button.h = 50;

  bPlay = new button.Sprite(-100, -100);



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
  s = 10;

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
  r1 = new rock.Sprite();
  r2 = new rock.Sprite();
  r3 = new rock.Sprite();
  r4 = new rock.Sprite();

  //2nd Column of Rocks
  r5 = new rock.Sprite();
  r6 = new rock.Sprite();
  r7 = new rock.Sprite();

  //3rd Column of Rocks
  r8 = new rock.Sprite();
  r9 = new rock.Sprite();
  r10 = new rock.Sprite();

  //4th Column of Rocks
  r11 = new rock.Sprite();
  r12 = new rock.Sprite();
  r13 = new rock.Sprite();

  //5th Column of Rocks
  r14 = new rock.Sprite();
  r15 = new rock.Sprite();
  r16 = new rock.Sprite();
  r17 = new rock.Sprite();

  //6th Column of Rocks
  r18 = new rock.Sprite();
  r19 = new rock.Sprite();
  r20 = new rock.Sprite();
  r21 = new rock.Sprite();

  restore();

  ship = new Sprite(15, h3, 50);
}

function draw() {
  noStroke();
  //showHomeScreen();
  //if (screen == 1){
    showAsteroidScreen();
  //}


}

function showHomeScreen(){
  background(40);
  fill(255);
  bPlay.pos ={x:width/2, y:height/2+100};
  if (mouse.presses(bPlay)){
    screen = 1;
  }

}

function showAsteroidScreen(){
  background(40);
  fill(255);
  text("Restart Counter: "+count,10, 15);

  //restore();

  //Rocks travel left across the screen until last column (save CPU resources)

  if (r21.x == -1*rock.r){
    rock.vel.x = 0;
  } else {
    rock.vel.x = -4;
  }

  //Move ship with mouse
  ship.moveTo(mouse, 15);

  if (ship.collides(rock)){
    restore();
    count++;
  }

}

function restore(){
  //1st Column of Rocks
  r1.pos = {x:w,y:h1};
  r2.pos = {x:w,y:h2};
  r3.pos = {x:w,y:h4};
  r4.pos = {x:w,y:h5};

  //2nd Column of Rocks
  r5.pos = {x:2*w,y:h1};
  r6.pos = {x:2*w,y:h3};
  r7.pos = {x:2*w,y:h5};

  //3rd Column of Rocks
  r8.pos = {x:3*w,y:h2};
  r9.pos = {x:3*w,y:h3};
  r10.pos = {x:3*w,y:h4};

  //4th Column of Rocks
  r11.pos = {x:4*w,y:h1};
  r12.pos = {x:4*w,y:h2};
  r13.pos = {x:4*w,y:h3};

  //5th Column of Rocks
  r14.pos = {x:5*w,y:h1};
  r15.pos = {x:5*w,y:h3};
  r16.pos = {x:5*w,y:h4};
  r17.pos = {x:5*w,y:h5};

  //6th Column of Rocks
  r18.pos = {x:6*w,y:h1};
  r19.pos = {x:6*w,y:h2}; 
  r20.pos = {x:6*w,y:h4}; 
  r21.pos = {x:6*w,y:h5}; 
}