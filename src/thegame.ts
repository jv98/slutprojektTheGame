class TheGame {
    // private environment: Environment;
    //private player: Player;
    //private fallingObject: FallingObject[];
    // private startMenu: StartMenu;
    private gameStatusbar: GameStatusbar;
    private star: Star;
    private badthing: BadThing;
    private extraLife: ExtraLife;
    private fallingObjects: FallingObject[];
    private spawnTimer: number
    private player = new Player();
    //private startMenu: StartMenu;
    //private gameStatusbar: GameStatusbar;

    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.extraLife = new ExtraLife();
        this.fallingObjects = []
        this.spawnTimer = 0
        this.player = new Player();
        //this.startMenu: StartMenu: 
        this.gameStatusbar = new GameStatusbar(); 

    }

    update() {
        this.player.update();
        this.star.update();
        this.badthing.update();
        this.extraLife.update();
        this.checkCollision()
        this.spawnNewObject()
        this.gameStatusbar.update(); 
        for (const fallingObj of this.fallingObjects) {
            fallingObj.update()
        }
    }

    draw() {
        clear();
        this.player.draw();
        this.gameStatusbar.draw(); 
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
                let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y)          
                if(distance < fallingObj.size + this.extraLife.size) {
                    this.fallingObjects.splice(i, 1)
                    console.log("Poäng")
                }  else if (fallingObj.position.y > windowHeight) {
                    this.fallingObjects.splice(i, 1)
                }   
            }   
            if(fallingObj instanceof BadThing) {                
                let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y)          
                if(distance < fallingObj.size + this.extraLife.size) {
                    this.fallingObjects.splice(i, 1)
                    console.log("Skada")
                }   else if (fallingObj.position.y > windowHeight) {
                        this.fallingObjects.splice(i, 1)
                }             
            }
            if(fallingObj instanceof ExtraLife) {                
                let distance = dist(fallingObj.position.x, fallingObj.position.y, this.extraLife.position.x, this.extraLife.position.y)          
                if(distance < fallingObj.size + this.extraLife.size) {
                    this.fallingObjects.splice(i, 1)
                    console.log("Skada")
                }   else if (fallingObj.position.y > windowHeight) {
                        this.fallingObjects.splice(i, 1)
                }             
            }
        }
    } 
    
}