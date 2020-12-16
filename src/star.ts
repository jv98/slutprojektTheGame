class Star extends FallingObject {

    constructor() {
        super()
    }

    update() {
    
    }

    draw() {
    // ritar ut stjärnan
    }

    falling() {
        // för att få ett objekt att falla använd:
        // ex. höjden - framerate/10 = -6/sekund
    }

    pointsIncrease(points) {
        if(this.posX >= characterPosition) {
            points++
        } 
        else if(this.posX >= gamePlanPosition) {
            //display none
        } 
    }
}