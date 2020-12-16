class TheGame {
    // private environment: Environment;
    private star: Star;
    private badthing: BadThing;
    // private fallingObject: FallingObject[];
    // private startMenu: StartMenu;
    // private gameStatusbar: GameStatusbar;

    constructor() {
        this.star = new Star();
        this.badthing = new BadThing();
    }

    update() {
        this.star.update();
        this.badthing.update();
        this.checkCollision()
    }

    draw() {
        this.star.draw();
        this.badthing.draw();
    }

    spawnNewObject() {

    }

    checkCollision() {
        let distance = dist(this.star.position.x, this.star.position.y, this.badthing.position.x, this.badthing.position.y)

        if(distance < this.star.size + this.badthing.size) {
            this.badthing.position.y = 0
        } else {
            
        }

    }

}