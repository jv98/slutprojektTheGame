class TheGame {
    // private environment: Environment;
    private star: Star;
    private badthing: BadThing;
    private fallingObjects: FallingObject[];
    private spawnTimer: number
    // private startMenu: StartMenu;
    // private gameStatusbar: GameStatusbar;

    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.fallingObjects = []
        this.spawnTimer = 0
    }

    update() {
        this.star.update();
        this.badthing.update();
        this.checkCollision()
        this.spawnNewObject()
        for (const fallingObj of this.fallingObjects) {
            fallingObj.update()
        }
    }

    draw() {
        this.star.draw();
        this.badthing.draw();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.draw()
        }
    }

    spawnNewObject() {
        if (this.spawnTimer > 1000) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());
        }
                
        this.spawnTimer += deltaTime
    }

    checkCollision() {
        let distance = dist(this.star.position.x, this.star.position.y, this.badthing.position.x, this.badthing.position.y)

        // for (const fallingObj of this.fallingObjects) {
        //     if(fallingObj instanceof Star) {
        //         this.badthing.position.x = 200   
        // }

        if(distance < this.star.size + this.badthing.size) {
            this.badthing.position.y = 0
        }
    }

}