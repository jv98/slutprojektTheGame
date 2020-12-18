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
class ExtraLife extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/1-up.png');
        this.startRandom = width / 2;
        this.position = createVector(this.startRandom, height / 2 - 50);
        this.speed = 4;
    }
    update() {
        image(this.img, this.position.x, this.position.y, 40, 60);
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 40, 60);
    }
    falling() {
        if (this.position.y <= height) {
            if (this.position.y > height - 5) {
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
class Star extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
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
        this.extraLife = new ExtraLife();
        this.fallingObjects = [];
        this.spawnTimer = 0;
    }
    update() {
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
        this.star.draw();
        this.badthing.draw();
        this.extraLife.draw();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.draw();
        }
        console.log(this.fallingObjects);
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
        for (const fallingObj of this.fallingObjects) {
            if (fallingObj instanceof Star) {
                if (fallingObj.position.y >= height / 2) {
                    this.fallingObjects.splice(0, 1);
                }
            }
        }
        for (const fallingObj of this.fallingObjects) {
            if (fallingObj instanceof BadThing) {
                if (fallingObj.position.y >= height / 2) {
                    this.fallingObjects.splice(0, 1);
                }
            }
        }
    }
}
//# sourceMappingURL=bundle.js.map