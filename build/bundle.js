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
let drawBad = [];
class BadThing extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/nail.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 5;
    }
    update() {
        this.falling();
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 40, 60);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
                this.position.y = -this.size / 2;
                this.position.x = random(0, width);
            }
            else {
                this.position.y += this.speed;
            }
        }
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
    background('blue');
    fill('green');
    stroke('white');
    strokeWeight(10);
    circle(width * .5, height * .5, width * 0.2);
    game.update();
    game.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
let drawStar = [];
class Star extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 400);
        this.speed = 4;
    }
    update() {
        this.falling();
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 40, 60);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
                this.position.y = this.size / 2;
                this.position.x = random(0, width);
            }
            else {
                this.position.y += this.speed;
            }
        }
    }
}
class TheGame {
    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.fallingObjects = [];
        this.spawnTimer = 0;
    }
    update() {
        this.star.update();
        this.badthing.update();
        this.checkCollision();
        this.spawnNewObject();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.update();
        }
    }
    draw() {
        this.star.draw();
        this.badthing.draw();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.draw();
        }
    }
    spawnNewObject() {
        if (this.spawnTimer > 1000) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());
        }
        this.spawnTimer += deltaTime;
    }
    checkCollision() {
        let distance = dist(this.star.position.x, this.star.position.y, this.badthing.position.x, this.badthing.position.y);
        if (distance < this.star.size + this.badthing.size) {
            this.badthing.position.y = 0;
        }
    }
}
//# sourceMappingURL=bundle.js.map