import { Car } from "./car";
const canvas = document.querySelector(".canvas") as HTMLCanvasElement;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = 200;
canvas.height = window.innerHeight;
const car = new Car(100, 100, 30, 50);
if (!ctx) console.log("Canvas not loaded");
else Animate();

function Animate() {
  car.update();
  car.draw(ctx);
  requestAnimationFrame(Animate);
}
