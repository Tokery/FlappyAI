class PipePair {
    constructor() {
        this.gap = 200;
        this.topHeight = floor(random(20, canvas.height - 100 - this.gap));
        this.bottomHeight = canvas.height - this.topHeight - this.gap;

        this.bottomPipe = new Pipe(false, this.bottomHeight);
        this.topPipe = new Pipe(true, this.topHeight);
    }

    show() {
        this.bottomPipe.show();
        this.topPipe.show();
    }

    update() {
        this.bottomPipe.update();
        this.topPipe.update();
    }

    collided(player) {
        return this.bottomPipe.collided(player) || this.topPipe.collided(player);
    }

    offScreen() {
        if (this.bottomPipe.x + this.bottomPipe.width < 0) {
            console.log('true');
            return true;
        }
        return false;
    }
}