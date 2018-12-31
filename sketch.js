var panSpeed = 8;
var gravity = 3;
var bestScore;
var players = [];

function setup() {
    window.canvas = createCanvas(800, 1000);
    frameRate(40);
    // player = new Player(100, canvas.height/2);
    // pipe = new Pipe();
    pipePair = new PipePair();

    // Stuff for NN
    this.fitness = 0;
    this.vision = []; // input array fed into NN
    this.decision = []; // the output of the NN
    this.unadjustedFitness;
    this.lifespan = 0; // How long the player lived for this.fitness
    this.score = 0;
    this.gen = 0;
    initNeat();

    startEvaluation();

}

function draw() {
    background(135, 206, 250);
    // pipe.update();
    // pipe.show();
    if (pipePair.offScreen()) {
        pipePair = new PipePair();
    }
    
    // if (!player.dead) {
        pipePair.update();
    // }
    pipePair.show();

    for (player of players) {
        player.update();
        player.show();
    }
    
}

function keyPressed(){
    switch(key) {
        case ' ':
         player.flap();
         break;
    }
}