status = "";

function preload()
{

}

function setup()
{
canvas = createCanvas(480,380);
canvas.center();
canvas.position(540,100);
video = createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video , 0, 0, 480, 380);
}

function start()
{
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
input_value = document.getElementById("input_box").value;
}

function modelLoaded()
{
console.log("Model Loaded");
status = true;    
}