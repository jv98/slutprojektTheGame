class StuffedAnimal {
    private img: p5.Image;
    public position: p5.Vector;

    constructor() {
        this.img = loadImage('assets/trophy.png');
        this.position = createVector(245, 75);
    }

    update() {

    }

    draw() {
        image(this.img, this.position.x, this.position.y, 70, 120);
    }
}