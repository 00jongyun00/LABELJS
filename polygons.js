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
    this.ctx.strokeStyle = "skyblue";
    this.ctx.fillStyle = INITIAL_COLOR;
		this.ctx.lineWidth = 2.5;
		this.points = new Array();
		this.startPoint = null;
  }
  getCanvas() {
    return this.canvas;
  }

  onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
  };

  onMouseDown = (event) => {
		const x = event.offsetX;
		const y = event.offsetY;
		this.ctx.strokeStyle = "skyblue";
    this.ctx.beginPath();
    this.ctx.arc(x, y, 3, 0, 2 * Math.PI);
		this.ctx.stroke();
		this.pointsConnection(x, y);
	};
	
	pointsConnection = (x, y) => {
		const pointX = x;
		const pointY = y;
		let lastX, lastY, beforeLastX, beforeLastY;

		this.points.push([x, y]);
		if (this.points.length < 2) {
			this.startPoint = this.points[0];
		} else {
			this.ctx.strokeStyle = "black";
			console.log(this.points[this.points.length - 2])
			beforeLastX = this.points[this.points.length - 2][0];
			beforeLastY = this.points[this.points.length - 2][1];
			lastX = this.points[this.points.length - 1][0];
			lastY = this.points[this.points.length - 1][1];
			this.ctx.beginPath();
			this.ctx.moveTo(beforeLastX, beforeLastY);
			this.ctx.lineTo(lastX, lastY);
			this.ctx.stroke();
		}
	}
}

main = new MainCanvas("mainCanvas");
canvas = main.getCanvas();

if (canvas) {
  canvas.addEventListener("mousemove", main.onMouseMove);
  canvas.addEventListener("mousedown", main.onMouseDown);
}
