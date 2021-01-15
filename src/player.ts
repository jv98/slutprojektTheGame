class Player {
    private debug: Boolean;
    private playerImgLeft: p5.Image[];
    private playerImgRight: p5.Image[];
    private frameCounter: number;
    private img: p5.Image;
    private speed: p5.Vector;
    public position: p5.Vector;
    private bucketHitboxRectangle: Rectangle;
    private playerHitboxRectangle: Rectangle;
    private speedIncreaseFrames: number;

    constructor() {  
        this.debug = false;
        this.playerImgLeft = playerImgMovingLeft;
        this.playerImgRight = playerImgMovingRight;
        this.img = this.playerImgLeft[0];
        this.position = new p5.Vector();
        this.position.x = 500;
        this.speed = new p5.Vector();
        this.speed.x = 7;
        this.frameCounter = 1;
        this.speedIncreaseFrames = -1;
        this.playerHitboxRectangle = {
            x: this.position.x + 78,
            y: 460,
            width: 70,
            height: 100,
        }
        this.bucketHitboxRectangle = {
            x: this.position.x + 13,
            y: 510,
            width: 60,
            height: 8,
        }
    }

    movement() {
        if (this.speedIncreaseFrames > 0) {
            this.speedIncreaseFrames--;
        } else if (this.speedIncreaseFrames === 0) {
            this.speed.x = 7;
            this.speedIncreaseFrames = -1;
        }
        if (this.position.x > -10) {
            if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
                this.position.x -= this.speed.x;
                let current = Math.floor((this.frameCounter % 60) / 10);
                this.img = this.playerImgLeft[current];
                this.bucketHitboxRectangle.x = this.position.x + 13;
                this.playerHitboxRectangle.x = this.position.x + 78;
            }
        }
        if (this.position.x < 1105) {
            if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
                this.position.x += this.speed.x;
                let current = Math.floor((this.frameCounter % 60) / 10);
                this.img = this.playerImgRight[current];
                this.bucketHitboxRectangle.x = this.position.x + 78;
                this.playerHitboxRectangle.x = this.position.x;
            }
        }
    }

    update() {
        this.movement();
    }

    draw() {
        this.frameCounter += 1;

        image(this.img, this.position.x, this.position.y + 460, 150, 150);
        fill("#cccccc");
        if (!this.debug) {
            noFill();
            noStroke();
        }
        drawRectFromHitbox(this.playerHitboxRectangle);
        drawRectFromHitbox(this.bucketHitboxRectangle);
    }

    public playerCollision(hitbox: Rectangle): Boolean {
        return rectangleOverlapsRect(this.playerHitboxRectangle, hitbox) || 
        rectangleOverlapsRect(hitbox, this.playerHitboxRectangle);
    }

    public bucketCollision(hitbox: Rectangle): Boolean {
        return rectangleOverlapsRect(this.bucketHitboxRectangle, hitbox) || 
        rectangleOverlapsRect(hitbox, this.bucketHitboxRectangle);
    }

    public changeSpeedForSeconds(speedChange: number, seconds: number) {
        this.speedIncreaseFrames = seconds * 60;
        this.speed.x = speedChange;
    }
}