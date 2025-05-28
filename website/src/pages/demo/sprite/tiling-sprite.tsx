import * as PIXI from "pixi.js";
import { useApp, onTick, Application, TilingSprite } from "@danneu/solid-pixi";
import {
  createResource,
  createSignal,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const app = useApp();

  const [seconds, setSeconds] = createSignal(0);

  onTick((tick) => {
    setSeconds((n) => n + tick.deltaMS / 1000);
  });

  const scale = () => ({
    x: 2 + Math.sin(seconds() * 0.25),
    y: 2 + Math.cos(seconds() * 0.25),
  });

  const tilePosition = () => {
    return {
      x: seconds() * 50,
      y: seconds() * 50,
    };
  };

  return (
    <TilingSprite
      texture={props.texture}
      width={app.screen.width}
      height={app.screen.height}
      tilePosition={tilePosition()}
      tileScale={scale()}
    />
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/p2.jpeg");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Show when={texture()}>
        <Application>
          <Example texture={texture()} />
        </Application>
      </Show>
    </Suspense>
  );
}
