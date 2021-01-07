interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface Point {
    x: number;
    y: number;
}

function rectangleOverlapsPoint(rectangle: Rectangle, point: Point): Boolean {
    if (point.x > rectangle.x && point.x < rectangle.x + rectangle.width){
        return point.y > rectangle.y && point.y < rectangle.y + rectangle.height;
    }
    return false;
}

function rectangleOverlapsRect(rectangle1: Rectangle, rectangle2: Rectangle) {
    const rightBottomCorner = {
        x: rectangle2.x + rectangle2.width,
        y: rectangle2.y,
    }

    const rightUpperCorner = {
        x: rectangle2.x + rectangle2.width,
        y: rectangle2.y + rectangle2.height,
    }

    const leftUpperCorner = {
        x: rectangle2.x,
        y: rectangle2.y + rectangle2.height,
    }
    
    return (rectangleOverlapsPoint(rectangle1, rectangle2) ||
            rectangleOverlapsPoint(rectangle1, rightBottomCorner) ||
            rectangleOverlapsPoint(rectangle1, rightUpperCorner) ||
            rectangleOverlapsPoint(rectangle1, leftUpperCorner));
}

function drawRectFromHitbox(hitbox: Rectangle): void {
    rect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
}

class Player {
    private debug: Boolean;
    private playerImgLeft: p5.Image[];
    private playerImgRight: p5.Image[];
    private frameCounter: number;
    private img: p5.Image;
    private speed: p5.Vector;
    private characterHP: Number;
    private position: p5.Vector;
    private bucketHitboxRectangle: Rectangle;
    private playerHitboxRectangle: Rectangle;

    constructor() {  
        this.debug = false;
        this.playerImgLeft = [];
        this.playerImgRight = [];
        this.setupImages();
        this.img = this.playerImgLeft[0];
        this.position = new p5.Vector();
        this.position.x = 500;
        this.speed = new p5.Vector();
        this.speed.x = 7;
        this.frameCounter = 1;
        this.characterHP = 3;
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

    private setupImages() {
        const playerImgCount = 7;
        for (let i = 1; i <= playerImgCount; i++) {
            this.playerImgLeft.push(loadImage('assets/player-left' + i + '.png'));
        }
        for (let i = 1; i <= playerImgCount; i++) {
            this.playerImgRight.push(loadImage('assets/player-right' + i + '.png'));
        }   
    }

    movement() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.position.x -= this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgLeft[current];
            this.bucketHitboxRectangle.x = this.position.x + 13;
            this.playerHitboxRectangle.x = this.position.x + 78;
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.position.x += this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgRight[current];
            this.bucketHitboxRectangle.x = this.position.x + 78;
            this.playerHitboxRectangle.x = this.position.x;
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
        return rectangleOverlapsRect(this.playerHitboxRectangle, hitbox);
    }

    public bucketCollision(hitbox: Rectangle): Boolean {
        return rectangleOverlapsRect(this.bucketHitboxRectangle, hitbox);
    }
}