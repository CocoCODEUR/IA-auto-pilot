import { Control } from "./controls";

export class Car {
  x: number;
  y: number;
  width: number;
  height: number;
  controls: any;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.controls = new Control();
  }

  update() {
    if (this.controls.up) {
      this.y -= 2;
    }
    if (this.controls.down) {
      this.y += 2;
    }
    if (this.controls.right) {
      this.x += 2;
    }
    if (this.controls.left) {
      this.x -= 2;
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();
  }
}
