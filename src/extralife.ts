class ExtraLife extends FallingObject{

    public size: number
    public img: p5.Image
    public position: p5.Vector
    public speed: number
    public startRandom: number
    public hitbox: Rectangle

    constructor() {
        super()
        this.size = 10
        this.img = images.extraLife;
        this.startRandom = random(0, width)        
        this.position = createVector(this.startRandom, 0)
        this.speed = 4
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

    /**
     * Function to start the fallingobject at a random position on the gameplans width on top position
     */
    falling() {
        if(this.position.x <= width) {
            if (this.position.x > width-5) {
            } else {
                this.position.y += this.speed               
            }
        }
    }
}
