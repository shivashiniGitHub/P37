var canva;
var contestantCount, database, quize, question , contestant;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quize = new quiz ();
  quize.getState();
  quize.start();
}


function draw(){
  background("pink");

  
}
