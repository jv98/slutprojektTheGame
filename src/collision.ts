//Interfaces and helper functions for handling collisions.
interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface Point {
    x: number;
    y: number;
}

function rectangleOverlapsPoint(rectangle: Rectangle, point: Point): Boolean {
    if (point.x > rectangle.x && point.x < rectangle.x + rectangle.width){
        return point.y > rectangle.y && point.y < rectangle.y + rectangle.height;
    }
    return false;
}

function rectangleOverlapsRect(rectangle1: Rectangle, rectangle2: Rectangle) {
    const rightBottomCorner = {
        x: rectangle2.x + rectangle2.width,
        y: rectangle2.y,
    }

    const rightUpperCorner = {
        x: rectangle2.x + rectangle2.width,
        y: rectangle2.y + rectangle2.height,
    }

    const leftUpperCorner = {
        x: rectangle2.x,
        y: rectangle2.y + rectangle2.height,
    }
    
    return (rectangleOverlapsPoint(rectangle1, rectangle2) ||
            rectangleOverlapsPoint(rectangle1, rightBottomCorner) ||
            rectangleOverlapsPoint(rectangle1, rightUpperCorner) ||
            rectangleOverlapsPoint(rectangle1, leftUpperCorner));
}

function drawRectFromHitbox(hitbox: Rectangle): void {
    rect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
}
