"use strict";
class FallingObject {
    constructor() {
    }
    update() {
    }
    draw() {
    }
    falling() {
    }
    getPoints() {
    }
    random() {
    }
    loop() {
    }
}
class BadThing extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/nail.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 3;
        this.hitbox = {
            x: this.position.x + 7,
            y: this.position.y + 25,
            width: 15,
            height: 50,
        };
    }
    update() {
        this.falling();
        this.hitbox.y = this.position.y + 25;
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 30, 80);
        drawRectFromHitbox(this.hitbox);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class ExtraLife extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/1-up.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 4;
        this.hitbox = {
            x: this.position.x + 25,
            y: this.position.y + 20,
            width: 30,
            height: 30,
        };
    }
    update() {
        this.falling();
        this.hitbox.y = this.position.y + 20;
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 80, 60);
        drawRectFromHitbox(this.hitbox);
    }
    falling() {
        if (this.position.x <= width) {
            if (this.position.x > width - 5) {
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
function rectangleOverlapsPoint(rectangle, point) {
    if (point.x > rectangle.x && point.x < rectangle.x + rectangle.width) {
        return point.y > rectangle.y && point.y < rectangle.y + rectangle.height;
    }
    return false;
}
function rectangleOverlapsRect(rectangle1, rectangle2) {
    const rightBottomCorner = {
        x: rectangle2.x + rectangle2.width,
        y: rectangle2.y,
    };
    const rightUpperCorner = {
        x: rectangle2.x + rectangle2.width,
        y: rectangle2.y + rectangle2.height,
    };
    const leftUpperCorner = {
        x: rectangle2.x,
        y: rectangle2.y + rectangle2.height,
    };
    return (rectangleOverlapsPoint(rectangle1, rectangle2) ||
        rectangleOverlapsPoint(rectangle1, rightBottomCorner) ||
        rectangleOverlapsPoint(rectangle1, rightUpperCorner) ||
        rectangleOverlapsPoint(rectangle1, leftUpperCorner));
}
function drawRectFromHitbox(hitbox) {
    rect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
}
class Player {
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
        this.playerHitboxRectangle = {
            x: this.position.x + 78,
            y: 630,
            width: 70,
            height: 100,
        };
        this.bucketHitboxRectangle = {
            x: this.position.x + 13,
            y: 680,
            width: 60,
            height: 8,
        };
    }
    setupImages() {
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
        image(this.img, this.position.x, this.position.y + 630, 150, 150);
        fill("#cccccc");
        if (!this.debug) {
            noFill();
            noStroke();
        }
        drawRectFromHitbox(this.playerHitboxRectangle);
        drawRectFromHitbox(this.bucketHitboxRectangle);
    }
    playerCollision(hitbox) {
        return rectangleOverlapsRect(this.playerHitboxRectangle, hitbox);
    }
    bucketCollision(hitbox) {
        return rectangleOverlapsRect(this.bucketHitboxRectangle, hitbox);
    }
}
let game;
function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    game = new TheGame();
}
function draw() {
    game.update();
    game.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
class Star extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 2;
        this.hitbox = {
            x: this.position.x + 10,
            y: this.position.y + 50,
            width: 20,
            height: 20,
        };
    }
    update() {
        this.falling();
        this.hitbox.y = this.position.y + 50;
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 40, 70);
        drawRectFromHitbox(this.hitbox);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class TheGame {
    constructor() {
        this.player = new Player();
        this.star = new Star();
        this.badthing = new BadThing();
        this.extraLife = new ExtraLife();
        this.fallingObjects = [];
        this.spawnTimer = 0;
        this.player = new Player();
    }
    update() {
        this.player.update();
        this.star.update();
        this.badthing.update();
        this.extraLife.update();
        this.checkCollision();
        this.spawnNewObject();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.update();
        }
    }
    draw() {
        clear();
        this.player.draw();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.draw();
        }
    }
    spawnNewObject() {
        if (this.spawnTimer > 2500) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());
            this.fallingObjects.push(new ExtraLife());
        }
        this.spawnTimer += deltaTime;
    }
    checkCollision() {
        for (const fallingObj of this.fallingObjects) {
            let i = this.fallingObjects.indexOf(fallingObj);
            if (fallingObj instanceof Star) {
                if (this.player.bucketCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Poäng");
                }
            }
            if (fallingObj instanceof BadThing) {
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Ouch");
                }
            }
            if (fallingObj instanceof ExtraLife) {
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("1up!!!");
                }
            }
        }
    }
}
//# sourceMappingURL=bundle.js.map