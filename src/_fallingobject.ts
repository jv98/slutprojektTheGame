
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

    /**
     * falling function for the falling objects in the game
     * If the certain height isn't met, it will fall
     */
    falling(): void {
        if(this.position.y <= height) {
            if (this.position.y > height-5) {
            } else {
                this.position.y += this.speed               
            }
        }
    }

}
