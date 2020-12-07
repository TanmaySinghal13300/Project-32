const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var backgroundImg="black";
var score=0;
function setup() {
  var canvas = createCanvas(1240,595);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImage();
  ground = new Ground(600,590,1300,20);
  ground1 = new Ground(593,455,300,10);
  ground2 = new Ground(1033,365,300,10);

  shooter = new Shooter(200,200,50,50);

  slingShot1 = new SlingShot(shooter.body,{x:100,y:200}) 

  block1 = new Block2(490,425,30,40);
  block2 = new Block2(540,425,30,40);
  block3 = new Block2(590,425,30,40);
  block4 = new Block2(640,425,30,40);
  block5 = new Block2(690,425,30,40);
  block6 = new Block1(540,375,30,40);
  block7 = new Block1(590,375,30,40);
  block8 = new Block1(640,375,30,40);
  block9 = new Block2(590,324,30,40);

  block10 = new Block1(930,335,30,40);
  block11 = new Block1(980,335,30,40);
  block12 = new Block1(1030,335,30,40);
  block13 = new Block1(1080,335,30,40);
  block14 = new Block1(1130,335,30,40);
  block15 = new Block2(980,285,30,40);
  block16 = new Block2(1030,285,30,40);
  block17 = new Block2(1080,285,30,40);
  block18 = new Block1(1030,234,30,40);

}

function draw() {
  background(backgroundImg);
  textSize(35);
  fill("white");
  text("Score : " + score, 400,200);
  Engine.update(engine);
 
 ground.display();
 ground1.display();
 ground2.display();

 block1.display();
 block1.score();
 block2.display();
 block2.score();
 block3.display();
 block3.score();
 block4.display();
 block4.score();
 block5.display();
 block5.score();
 block6.display();
 block6.score();
 block7.display();
 block7.score();
 block8.display();
 block8.score();
 block9.display();
 block9.score();

 block10.display();
 block10.score();
 block11.display();
 block11.score();
 block12.display();
 block12.score();
 block13.display();
 block13.score();
 block14.display();
 block14.score();
 block15.display();
 block15.score();
 block16.display();
 block16.score();
 block17.display();
 block17.score();
 block18.display();
 block18.score();

 shooter.display();

 slingShot1.display();

 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
    slingShot1.fly();
    Matter.Body.applyForce(shooter.body, shooter.body.position,{x:85,y:-85})
  }
  function keyPressed(){
    if(keyCode==32){
        slingShot1.attach(shooter.body);
    }
}

async function getBackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>06 && hour<18){
      bg="yellow";
  }
  else{
      bg="darkblue";
  }
  backgroundImg=bg;
}