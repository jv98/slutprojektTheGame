class Player {
    private playerImgLeft: p5.Image[];
    private playerImgRight: p5.Image[];
    private frameCounter: number;
    private img: p5.Image;
    //private size: p5.Vector;
    private speed: p5.Vector;
    private characterHP: Number;
    private position: p5.Vector;
    // private hitBoxPlayer: p5.Vector;
    // private hitBoxBucket: p5.Vector;

    constructor() {  
        this.playerImgLeft = [];
        this.playerImgRight = [];
        this.setupImages();
        this.img = this.playerImgLeft[0];
        this.position = new p5.Vector();
        this.position.x = 500;
        this.speed = new p5.Vector();
        this.speed.x = 7;
        this.frameCounter = 1;
        this.characterHP = 3;

    }

    private setupImages() {
        const playerImgCount = 6;
        for (let i = 1; i <= playerImgCount; i++) {
            this.playerImgLeft.push(loadImage('assets/player-left' + i + '.png'));
        }
        for (let i = 1; i <= playerImgCount; i++) {
            this.playerImgRight.push(loadImage('assets/player-right' + i + '.png'));
        }
        
    }

    movement() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.position.x -= this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgLeft[current];
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.position.x += this.speed.x;
            let current = Math.floor((this.frameCounter % 60) / 10);
            this.img = this.playerImgRight[current];
        }
    }

    update() {
        this.movement();

    }

    draw() {
        this.frameCounter += 1;

        image(this.img, this.position.x, this.position.y, 150, 150);

    }
}