
/*
class Player {
    private imgLeft: p5.Image;
    private imgRight: p5.Image;
    private img: p5.Image;
    //private size: p5.Vector;
    private speed: p5.Vector;
    private direction: String;
    private characterHP: Number;
    private position: p5.Vector;
    // private hitBoxPlayer: p5.Vector;
    // private hitBoxBucket: p5.Vector;

    constructor() {        
        this.imgLeft = loadImage('assets/player-left1.png');
        this.imgRight = loadImage('assets/player-right1.png');
        this.img = this.imgLeft;
        this.position = new p5.Vector();
        this.speed = new p5.Vector();
        this.speed.x = 10;
        this.direction = 'right';
        this.characterHP = 3;

    }

    movement() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.position.x -= this.speed.x;
            this.img = this.imgLeft;
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.position.x += this.speed.x;
            this.img = this.imgRight;
        }
    }

    update() {
        this.movement();

    }

    draw() {
        image(this.img, this.position.x, this.position.y, 150, 150);

    }
}

*/ 