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
    }

    draw() {
        this.star.draw();
        this.badthing.draw();
    }

    spawnNewObject() {

    }

    checkCollision() {

    }

}