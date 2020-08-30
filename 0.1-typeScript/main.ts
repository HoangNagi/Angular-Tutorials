
interface Point{
x: number;
y: number;
}
let drawTwo = (point: Point) => {
    console.log(`Draw  x: ${point.x} and y: ${point.y}`);
}
drawTwo({
    x: 100,
    y: 100,
});


class DrawOne {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    drawOneF1(){
        console.log(`x: ${this.x}, y: ${this.y}`);
    }
}
let drawOne = new DrawOne(1,2);
drawOne.drawOneF1();