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
function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    game = new Game();
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
class Star {
    constructor() {
        this.img = p5.Image;
        this.size = 10;
        this.color = (250);
        this.img = loadImage('assets/star.png');
        this.position = new p5.Vector();
        this.speed = new p5.Vector();
    }
    update() {
    }
    draw() {
        fill(this.color);
        image(this.img, this.position.x, this.position.y, 150, 150);
    }
    falling() {
    }
}
class TheGame {
    constructor() {
        this.star = new Star();
    }
    update() {
        this.star.update();
    }
    draw() {
        this.star.draw();
    }
    spawnNewObject() {
    }
    checkCollision() {
    }
}
//# sourceMappingURL=bundle.js.map