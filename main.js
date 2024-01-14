function preload(){
}

function setup() {
    canvas = createCanvas(740,530);
    canvas.position(390, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    //webcam
    image(video, 260, 170, 240, 180);

    //circle
    stroke(255, 0 ,0);
    fill(255, 0, 0);
    circle(60,60,100);
    circle(680,60,100);    
    circle(60,470,100);
    circle(680,470,100);

    //rect
    stroke(0, 0 ,200);
    fill(0, 0, 200);
    rect(105, 40, 530, 40);
    rect(105, 450, 530, 40);
    rect(40, 105, 40, 320);
    rect(660, 105, 40, 320);
}

function take_snapshot(){
    save("photo.png");
}