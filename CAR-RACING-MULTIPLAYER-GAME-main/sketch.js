var ball;
var database;
var position;
var allPlayers;

var gameState = 0;
var playerCount;
var Form;
var Game;
var Player;

var car1, car2, car3, car4, cars;
var carImage1, carImage2, carImage3, carImage4;
var groundImage, trackImage;
var endimage;

function preload(){
    carImage1 = loadImage("images/images/car1.png");
    carImage2 = loadImage("images/images/car2.png");
    carImage3 = loadImage("images/images/car3.png");
    carImage4 = loadImage("images/images/car4.png");
    groundImage = loadImage("images/images/ground.png");
    trackImage = loadImage("images/images/track.jpg");
     endimage = loadImage("endImages/gameOver.png");
     bronze = loadImage("endImages/bronze.png");
     gold = loadImage("endImages/gold.png");
     silver = loadImage("endImages/silver.png");
}

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
    Game = new game();
    Game.getState();
    Game.start();
}

function draw(){
    background("brown");
    if(playerCount === 4){
        Game.update(1);
    }
    if(gameState === 1){
        clear();
        Game.play();
    }
    if(gameState === 2){
        //image(endimage, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
        Game.end();
        
    }
    if(Player.rank === 4){
        Game.displayRank();
    }
}

function showError(){
    console.log("ERROR READING DATABASE");
}