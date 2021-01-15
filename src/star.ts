class Star extends FallingObject{
    
    public hitbox: Rectangle

    constructor() {
        const size = 10
        const img = images.star;
        const startRandom = random(15, width-50) 
        const position = createVector(startRandom, 0)
        const speed = Math.random()*5+4;
        super(size, img, position, speed)
        this.hitbox = {
            x: this.position.x + 10,
            y: this.position.y + 50,
            width: 20,
            height: 20,
        }
    }

    update() {
        this.falling()
        this.hitbox.y = this.position.y + 50
    }

    draw() {
        image(this.img, this.position.x, this.position.y, 40, 70);
        drawRectFromHitbox(this.hitbox);
    }
}