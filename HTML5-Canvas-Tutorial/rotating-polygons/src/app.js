import { Polygon } from './polygon.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener('resize', this.resize, false);
    this.resize();

    window.requestAnimationFrame(this.animate);
  }
  resize = () => {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 1;
    this.canvas.height = this.stageHeight * 1;
    this.ctx.scale(1, 1);

    this.polygon = new Polygon(
      this.stageWidth / 2, // x
      this.stageHeight / 2, // y
      this.stageHeight / 3, // radius
      3 // sides
    );
  };

  animate = () => {
    window.requestAnimationFrame(this.animate);

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.polygon.animate(this.ctx);
  };
}

window.onload = () => {
  new App();
};
