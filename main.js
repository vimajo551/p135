video = ""
status = ""


function preload(){
    video = createVideo("video.mp4")
    video.hide()
}

function setup(){
    canvas = createCanvas(400,300)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video,0,0,400,300);

}

function start(){
    objdetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "status: dectando objetos"   
}

function modelLoaded(){
    console.log("modelo carregado")
    status = true;
}