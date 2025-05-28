import * as PIXI from "pixi.js";
import {
  Application,
  Container,
  Text,
  Graphics,
  onTick,
  useApp,
} from "@danneu/solid-pixi";
import { createSignal, Suspense, type Component } from "solid-js";

function buildGrid(graphics: PIXI.Graphics) {
  // Draw 10 vertical lines spaced 10 pixels apart
  for (let i = 0; i < 11; i++) {
    // Move to top of each line (x = i*10, y = 0)
    graphics
      .moveTo(i * 10, 0)
      // Draw down to bottom (x = i*10, y = 100)
      .lineTo(i * 10, 100);
  }

  // Draw 10 horizontal lines spaced 10 pixels apart
  for (let i = 0; i < 11; i++) {
    // Move to start of each line (x = 0, y = i*10)
    graphics
      .moveTo(0, i * 10)
      // Draw across to end (x = 100, y = i*10)
      .lineTo(100, i * 10);
  }

  return graphics;
}

const Example: Component = () => {
  const app = useApp();

  const [scale, setScale] = createSignal(1);

  let ticks = 0;

  onTick(() => {
    ticks += 0.01;
    setScale(1 + (Math.sin(ticks) + 1) * 2);
  });

  return (
    <>
      <Text
        y={5}
        x={10}
        text="Normal graphics"
        style={{
          fontSize: 16,
          fill: {
            color: 0xffffff,
          },
        }}
      />
      <Text
        y={5}
        ref={(el) => {
          // align to right
          el.x = app.screen.width - el.width - 10;
        }}
        text="Pixel-line graphics"
        style={{
          fontSize: 16,
          fill: {
            color: 0xffffff,
          },
        }}
      />
      <Container
        x={app.screen.width / 2}
        y={app.screen.height / 2}
        scale={scale()}
      >
        <Graphics // Non-pixel-line grid
          x={-100}
          y={-50}
          ref={(g) =>
            buildGrid(g).stroke({ color: 0xffffff, pixelLine: false })
          }
        />
        <Graphics // Pixel-line grid
          y={-50}
          ref={(g) =>
            buildGrid(g).stroke({ color: 0xffffff, pixelLine: true, width: 1 })
          }
        />
      </Container>
    </>
  );
};

export default function () {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application
        antialias
        resolution={devicePixelRatio}
        width={800 / devicePixelRatio}
        height={600 / devicePixelRatio}
      >
        <Example />
      </Application>
    </Suspense>
  );
}
