class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velY = 0;
        this.velX = panSpeed;
        this.size = 50;
    }

    show() {
        fill(255,255,0);
        ellipse(this.x, this.y, this.size);
    }

    update() {
        this.velY += gravity;
        this.y += this.velY;
        // this.x += this.velX;

        if (pipe.collided(this)) {
            this.y = 0;
        }
    }

    flap() {
        this.velY = -25;
    }
}