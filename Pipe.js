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
        if (this.isTop) {
            fill(0,204,0);
        } else {
            fill(0, 204, 0);
            
        }
        
        rect(this.x, this.topY, this.width, this.height);
    }

    update() {
        this.x -= panSpeed;

        // if (this.x + this.width < 0) {
        //     this.x = canvas.width;
        //     this.height = floor(random(canvas.height - 100));
        //     this.topY = canvas.height - this.height;
        // }
    }

    collided(player) {
        const playerRadius = player.size / 2;
        if(player.x + playerRadius > this.x && player.x - playerRadius < this.x + this.width) {
            if (this.isTop && player.y - playerRadius < this.bottomY) {
                return true;
            }
            if (!this.isTop && player.y + playerRadius > this.topY) {
                return true;
            }
        }
        return false;
    }
}