var ball, database;
var position;

var form;

var gamestate = 0

var control

var player

var playerCount;

var distance = 0


var car1, car2, car3, car4, cars





var playersInfo

function setup(){
    canvas = createCanvas(displayWidth - 50, displayHeight-20);
    database = firebase.database();
    //createCanvas(500,500);


    control = new Control()
    control.gameStart()
    control.readState()
}

function draw(){
    background("white");

   if(playerCount === 4){
       control.updateState(1)
   }

   
   if(gamestate === 1){
       clear()
       control.play()
       console.log(gamestate) 
       
   }





    
}





