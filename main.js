noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);

posenet.on('pose',gotposes);
}


function gotposes(results){
    if(results.length>0){
      console.log(results);
      console.log("nosex= "+results[0].pose.nose.x);
      console.log("nosey= "+results[0].pose.nose.y);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
    }
}
function modelloaded(){
    console.log("model is loaded successfully");}


function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(clown_nose,noseX-7,noseY-5,30,30);
}

function take_snapshot(){
    save("mysnap.png");
}