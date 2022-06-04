System.register([], function (exports_1, context_1) {
    "use strict";
    var Car;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Car = class Car {
                constructor(x, y, width, height) {
                    this.x = x;
                    this.y = y;
                    this.width = width;
                    this.height = height;
                }
                draw(ctx) {
                    ctx.beginPath();
                    ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
                    ctx.fill();
                }
            };
            exports_1("Car", Car);
        }
    };
});
