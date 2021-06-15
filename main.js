song="";
status="";
objects=[];
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    
    video = createCapture(VIDE0);
    video.size(380,380);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;

}
function preload() {
  song = loadsound('alarm-26620.mp3');
}
function gotResult(error , results) {
    if(error) {
        console.log(error);
    }
        console.log(results);
        objects = results;
    }
function draw() {
    image(video ,0,0,380,380);
    if(objects == person) {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResult)
        for(i=0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Baby Not Detected";
            loadsound('alarm-26620.mp3');
        
        }
        for(i=0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Baby Detected";
        stop(song);
        }
    }
}