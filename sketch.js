var canvas;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var quiz, question;
var contestant;

function setup(){
  canvas = createCanvas(850,400);
  //assigning firebase database to var database.
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
   if(contestantCount === 4){
     quiz.update(1);
   }
   if(gameState === 1){
     clear();
     quiz.play();
   }
  
}
