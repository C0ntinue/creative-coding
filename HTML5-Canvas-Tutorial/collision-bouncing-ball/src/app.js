import { Ball } from './ball.js';
import { Block } from './block.js';

class App {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    window.addEventListener('resize', this.resize, false); // 가변적인 브라우저를 위해 리사이즈를 해서 크기를 구함
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
    this.block = new Block(700, 30, 300, 450);

    window.requestAnimationFrame(this.animate);
  }

  resize = () => {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2; // 레티나 디스플레이에서 선명하게 보이려고
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  };

  animate = t => {
    window.requestAnimationFrame(this.animate);

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); // 그려져있는 item을 지워서 하나의 원만 남게함

    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  };
}

window.onload = () => {
  new App();
};
