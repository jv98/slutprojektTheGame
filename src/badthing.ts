//class Badthings extends FallingObject {
//    
//}

class BadThing {

    public size: number
    //public soundeffect: boolean
    public img = p5.Image
    public position: p5.Vector
    public speed: number
    public startRandom: number

    constructor() {
        this.size = 10
        //this.soundeffect = boolean
        this.img = loadImage('assets/nail.png');
        this.startRandom = random(0, width)
        //this.startRandom = 100
        this.position = new p5.Vector(this.startRandom, 0)
        this.speed = 5
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
                this.position.y = - this.size/2;
                this.position.x = random(0, width);
            } else {
                this.position.y += this.speed                
            }
        }
    }

}
