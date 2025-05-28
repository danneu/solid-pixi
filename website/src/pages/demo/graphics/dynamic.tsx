import { Application, Graphics, onTick } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import { createEffect, createSignal, Suspense, type Component } from "solid-js";

const MovingShape: Component = () => {
  let g: PIXI.Graphics | undefined;

  const [count, setCount] = createSignal(0);

  onTick(() => {
    setCount((c) => c + 0.1);
  });

  createEffect(() => {
    const c = count();
    if (!g) return;
    // Redraw every time count changes
    g.clear();
    g.moveTo(-120 + Math.sin(c) * 20, -100 + Math.cos(c) * 20)
      .lineTo(120 + Math.cos(c) * 20, -100 + Math.sin(c) * 20)
      .lineTo(120 + Math.sin(c) * 20, 100 + Math.cos(c) * 20)
      .lineTo(-120 + Math.cos(c) * 20, 100 + Math.sin(c) * 20)
      .lineTo(-120 + Math.sin(c) * 20, -100 + Math.cos(c) * 20)
      .fill({ color: 0xffff00, alpha: 0.5 })
      .stroke({ width: 10, color: 0xff0000 });
  });

  const rotation = () => count() * 0.1;

  return (
    <Graphics
      x={800 / 2}
      y={600 / 2}
      ref={(el) => {
        g = el;
      }}
      rotation={rotation()}
    />
  );
};

export default function () {
  // We'll use the same graphics object for everything
  let graphics = new PIXI.Graphics();

  const handleClick = () => {
    if (!graphics) return;
    graphics.moveTo(Math.random() * 800, Math.random() * 600);
    graphics.bezierCurveTo(
      Math.random() * 800,
      Math.random() * 600,
      Math.random() * 800,
      Math.random() * 600,
      Math.random() * 800,
      Math.random() * 600
    );
    graphics.stroke({
      width: Math.random() * 30,
      color: Math.random() * 0xffffff,
    });
  };

  return (
    <>
      <p>Click on the canvas to draw random curves.</p>
      <Suspense fallback={<div>Loading</div>}>
        <Application
          antialias
          eventMode="static"
          ref={(app) => {
            console.log("app ref. app.screen", app.screen);
            app.stage.hitArea = app.screen;
            app.stage.on("pointerdown", handleClick);
          }}
        >
          <Graphics
            ref={(g) => {
              graphics = g;
              g.moveTo(50, 50)
                .lineTo(250, 50)
                .lineTo(100, 100)
                .lineTo(250, 220)
                .lineTo(50, 220)
                .lineTo(50, 50)
                .fill({ color: 0xff3300 })
                .stroke({ width: 10, color: 0xffd900 });

              g.moveTo(210, 300)
                .lineTo(450, 320)
                .lineTo(570, 350)
                .quadraticCurveTo(600, 0, 480, 100)
                .lineTo(330, 120)
                .lineTo(410, 200)
                .lineTo(210, 300)
                .fill({ color: 0xff700b })
                .stroke({ width: 10, color: 0xff0000, alpha: 0.8 });

              // Draw a rectangle
              g.rect(50, 250, 100, 100);
              g.stroke({ width: 2, color: 0x0000ff });

              // Draw a circle
              g.circle(470, 200, 100);
              g.fill({ color: 0xffff0b, alpha: 0.5 });

              g.moveTo(30, 30);
              g.lineTo(600, 300);
              g.stroke({ width: 20, color: 0x33ff00 });
            }}
          />

          <MovingShape />
        </Application>
      </Suspense>
    </>
  );
}
