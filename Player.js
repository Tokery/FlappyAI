class Player {
    constructor(x, y, genome) {
        this.x = x;
        this.y = y;
        this.velY = 0;
        this.velX = panSpeed;
        this.size = 50;
        this.dead = false;
        this.brain = genome;
        this.brain.score = 0;
        this.score = 0;
        players.push(this);
    }

    show() {
        fill(255,255,0);
        ellipse(this.x, this.y, this.size);
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
}