const PI2 = Math.PI * 2;
export class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx) {
    ctx.save();
    ctx.fillStyle = '#000000';
    ctx.beginPath();

    const angle = PI2 / this.sides; // 360deg를 면 개수로 나눈다

    ctx.translate(this.x, this.y);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i); // 극좌표로 도형만들기
      const y = this.radius * Math.sin(angle * i);

      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }

    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
