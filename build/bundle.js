"use strict";
<<<<<<< HEAD
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
        this.speed = 10;
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
    }
    update() {
        this.falling();
    }
    draw() {
        image(this.img, this.position.x, this.position.y, 80, 60);
    }
    falling() {
        if (this.position.x <= width) {
            if (this.position.x > width - 5) {
            }
            else {
                this.position.y += this.speed;
            }
        }
=======
class Player {
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
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.position.x += this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgRight[current];
        }
    }
    update() {
        this.movement();
    }
    draw() {
        this.frameCounter += 1;
        image(this.img, this.position.x, this.position.y, 150, 150);
>>>>>>> main
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
<<<<<<< HEAD
    background('blue');
    fill('green');
    stroke('white');
    strokeWeight(10);
    circle(width * .5, height * .5, width * 0.2);
=======
>>>>>>> main
    game.update();
    game.draw();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
<<<<<<< HEAD
class Star extends FallingObject {
    constructor() {
        super();
        this.size = 10;
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width);
        this.position = createVector(this.startRandom, 0);
        this.speed = 2;
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
                let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y);
                if (distance < fallingObj.size + this.extraLife.size) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Poäng");
                }
                else if (fallingObj.position.y > windowHeight) {
                    this.fallingObjects.splice(i, 1);
                }
            }
            if (fallingObj instanceof BadThing) {
                let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y);
                if (distance < fallingObj.size + this.extraLife.size) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Skada");
                }
                else if (fallingObj.position.y > windowHeight) {
                    this.fallingObjects.splice(i, 1);
                }
            }
            if (fallingObj instanceof ExtraLife) {
                let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y);
                if (distance < fallingObj.size + this.extraLife.size) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Skada");
                }
                else if (fallingObj.position.y > windowHeight) {
                    this.fallingObjects.splice(i, 1);
                }
            }
        }
=======
class TheGame {
    constructor() {
        this.player = new Player();
    }
    update() {
        this.player.update();
    }
    draw() {
        clear();
        this.player.draw();
    }
    spawnNewObject() {
    }
    checkCollision() {
>>>>>>> main
    }
}
//# sourceMappingURL=bundle.js.map