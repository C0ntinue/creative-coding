const PI2 = Math.PI * 2;
export class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx, moveX) {
    ctx.save();
    ctx.fillStyle = '#000000';
    //ctx.beginPath();

    const angle = PI2 / this.sides; // 360deg(2파이라디안)를 면 개수로 나눠서 각(라디안)을 구한다
    const angle2 = PI2 / 4;

    ctx.translate(this.x, this.y);

    this.rotate -= moveX * -0.008; // 회전하는 정도, 음수를 줘서 포인터 방향대로 돌아가게 함
    ctx.rotate(this.rotate);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i); // 극좌표로 도형만들기
      const y = this.radius * Math.sin(angle * i);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((((360 / this.sides) * i + 45) * Math.PI) / 180);
      ctx.beginPath();
      for (let j = 0; j < 4; j++) {
        const x2 = 80 * Math.cos(angle2 * j);
        const y2 = 80 * Math.sin(angle2 * j);
        j === 0 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
      }
      ctx.fill();
      ctx.closePath();
      ctx.restore();
      // //i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

      // ctx.beginPath();
      // ctx.arc(x, y, 30, 0, PI2, false);
      // ctx.fill();
    }

    //ctx.fill();
    //ctx.closePath();
    ctx.restore();
  }
}
