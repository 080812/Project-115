noseX=0
noseY=0
img=""


function preload(){
img=loadImage('https://i.postimg.cc/JntqBdt7/Mustache.png');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);

}

function draw(){
    image(video,0,0,300,300);

    image(img,noseX,noseY,80,80);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotposes(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX,noseY);
    }
}