class StuffedAnimal {
    public img: p5.Image;
    public position: p5.Vector;

    constructor() {
        this.img = loadImage('assets/trophy.png');
        this.position = createVector(245, 75);
    }

    update() {
        for(let i = this.position.y; i < 500; i++) {
            this.position.y += 0.1;
        }
    }

    draw() {
        image(this.img, this.position.x, this.position.y, 70, 120);
            if (this.position.y === 500) {
                this.img.width = 0;
            }
    }
}