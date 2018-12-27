var panSpeed = 8;
var gravity = 3;
var player;

function setup() {
    window.canvas = createCanvas(800, 1080);
    frameRate(40);
    player = new Player(100, canvas.height/2);
    pipe = new Pipe();
}

function draw() {
    background(135, 206, 250);
    pipe.update();
    pipe.show();
    player.update();
    player.show();
}

function keyPressed(){
    switch(key) {
        case ' ':
         player.flap();
         break;
    }
}