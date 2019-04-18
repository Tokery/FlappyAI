var Neat = neataptic.Neat;
var methods = neataptic.methods;
var Config = neataptic.Config;
var Architect = neataptic.architect;

// Global vars
var neat;
const popSize = 500;
// vertical velocity, distance to next pipe, vertical distance to top, vertical distance to bottom
var genomeInputs = 4;
var genomeOutputs = 1;


function initNeat() {
    neat = new Neat(
        genomeInputs,
        genomeOutputs,
        null,
        {
            mutation: [
              methods.mutation.ADD_NODE,
              methods.mutation.SUB_NODE,
              methods.mutation.ADD_CONN,
              methods.mutation.SUB_CONN,
              methods.mutation.MOD_WEIGHT,
              methods.mutation.MOD_BIAS,
              methods.mutation.MOD_ACTIVATION,
              methods.mutation.ADD_GATE,
              methods.mutation.SUB_GATE,
              methods.mutation.ADD_SELF_CONN,
              methods.mutation.SUB_SELF_CONN,
              methods.mutation.ADD_BACK_CONN,
              methods.mutation.SUB_BACK_CONN
            ],
            popsize: popSize,
            mutationRate: 0.3,
            elitism: Math.round(0.1 * popSize),
            network: new Architect.Random(
                genomeInputs,
                0,
                genomeOutputs
            )
        }
    )
}

// Start the evaluation of the current generation
function startEvaluation() {
    players = [];
    highestScore = 0;
    for (var genome in neat.population) {
        genome = neat.population[genome];
        
        new Player(100, canvas.height/2, genome);
    }
}

// End the evaluation of the current generation
function endEvaluation() {
    console.log('Generation:', neat.generation, '- average score:', neat.getAverage());


    neat.sort();
    var newPopulation = [];

    // Elitism
    for (var i = 0; i < neat.elitism; i++) {
        newPopulation.push(neat.population[i]);
    }

    // Breed the next individuals
    for (var i = 0; i < neat.popsize - neat.elitism; i++) {
        newPopulation.push(neat.getOffspring());
    }

    // Replace the old population with the new population
    neat.population = newPopulation;
    neat.mutate();

    neat.generation++;
    startEvaluation();
}