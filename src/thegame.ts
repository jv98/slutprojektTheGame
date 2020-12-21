class TheGame {
    // private environment: Environment;
    private star: Star;
    private badthing: BadThing;
    private extraLife: ExtraLife;
    private fallingObjects: FallingObject[];
    private spawnTimer: number
    private player = new Player();
    // private startMenu: StartMenu;
    // private gameStatusbar: GameStatusbar;

    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.extraLife = new ExtraLife();
        this.fallingObjects = []
        this.spawnTimer = 0
        this.player = new Player();
    }

    update() {
        this.player.update();
        this.star.update();
        this.badthing.update();
        this.extraLife.update();
        this.checkCollision()
        this.spawnNewObject()
        for (const fallingObj of this.fallingObjects) {
            fallingObj.update()
        }
    }

    draw() {
        clear();
        this.player.draw();
        for (const fallingObj of this.fallingObjects) {
            fallingObj.draw()
        }
    }

    spawnNewObject() {
        if (this.spawnTimer > 2500) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());
            this.fallingObjects.push(new ExtraLife());
        }
                
        this.spawnTimer += deltaTime
    }

    checkCollision() {
        for (const fallingObj of this.fallingObjects) {                 
        let i = this.fallingObjects.indexOf(fallingObj)
            
            if(fallingObj instanceof Star) {     
                if (this.player.bucketCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Poäng") //Add points in statusbar + sound
                }
                // let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y)          
                // if(distance < fallingObj.size + this.extraLife.size) {
                //     
                //     console.log("Poäng")
                // }  else if (fallingObj.position.y > windowHeight) {
                //     this.fallingObjects.splice(i, 1)
                // }   
            }   
            if (fallingObj instanceof BadThing) {      
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("Ouch"); // Decrease life in statusBar + sound
                }
                
                // let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y)          
                // if(distance < fallingObj.size + this.extraLife.size) {
                //     this.fallingObjects.splice(i, 1)
                //     console.log("Skada")
                // }   else if (fallingObj.position.y > windowHeight) {
                //         this.fallingObjects.splice(i, 1)
                // }             
            }
            if (fallingObj instanceof ExtraLife) {             
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    console.log("1up!!!"); // Add life to statusBar
                }
                
                // let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y)          
                // if(distance < fallingObj.size + this.extraLife.size) {
                //     this.fallingObjects.splice(i, 1)
                //     console.log("Skada")
                // }   else if (fallingObj.position.y > windowHeight) {
                //         this.fallingObjects.splice(i, 1)
                // }             
            }
        }
    }
}