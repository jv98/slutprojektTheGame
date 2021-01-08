class TheGame {
    private environment: Environment;
    private star: Star;
    private badthing: BadThing;
    private extraLife: ExtraLife;
    private fallingObjects: FallingObject[];
    private spawnTimer: number
    private spawnTimerHeart: number
    private player: Player;
    // private startMenu: StartMenu;
    private gameStatusbar: GameStatusbar;
    private stuffedAnimal: StuffedAnimal;
    private startMenu: StartMenu;
    private menuMode: boolean;
    private spawnInterval: number
    private scoreToWin: number

    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.extraLife = new ExtraLife();
        this.fallingObjects = []
        this.spawnTimer = 0
        this.spawnTimerHeart = 0
        this.player = new Player();
        this.environment = new Environment();
        this.gameStatusbar = new GameStatusbar();
        this.stuffedAnimal = new StuffedAnimal();
        this.startMenu = new StartMenu();
        this.menuMode = true;
        this.spawnInterval = 1500;
        this.scoreToWin = 500        
    }

    update() {
        
        if (this.menuMode == true) {
            if (keyCode === ENTER) {
                this.menuMode = false;
            }
        } else {
            this.player.update();
            this.star.update();
            this.badthing.update();
            this.extraLife.update();
            this.checkCollision()
            this.spawnNewObject()
            
            if (this.gameStatusbar.score < this.scoreToWin) {
                for (const fallingObj of this.fallingObjects) {
                    fallingObj.update()
                }
            } else if(this.gameStatusbar.score >= this.scoreToWin) {
                this.fallingObjects = []
            }

            if (this.gameStatusbar.score === this.scoreToWin) {
                this.stuffedAnimal.update();
                //winning message from EndScene
            }
            if (this.gameStatusbar.characterHP == 0) {
                //losing message from EndScene
            }
            this.gameStatusbar.update(); 
        }

        console.log(this.fallingObjects)
        
    }
    
    draw() {
        clear();
        
        if (this.menuMode) {
            this.startMenu.draw();
        } else {
            this.environment.draw();
            this.player.draw();

            if (this.gameStatusbar.score < this.scoreToWin) {
                for (const fallingObj of this.fallingObjects) {
                    fallingObj.draw()
                }
            } 
            else if(this.gameStatusbar.score >= this.scoreToWin) {
              this.fallingObjects = []
            }
                
            if (this.gameStatusbar.score === this.scoreToWin) {
                //winning message from EndScene med setTimeout, så björnen hunnit falla ner.
            }
            if (this.gameStatusbar.characterHP == 0) {
                //losing message from EndScene
            }
            this.gameStatusbar.draw(); 
            this.stuffedAnimal.draw();
        }
    }

    spawnNewObject() {
        if (this.spawnTimer > this.spawnInterval) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());     
               
        }
        if (this.spawnTimerHeart > 15000) {
            this.spawnTimerHeart = 0;
            this.fallingObjects.push(new ExtraLife());    
            
        }

        if (this.gameStatusbar.score > 50) {
            this.spawnInterval = 1000
        }

        if (this.gameStatusbar.score > 100) {
            this.spawnInterval = 750
        }

        if (this.gameStatusbar.score > 250) {
            this.spawnInterval = 500
        }

        if (this.gameStatusbar.score > 400) {
            this.spawnInterval = 300
        }
        
                
        this.spawnTimerHeart += deltaTime
        this.spawnTimer += deltaTime
    }

    checkCollision() {
        for (const fallingObj of this.fallingObjects) {                 
        let i = this.fallingObjects.indexOf(fallingObj)
            
            if(fallingObj instanceof Star) {     
                if (this.player.bucketCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    sounds.starr.play()
                    this.gameStatusbar.score = this.gameStatusbar.score + 10                    
                } else if (fallingObj.position.y > height-5) {
                    this.fallingObjects.splice(i, 1);
                }  
            }   

            if (fallingObj instanceof BadThing) {      
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    sounds.ouch.play()
                    this.gameStatusbar.characterHP = this.gameStatusbar.characterHP - 1
                    this.gameStatusbar.score = this.gameStatusbar.score - 10
                }   else if (fallingObj.position.y > height-5) {
                    this.fallingObjects.splice(i, 1);
                }  
                
            }
            if (fallingObj instanceof ExtraLife) {             
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    sounds.life.play()
                    this.gameStatusbar.characterHP = this.gameStatusbar.characterHP + 1
                }  else if (fallingObj.position.y > height-5) {
                    this.fallingObjects.splice(i, 1);
                }   
            }

        }
    }
}