System.register(["./car"], function (exports_1, context_1) {
    "use strict";
    var Car, canvas, ctx, car;
    var __moduleName = context_1 && context_1.id;
    function Animate() {
        car.draw(ctx);
        requestAnimationFrame(Animate);
    }
    return {
        setters: [
            function (Car_1) {
                Car = Car_1;
            }
        ],
        execute: function () {
            canvas = document.querySelector(".canvas");
            ctx = canvas.getContext("2d");
            canvas.width = 200;
            canvas.height = window.innerHeight;
            car = new Car(100, 100, 30, 50);
            if (!ctx)
                console.log("Canvas not loaded");
            else
                Animate();
        }
    };
});
