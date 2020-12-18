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

class Player {
    private debug: Boolean;
    private playerImgLeft: p5.Image[];
    private playerImgRight: p5.Image[];
    private frameCounter: number;
    private img: p5.Image;
    private speed: p5.Vector;
    private characterHP: Number;
    private position: p5.Vector;
    //private hitBoxPlayerPosition: number;
    //private hitBoxBucketPosition: number;
    private bucketHitboxRectangle: Rectangle;
    private playerHitboxRectangle: Rectangle;

    constructor() {  
        this.debug = true;
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
        // this.hitBoxBucketPosition = this.position.x + 42;
        // this.hitBoxPlayerPosition = this.position.x + 78;
        this.playerHitboxRectangle = {
            x: this.position.x + 78,
            y: 630,
            width: 70,
            height: 100,
        }
        this.bucketHitboxRectangle = {
            x: this.position.x + 5,
            y: 670,
            width: 70,
            height: 8,
        }
    }

    private setupImages() {
        const playerImgCount = 6;
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
            this.bucketHitboxRectangle.x = this.position.x + 5;
            this.playerHitboxRectangle.x = this.position.x + 78;
            //this.hitBoxPlayerPosition = this.position.x + 78;
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.position.x += this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgRight[current];
            this.bucketHitboxRectangle.x = this.position.x + 73;
            this.playerHitboxRectangle.x = this.position.x;
            //this.hitBoxPlayerPosition = this.position.x;
        }
    }

    update() {
        this.movement();
    }

    draw() {
        this.frameCounter += 1;

        image(this.img, this.position.x, this.position.y + 630, 150, 150);
        fill("#000000");
        circle(300, this.position.y + 630, 10);
        if (!this.debug) {
            noFill();
            noStroke();
        }
        // ellipse(this.hitBoxBucketPosition, this.position.y + 678, 70, 18);
        //rect(this.hitBoxPlayerPosition, this.position.y + 630, 70, 100);
        rect(
            this.playerHitboxRectangle.x,
            this.playerHitboxRectangle.y,
            this.playerHitboxRectangle.width,
            this.playerHitboxRectangle.height
        );

        rect(
            this.bucketHitboxRectangle.x,
            this.bucketHitboxRectangle.y,
            this.bucketHitboxRectangle.width,
            this.bucketHitboxRectangle.height
        );
    }

    public playerCollision(obj: any): Boolean {
        return rectangleOverlapsPoint(this.playerHitboxRectangle, obj.position);
    }

    public bucketCollision(obj: any): Boolean {
        const rightBottomCorner = {
            x: obj.position.x + 40,
            y: obj.position.y,
        };
        return (rectangleOverlapsPoint(this.bucketHitboxRectangle, obj.position) ||
                rectangleOverlapsPoint(this.bucketHitboxRectangle, rightBottomCorner));
    }
}