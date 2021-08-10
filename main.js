song1="";
song2="";

function preload(){

    song=loadSound("The_Score.mp3");
    song=loadSound("music2.mp3");
}

function draw(){ 
    image(video , 0 , 0, 600 , 500);
}

function setup(){
    canvas=createCanvas(600 , 500 ,);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function play(){
    song.play();
}

function stop(){
    song.stop();
}