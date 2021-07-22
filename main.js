var unstoppable = "";
var harryPotter = "";
var leftWristX = 0;
var rightWristX = 0;
var leftWristY = 0;
var rightWristY = 0;    

function preload() {
    unstoppable = loadSound("Unstoppable.mp3");
    harryPotter = loadSound("Harry Potter.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log("posenet initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
    }
}