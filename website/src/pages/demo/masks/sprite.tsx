import * as PIXI from "pixi.js";
import { onTick, Application, Sprite } from "@danneu/solid-pixi";
import {
  createResource,
  createSignal,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const Example: Component<{
  textures: Record<string, PIXI.Texture>;
}> = (props) => {
  const [target, setTarget] = createSignal({ x: 0, y: 0 });
  const [mask, setMask] = createSignal({ x: 310, y: 190 });

  const randomizeTarget = () => {
    setTarget({
      x: Math.floor(Math.random() * 550),
      y: Math.floor(Math.random() * 300),
    });
  };

  onTick(() => {
    // Move mask towards target
    setMask((prev) => ({
      x: prev.x + (target().x - prev.x) * 0.1,
      y: prev.y + (target().y - prev.y) * 0.1,
    }));

    if (Math.abs(mask().x - target().x) < 1) {
      randomizeTarget();
    }
  });

  // When we already have a PIXI.Sprite instance outside of the render fn,
  // we can use <Sprite as={instance} /> to add it to the component tree,
  // and the Sprite node will us the instance instead of creating a new one.
  // Else you'd have to `app.stage.addChild(instance)` and `app.stage.removeChild(instance)`
  // manually.
  const maskSprite = new PIXI.Sprite(props.textures["cells"]);

  return (
    <>
      <Sprite texture={props.textures["bg"]} />
      <Sprite texture={props.textures["cells"]} scale={1.5} mask={maskSprite} />
      <Sprite
        as={maskSprite}
        texture={props.textures["flowerTop"]}
        anchor={0.5}
        x={mask().x}
        y={mask().y}
      />
    </>
  );
};

export default function () {
  const [textures] = createResource(async () => {
    return await PIXI.Assets.load<PIXI.Texture>([
      { alias: "bg", src: "https://pixijs.com/assets/bg_plane.jpg" },
      { alias: "cells", src: "https://pixijs.com/assets/cells.png" },
      { alias: "flowerTop", src: "https://pixijs.com/assets/flowerTop.png" },
    ]);
  });

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application backgroundColor={0x1099bb} eventMode="static">
          <Show when={textures()}>
            {(textures) => <Example textures={textures()} />}
          </Show>
        </Application>
      </Suspense>
    </>
  );
}
