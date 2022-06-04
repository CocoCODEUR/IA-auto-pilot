export class Control {
  right: boolean;
  left: boolean;
  up: boolean;
  down: boolean;
  constructor() {
    (this.right = false),
      (this.left = false),
      (this.up = false),
      (this.down = false);
    this.addkeyboardListeners();
  }
  addkeyboardListeners() {
    document.onkeydown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.up = true;
          break;
        case "ArrowDown":
          this.down = true;
          break;
      }
      console.table(this);
    };
    document.onkeyup = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.up = false;
          break;
        case "ArrowDown":
          this.down = false;
          break;
      }
      console.table(this);
    };
  }
}
