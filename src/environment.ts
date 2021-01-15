class Environment {
    private ground: p5.Vector[];

    constructor() {
        this.ground = [
            createVector(600, 0),
            createVector(0, 650),
            createVector(0, 650),
            createVector(0, 600),
            createVector(0, 600),
            createVector(0, 650),
            createVector(0, 600),
            createVector(45, 600),
            createVector(90, 590),
            createVector(130, 580),
            createVector(170, 580),
            createVector(210, 600),
            createVector(250, 600),
            createVector(290, 600),
            createVector(330, 590),
            createVector(370, 585),
            createVector(410, 580),
            createVector(450, 590),
            createVector(490, 590),
            createVector(530, 595),
            createVector(570, 580),
            createVector(610, 580),
            createVector(650, 578),
            createVector(690, 582),
            createVector(730, 575),
            createVector(770, 580),     
            createVector(800, 590),  
            createVector(860, 600),
            createVector(920, 600),
            createVector(980, 600),
            createVector(1040, 600),
            createVector(1100, 590),
            createVector(1160, 590),
            createVector(1200, 600),
            createVector(1250, 600),
            createVector(1250, 650),    
            createVector(1250, 650),     
        ];
    }

    draw() {
        background(images.platform);
        strokeWeight(1);
        
        fill(0);
        beginShape();
        for (const point of this.ground) {
            curveVertex(point.x, point.y);
        }
           
        endShape();
    }

    public getGroundYPosition(x: number) {
        for (let i = 1; i < this.ground.length; i++) {
            if (this.ground[i].x >= x) {
                const leftPoint = this.ground[i - 1];
                const rightPoint = this.ground[i];
                const distX = rightPoint.x - leftPoint.x;
                const normalizedX = x - leftPoint.x;
                const diff = normalizedX / distX;
                const distY = rightPoint.y - leftPoint.y;
                const averageY = leftPoint.y - distY * diff;
                return averageY;
            }
        }
        return 0;
    } 
}