
class BadThing extends FallingObject{

    private size: number
    //public soundeffect: boolean
    private img: p5.Image
    private position: p5.Vector
    private speed: number
    private startRandom: number
    public hitbox: Rectangle

    constructor() {
        super()
        this.size = 10
        //this.soundeffect = boolean
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

    falling() {
        if(this.position.y <= height) {
            if (this.position.y > height-5) {
            } else {
                this.position.y += this.speed                
            }
        }
    }

}
