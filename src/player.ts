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
    private playerImgLeft: p5.Image[];
    private playerImgRight: p5.Image[];
    private frameCounter: number;
    private img: p5.Image;
    private speed: p5.Vector;
    private characterHP: Number;
    private position: p5.Vector;
    private hitBoxPlayerPosition: number;
    private hitBoxBucketPosition: number;
    private playerHitboxRectangle: Rectangle;

    constructor() {  
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
        this.hitBoxBucketPosition = this.position.x + 42;
        this.hitBoxPlayerPosition = this.position.x + 78;
        this.playerHitboxRectangle = {
            x: this.position.x + 78,
            y: 630,
            width: 70,
            height: 100,
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
            this.hitBoxBucketPosition = this.position.x + 42;
            this.playerHitboxRectangle.x = this.position.x + 78;
            //this.hitBoxPlayerPosition = this.position.x + 78;
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.position.x += this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgRight[current];
            this.hitBoxBucketPosition = this.position.x + 108;
            this.playerHitboxRectangle.x = this.position.x;
            //this.hitBoxPlayerPosition = this.position.x;
        }
    }

    update() {
        this.movement();
        if (this.collision({x: 300, y: this.position.y + 678})) {
            console.log("Collision");
        }
    }

    draw() {
        this.frameCounter += 1;

        image(this.img, this.position.x, this.position.y + 630, 150, 150);
        fill("#000000");
        circle(300, this.position.y + 630, 10);
        // noFill();
        // noStroke();
        ellipse(this.hitBoxBucketPosition, this.position.y + 678, 70, 18);
        //rect(this.hitBoxPlayerPosition, this.position.y + 630, 70, 100);
        rect(
            this.playerHitboxRectangle.x,
            this.playerHitboxRectangle.y,
            this.playerHitboxRectangle.width,
            this.playerHitboxRectangle.height
        );
    }

    public collision(point: Point): Boolean {
        return rectangleOverlapsPoint(this.playerHitboxRectangle, point);
    }
}