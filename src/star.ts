class Star extends FallingObject{

    public size: number
    //public soundeffect: boolean
    public img: p5.Image
    public position: p5.Vector
    public speed: number
    public startRandom: number

    constructor() {
        super()
        this.size = 10
        //this.soundeffect = boolean
        this.img = loadImage('assets/star.png');
        this.startRandom = random(0, width)
        this.position = createVector(this.startRandom, 0)
        this.speed = 2
    }

    update() {
        this.falling()    
    }

    draw() {
        image(this.img, this.position.x, this.position.y, 40, 60);
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