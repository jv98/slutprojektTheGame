class Star extends FallingObject{

    public size: number
    //public soundeffect: boolean
    public img: p5.Image
    public position: p5.Vector
    public speed: number
    public startRandom: number
    public hitbox: Rectangle

    constructor() {
        super()
        this.size = 10
        //this.soundeffect = boolean
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

    falling() {
        if(this.position.y <= height) {
            if (this.position.y > height-5) {
            } else {
                this.position.y += this.speed               
            }
        }
    }
}