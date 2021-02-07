var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var x = 0;
var y = 4;
var help = 0

var yellowLine;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
 textSize(35);
 text("500" , 10, 600 )
 text("500" , 90, 600 )
 text("500" , 170, 600 )
 text("500" , 250, 600 )
 text("100" , 330, 600 )
 text("100" , 410, 600 )
 text("100" , 490, 600 )
 text("200" , 570, 600 )
 text("200" , 650, 600 )
 text("200" , 730, 600 )
 
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

     
   }

   if(x === 5){
    textSize(100)
    fill("lime")
    text("Game Over", 125, 350)
   }
   
}


function mousePressed(){
  if(x <= y && 50 < mouseX && mouseX < 750){
  particles.push(new Particle(mouseX, 10, 10,10));
  x++;
  }
}

