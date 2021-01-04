class ExtraLife extends FallingObject{

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
        this.img = loadImage('assets/1-up.png');
        this.startRandom = random(0, width)        
        this.position = createVector(this.startRandom, 0)
        this.speed = 4
    }

    update() {
        this.falling()    
    }

    draw() {
        image(this.img, this.position.x, this.position.y, 80, 60);
    }

    falling() {
        if(this.position.x <= width) {
            if (this.position.x > width-5) {
            } else {
                this.position.y += this.speed               
            }
        }
    } 

    
}
