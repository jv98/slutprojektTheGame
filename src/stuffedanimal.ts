class StuffedAnimal {
    private img: p5.Image;
    public position: p5.Vector;
    public hitbox: Rectangle;

    constructor() {
        this.img = loadImage('assets/trophy.png');
        this.position = createVector(245, 75);
        this.hitbox = {
            x: this.position.x,
            y: this.position.y,
            width: 70,
            height: 100,
        }
    }

    update() {
        for(let i = this.position.y; i < 500; i++) {
            this.position.y += 0.1;
            this.hitbox.y += 0.1;
        }
    }

    draw() {
        image(this.img, this.position.x, this.position.y, 70, 120);
        drawRectFromHitbox(this.hitbox);
    }
}

