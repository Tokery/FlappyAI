class Pipe {
    constructor(isTop, height) {
        this.width = 50;
        this.height = height;
        this.x = canvas.width;
        
        this.isTop = isTop;

        if (isTop) {
            this.topY = 0;
            this.bottomY = this.height;
        } else {
            this.topY = canvas.height - this.height;
            this.bottomY = canvas;
        }
    }

    show() {
        fill(0, 204, 0);
        rect(this.x, this.topY, this.width, canvas.height);
    }

    update() {
        this.x -= panSpeed;

        if (this.x + this.width < 0) {
            this.x = canvas.width;
            this.height = floor(random(canvas.height - 100));
            this.topY = canvas.height - this.height;
        }
    }

    collided(player) {
        if(player.x + player.size > this.x && player.x - player.size < this.x + this.width && 
            player.y + player.size > this.topY) {
                return true;
        }
        return false;
    }
}