class PipePair {
    constructor() {
        this.gap = 80;
        this.topHeight = floor(random(20, canvas.height - 100 - gap));
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

    offScreen() {
        if (this.bottomPipe.x + this.bottomPipe.width < 0) {
            return true;
        }
    }
}