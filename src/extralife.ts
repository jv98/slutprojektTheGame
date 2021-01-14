class ExtraLife extends FallingObject{

    public hitbox: Rectangle

    constructor() {
        const size = 10
        const img = images.extraLife;
        const startRandom = random(15, width-50)        
        const position = createVector(startRandom, 0)
        const speed = 4
        super(size, img, position, speed)
        this.hitbox = {
            x: this.position.x + 25,
            y: this.position.y + 20,
            width: 30,
            height: 30,
        }
    }

    update() {
        this.falling()
        this.hitbox.y = this.position.y + 20
    }

    draw() {
        image(this.img, this.position.x, this.position.y, 80, 60);
        drawRectFromHitbox(this.hitbox);
    }
}
