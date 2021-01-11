
class BadThing extends FallingObject{

    private startRandom: number;
    public hitbox: Rectangle

    constructor(size: number, img: p5.Image, position: p5.Vector, speed: number) {
        super(size, img, position, speed)
        this.size = 10;
        this.img = loadImage('assets/nail.png');
        this.startRandom = random(0, width)
        this.position = createVector(this.startRandom, 0)
        this.speed = 3;
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

    falling(): void {
        if(this.position.y <= height) {
            if (this.position.y > height-5) {
            } else {
                this.position.y += this.speed                
            }
        }
    }

}
