import * as PIXI from "pixi.js";
import { batch, createResource, createSignal, Suspense } from "solid-js";
import { Application, Sprite, useApp, onTick, Text } from "@danneu/solid-pixi";

function Example() {
  const app = useApp();
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/bunny.png");
  });

  const [rotateLeft, setRotateLeft] = createSignal(false);
  const [rotation, setRotation] = createSignal(0);
  const [scale, setScale] = createSignal(1);

  onTick(() => {
    batch(() => {
      setRotation(rotation() + (rotateLeft() ? -0.03 : 0.03));
      setScale(2 * Math.sin(rotation()) + 3);
    });
  });

  return (
    <>
      <Sprite
        interactive={true}
        cursor="pointer"
        onpointertap={() => setRotateLeft(!rotateLeft())}
        texture={texture()}
        anchor={0.5}
        x={app.screen.width / 2}
        y={app.screen.height / 2}
        rotation={rotation()}
        scale={scale()}
      />

      <Text
        text="Click the bunny"
        anchor={0.5}
        x={app.screen.width / 2}
        y={100}
        style={{
          fill: "white",
          stroke: {
            color: "black",
            width: 2,
          },
        }}
      />
    </>
  );
}

export default function () {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application
        backgroundColor={0x1099bb}
        resolution={devicePixelRatio}
        width={800 / devicePixelRatio}
        height={600 / devicePixelRatio}
      >
        <Example />
      </Application>
    </Suspense>
  );
}
