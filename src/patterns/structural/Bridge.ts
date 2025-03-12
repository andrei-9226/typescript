interface DrawingAPI {
  drawSquare(): void;
  drawCircle(): void;
}

class CanvasAPI implements DrawingAPI {
  drawSquare(): void {
    console.log("Drawing square with Canvas.");
  }
  drawCircle(): void {
    console.log("Drawing circle with Canvas.");
  }
}

class SvgAPI implements DrawingAPI {
  drawSquare(): void {
    console.log("Drawing square with SVG.");
  }
  drawCircle(): void {
    console.log("Drawing circle with SVG.");
  }
}

abstract class Shape {
  protected drawingAPI: DrawingAPI;

  protected constructor(drawingAPI: DrawingAPI) {
    this.drawingAPI = drawingAPI;
  }

  abstract draw(): void;
  abstract resize(): void;
}

class Circle extends Shape {
  constructor(drawingAPI: DrawingAPI) {
    super(drawingAPI);
  }

  draw() {
    this.drawingAPI.drawCircle();
  }

  resize(): void {
    console.log("resize circle");
  }
}

class Square extends Shape {
  constructor(drawingAPI: DrawingAPI) {
    super(drawingAPI);
  }

  draw() {
    this.drawingAPI.drawSquare();
  }

  resize(): void {
    console.log("resize Square");
  }
}

const circleCanvas = new Circle(new CanvasAPI());
const squareSVG = new Square(new SvgAPI());

circleCanvas.draw()
squareSVG.draw()
