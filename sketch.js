var ball,ballHeight
var database;
var position;



function setup(){
   // createCanvas(500,500);
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(200,40,10,10);
    ball.shapeColor = "red";

    var ballHeight=database.ref('ball/position');
  ballHeight.on("value",readposition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x' :position.x +x,
    'y' :position.y +y 
  })
}
function readposition(data){
    position=data.val();
    console.log(position.x)
    ball.x=position.x;
    ball.y=position.y;
}

function showError(){
    console.log("Error in writing to the database");
  }