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
        //this.startRandom = random(0, width)
        this.startRandom = width/2
        this.position = createVector(this.startRandom, height/2 - 50)
        this.speed = 4
    }

    update() {
        //this.falling()
        image(this.img, this.position.x, this.position.y, 40, 60);
    
    }

    draw() {
        image(this.img, this.position.x, this.position.y, 40, 60);

    }

    falling() {
        if(this.position.y <= height) {
            if (this.position.y > height-5) {
                //this.position.y = this.size/2;
               
                this.position.x = random(0, width);
            } else {
                this.position.y += this.speed               
            }
        }
    }

}
    // pointsIncrease(points) {
    //     if(this.posX >= characterPosition) {
    //         points++
    //     } 
    //     else if(this.posX >= gamePlanPosition) {
    //         //display none
    //     } 
    // }

