import { Polygon } from './polygon.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener('resize', this.resize, false);
    this.resize();

    this.isDown = false;
    this.moveX = 0;
    this.offsetX = 0;

    document.addEventListener('pointerdown', this.onDown, false); // false : 기본값. 클릭된 자식부터 최상위 부모까지 상위로 이동하며 이벤트를 처리(Event Bubbling)
    document.addEventListener('pointermove', this.onMove, false);
    document.addEventListener('pointerup', this.onUP, false);

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
      12 // sides
    );
  };

  animate = () => {
    window.requestAnimationFrame(this.animate);

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.moveX *= 0.72;

    this.polygon.animate(this.ctx, this.moveX);
  };

  onDown = e => {
    this.isDown = true;
    this.moveX = 0;
    this.offsetX = e.clientX;
  };

  onMove = e => {
    if (this.isDown) {
      this.moveX = e.clientX - this.offsetX;
      this.offsetX = e.clientX;
    }
  };

  onUP = e => {
    this.isDown = false;
  };
}

window.onload = () => {
  new App();
};
