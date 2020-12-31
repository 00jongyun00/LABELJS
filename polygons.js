// default set value
const INITIAL_COLOR = "#2c2c2c";

class MainCanvas {
  constructor(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
    this.ctx.strokeStyle = INITIAL_COLOR;
    this.ctx.fillStyle = INITIAL_COLOR;
    this.ctx.lineWidth = 2.5;
  }
  getCanvas() {
    return this.canvas;
  }

  onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
  };

  onMouseDown = (event) => {
    console.log(this.ctx);
    this.ctx.beginPath();
    this.ctx.arc(event.offsetX, event.offsetY, 1, 0, 2 * Math.PI);
    this.ctx.stroke();
  };
}

main = new MainCanvas("mainCanvas");
canvas = main.getCanvas();

if (canvas) {
  canvas.addEventListener("mousemove", main.onMouseMove);
  canvas.addEventListener("mousedown", main.onMouseDown);
}
