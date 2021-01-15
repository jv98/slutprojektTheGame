class TheGame {
    private environment: Environment;
    private star: Star;
    private badthing: BadThing;
    private extraLife: ExtraLife;
    private fallingObjects: FallingObject[];
    private spawnTimer: number
    private spawnTimerHeart: number
    private player: Player;
    private gameStatusbar: GameStatusbar;
    private stuffedAnimal: StuffedAnimal;
    private startMenu: StartMenu;
    private menuMode: boolean;
    private endSceneWon: EndSceneWin;
    private endSceneLost: EndSceneLost;
    private endSceneMode: boolean;
    private spawnInterval: number;
    private scoreToWin: number;

    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
        this.extraLife = new ExtraLife();
        this.fallingObjects = [];
        this.spawnTimer = 0;
        this.spawnTimerHeart = 0;
        this.player = new Player();
        this.environment = new Environment();
        this.gameStatusbar = new GameStatusbar();
        this.stuffedAnimal = new StuffedAnimal();
        this.startMenu = new StartMenu();
        this.menuMode = true;
        this.endSceneWon = new EndSceneWin();
        this.endSceneLost = new EndSceneLost();
        this.endSceneMode = false;
        this.spawnInterval = 1500;
        this.scoreToWin = 500;        
    }

    update() {
        
        if (this.menuMode) {
            if (keyCode === ENTER) {
                this.menuMode = false;
            }
        } else if (this.endSceneMode) {
            if (keyCode === ENTER) {
                this.endSceneMode = false;
                location.reload();
            }
        } 
        else {
            this.player.update();
            this.star.update();
            this.badthing.update();
            this.extraLife.update();
            this.checkCollision();
            this.spawnNewObject();
            this.playBackgroundMusic();

            if (this.gameStatusbar.score < this.scoreToWin) {
                for (const fallingObj of this.fallingObjects) {
                    fallingObj.update()
                }
            } else if (this.gameStatusbar.score >= this.scoreToWin) {
                this.fallingObjects = []
            }

            if (this.gameStatusbar.score === this.scoreToWin) {
                this.stuffedAnimal.update();
                if (this.player.playerCollision(this.stuffedAnimal.hitbox)){
                    this.endSceneMode = true;
                    sounds.win.play()
                    sounds.win.setVolume(0.1);


                }
            }
            if (this.gameStatusbar.characterHP == 0) {
                this.fallingObjects = []
                this.endSceneMode = true;
                sounds.lose.play()
                sounds.lose.setVolume(0.2);
            }
            this.gameStatusbar.update(); 
        }
    }

    draw() {
        clear();
        
        if (this.menuMode) {
            this.startMenu.draw();
        } else {            

            if (this.gameStatusbar.score < this.scoreToWin) {
                this.environment.draw();
                this.player.draw();
                this.stuffedAnimal.draw();
                for (const fallingObj of this.fallingObjects) {
                    fallingObj.draw()
                }

                this.gameStatusbar.draw(); 

            } 
            else if (this.gameStatusbar.score >= this.scoreToWin) {
              this.fallingObjects = []
            }
                
            if (this.gameStatusbar.score === this.scoreToWin) {
                this.environment.draw();
                this.player.draw();
                this.stuffedAnimal.draw();
                if (this.player.playerCollision(this.stuffedAnimal.hitbox)) {
                    this.endSceneWon.draw();
                }
            }
            if (this.gameStatusbar.characterHP == 0) {
                this.fallingObjects = []
                
                this.endSceneLost.draw();
            }
        }
    }

    playBackgroundMusic() {
        if (keyCode === ENTER) {
            if(!sounds.backgroundMusic.isPlaying()) {
                sounds.backgroundMusic.loop()
                sounds.backgroundMusic.setVolume(0.1);
            } 
        }
        else if (this.gameStatusbar.score === this.scoreToWin) {
            sounds.backgroundMusic.stop()
        } else if (this.gameStatusbar.characterHP == 0) {
            sounds.backgroundMusic.stop()
        }
    }

    spawnNewObject() {
        const multiplier = 1.6
        const fasterSpawnTime = 1000 - this.gameStatusbar.score*multiplier

        if (this.spawnTimer > this.spawnInterval) {
            this.spawnTimer = 0;
            this.fallingObjects.push(new Star());
            this.fallingObjects.push(new BadThing());     
               
        }

        if (this.gameStatusbar.characterHP > 1) {
            if (this.spawnTimerHeart > 15000) {
                this.spawnTimerHeart = 0;
                this.fallingObjects.push(new ExtraLife());   
            } 
        }

        if (this.gameStatusbar.characterHP === 1) {
            if (this.spawnTimerHeart > 5000) {
                this.spawnTimerHeart = 0;
                this.fallingObjects.push(new ExtraLife());   
            }
        }
       
        if (this.gameStatusbar.score > 50) {
            this.spawnInterval = fasterSpawnTime
            console.log(this.spawnInterval)
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
                    sounds.starr.setVolume(0.1);
                    this.gameStatusbar.score = this.gameStatusbar.score + 10                    
                } else if (fallingObj.position.y > height-5) {
                    this.fallingObjects.splice(i, 1);
                }  
            }   

            if (fallingObj instanceof BadThing) {      
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    sounds.ouch.play()
                    sounds.ouch.setVolume(0.1);
                    this.gameStatusbar.characterHP = this.gameStatusbar.characterHP - 1
                    this.gameStatusbar.score = this.gameStatusbar.score - 10;
                    this.player.changeSpeedForSeconds(4, 2);
                }   else if (fallingObj.position.y > height-5) {
                    this.fallingObjects.splice(i, 1);
                }  
                
            }
            if (fallingObj instanceof ExtraLife) {             
                if (this.player.playerCollision(fallingObj.hitbox)) {
                    this.fallingObjects.splice(i, 1);
                    sounds.life.play()
                    sounds.life.setVolume(0.1);
                    this.gameStatusbar.characterHP = this.gameStatusbar.characterHP + 1;
                    this.player.changeSpeedForSeconds(12, 5);
                }  else if (fallingObj.position.y > height-5) {
                    this.fallingObjects.splice(i, 1);
                }   
            }
        }
    }
}