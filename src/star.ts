class Star {

    public size: number
    public color: number
    //public soundeffect: boolean
    public img = p5.Image
    public position: p5.Vector
    public speed: p5.Vector

    constructor() {
        this.size = 10
        this.color = (250)
        //this.soundeffect = boolean
        this.img = loadImage('assets/star.png');
        this.position = new p5.Vector()
        this.speed = new p5.Vector()
    }

    update() {
    
    }

    draw() {
        

    }

    falling() {
        // för att få ett objekt att falla använd:
        // ex. höjden - framerate/10 = -6/sekund
    }

    // pointsIncrease(points) {
    //     if(this.posX >= characterPosition) {
    //         points++
    //     } 
    //     else if(this.posX >= gamePlanPosition) {
    //         //display none
    //     } 
    // }
}
