const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score = 0;
var particles;
var turn = 0;
var gamestate = 'play';

var plinkos = [];

var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(805,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800,807,15);
  
  for (var p=75; p<=width; p = p+50){
    plinkos.push(new Plinko(p, 75))

  }

  for (var p=50; p<=width - 10; p = p+50){
    plinkos.push(new Plinko(p, 175))

  }

  for (var p=75; p<=width; p = p+50){
    plinkos.push(new Plinko(p, 275))

  }

  for (var p=50; p<=width - 10; p = p+50){
    plinkos.push(new Plinko(p, 375))

  }

  for(var d=0; d<= width; d= d+80){
    divisions.push(new Division(d, 650, 10, divisionHeight));
  }

  Engine.run(engine);
}

function draw() {
  background(0);  
  
  for(var i=0; i< plinkos.length; i++){
  plinkos[i].display();
  }

  for(var j=0; j< divisions.length; j++){
    divisions[j].display();
  }

  if(gamestate == 'play'){
    
    if(particles != null){
      particles.display();

      if(particles.body.position.y >= 760){

          if(particles.body.position.x < 315){

            score += 500;
            particles = null;

            if(turn >= 5){
              gamestate = 'end';
            }
          }

          else if(particles.body.position.x > 320 && particles.body.position.x <= 555){

              score += 100;
              particles = null;

              if(turn >= 5){
              gamestate = 'end';
            }
          }

          else if(particles.body.position.x > 555 && particles.body.position.x <= 795){

              score += 200;
              particles = null;

              if(turn >= 5){
                gamestate = 'end';
              }
          }

        }
    }

  }

    if(gamestate == 'end'){

      textSize(30);
      fill('cyan');
      text('Game Over', 350, 300);

      textSize(30);
      fill(57, 255, 20);
      text('Score: ' + score, 355, 350);
    }

    ground.display();

    if(gamestate == 'play'){
    textSize(20);
    fill(57, 255, 20);
    text('Score: ' + score, 10, 30 );

    textSize(20);
    fill(57, 255, 20);
    text('Total turns: ' + turn, 660,30);
    }

    textSize(20);
    fill('red');
    text('500',20,530);
    text('500',100,530);
    text('500',180,530);
    text('500',260,530);

    text('100',340,530);
    text('100',420,530);
    text('100',500,530);

    text('200',580,530);
    text('200',660,530);
    text('200',740,530);

   
    push();
    strokeWeight(3);
    stroke('yellow');
    line(0,445,805,445);
    pop();

    

}

function mousePressed(){

  if(gamestate != 'end'){
    particles = new Particles(mouseX,10,10);
    turn++;    
  }
}