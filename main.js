noseX=0
noseY=0
img=""
function preload(){
img=loadImage('ClownWig.png')
}

function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelloaded)
posenet.on('pose',gotposes)
}

function draw(){
image(video,0,0,300,300)
fill("aqua")
stroke("pink")
circle(noseX,noseY,30)
//image(img,noseX,noseY,50,50)
}

function modelloaded(){
    console.log("model is loaded")
}

function gotposes(results){
    if(results.length>0){
        console.log(results)

        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
    }
}