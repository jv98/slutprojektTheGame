
class BadThing extends FallingObject{

    public hitbox: Rectangle

    constructor() {
        const size = 10;
        const img = images.badThing;
        const startRandom = random(15, width-50) 
        const position = createVector(startRandom, 0)
        const speed = Math.random()*5+4;
        super(size, img, position, speed)
        this.hitbox = {
            x: this.position.x + 7,
            y: this.position.y + 25,
            width: 15,
            height: 50,
        }
    }

    update() {
        this.falling()
        this.hitbox.y = this.position.y + 25
    }

    draw() {
        image(this.img, this.position.x, this.position.y, 30, 80);
        drawRectFromHitbox(this.hitbox);
    }
}
