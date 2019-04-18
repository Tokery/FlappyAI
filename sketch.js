var panSpeed = 8;
var gravity = 3;
var iteration = 0;
var players = [];
var score = 0;
var generation = 0;

const ITERATIONS = 1000;

function setup() {
    window.canvas = createCanvas(800, 1000);
    frameRate(40);
    // player = new Player(100, canvas.height/2);
    pipePair = new PipePair();

    // Stuff for NN
    this.fitness = 0;
    this.vision = []; // input array fed into NN
    this.decision = []; // the output of the NN
    this.unadjustedFitness;
    this.lifespan = 0; // How long the player lived for this.fitness
    this.gen = 0;
    initNeat();

    // Do some initial mutation
    for (var i = 0; i < 100; i++) neat.mutate();

    startEvaluation();

}

function draw() {
    background(135, 206, 250);

    fill(255, 0, 0);
    text(`Generation: ${str(generation)}`, 0, 100);
    text(`Score: ${str(score)}`, 0, 200);
    
    // Check if evaluation is done
    let allDead = true;
    // if(iteration == ITERATIONS){
    //     endEvaluation();
    //     iteration = 0;
    // }
    for (player of players) {
        if (!player.dead) {
            allDead = false;
            break;
        }
    }
    if (allDead) {
        endEvaluation();
        score = 0;
        generation++;
    }

    if (pipePair.offScreen()) {
        score++;
        pipePair = new PipePair();
        for (player of players) {
            if (!player.dead) {
                player.incrementScore();
            }
        }
    }
    
    pipePair.update();
    pipePair.show();

    for (player of players) {
        player.update();
        player.show();
    }
    
    iteration++;
}

function keyPressed(){
    switch(key) {
        case ' ':
         player.flap();
         break;
    }
}