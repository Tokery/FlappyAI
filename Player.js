class Player {
    constructor(x, y, genome) {
        this.x = x;
        this.y = y;
        this.velY = 0;
        this.velX = panSpeed;
        this.size = 40;
        this.dead = false;
        this.brain = genome;
        this.brain.score = 0;
        this.score = 0;
        this.showHitBox = false;
        players.push(this);

        this.birdImage = loadImage('./bird.png');
    }

    show() {
        if (!this.dead) {
            fill(255,255,0);
        } else {
            fill(255, 0, 0);
        }
        
        if (this.showHitBox) {
            ellipse(this.x, this.y, this.size);
        }
        if (!this.dead) {
            image(this.birdImage, this.x - this.birdImage.width, this.y - this.birdImage.height, this.birdImage.width * 2.5, this.birdImage.height * 2.5);
        }
        
        
    }

    update() {
        this.velY += gravity;
        if (this.y + this.size < canvas.height) {
            this.y += this.velY;
        }


        if (pipePair.collided(this)) {
            // this.y = 0;
            this.dead = true;
        }

        var input = this.detect();
        var output = this.brain.activate(input);
        this.brain.score = this.score;
        if (output[0] > 0.5) {
            this.flap();
        }

    }

    detect() {
        // vertical velocity, distance to next pipe, vertical distance to top, vertical distance to bottom
        return [this.velY, pipePair.bottomPipe.x - this.x, pipePair.topPipe.bottomY - this.y, this.y - pipePair.bottomPipe.topY];
    }

    flap() {
        if (!this.dead) {
            this.velY = -25;
        }
    }

    incrementScore() {
        this.score++;
    }
}