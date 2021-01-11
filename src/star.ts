class Star extends FallingObject{
    
    private startRandom: number;
    public hitbox: Rectangle

    constructor(size: number, img: p5.Image, position: p5.Vector, speed: number) {
        super(size, img, position, speed)
        this.size = 10
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width)
        this.position = createVector(this.startRandom, 0)
        this.speed = 4
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

    falling(): void {
        if(this.position.y <= height) {
            if (this.position.y > height-5) {
            } else {
                this.position.y += this.speed               
            }
        }
    }
}