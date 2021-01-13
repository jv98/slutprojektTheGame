
abstract class FallingObject {

    protected size: number
    protected img: p5.Image
    public position: p5.Vector
    protected speed: number
    
    constructor(size: number, img: p5.Image, position: p5.Vector, speed: number) {
        this.size = size;
        this.img = img;
        this.position = position;
        this.speed = speed;
    }

    update() {
    }

    draw() {
    }

    falling(): void {
        //fallande function
    }

}
