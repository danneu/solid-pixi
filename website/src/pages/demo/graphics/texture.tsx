import * as PIXI from "pixi.js";
import { Application, Graphics, useApp } from "@danneu/solid-pixi";
import { createResource, Show, Suspense, type Component } from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const app = useApp();

  const context = new PIXI.GraphicsContext()
    .circle(0, 0, 120)
    .fill("green")
    .texture(
      props.texture,
      0xffffff,
      -props.texture.width / 2,
      -props.texture.height / 2
    )
    // add a baby purple panda
    .translate(100, 100)
    .scale(0.4)
    .texture(props.texture, "yellow");

  return (
    <>
      <Graphics
        x={app.screen.width / 2}
        y={app.screen.height / 2}
        ref={(g) => {
          g.context = context;
        }}
      />
      <Graphics
        x={app.screen.width / 2 - 200}
        y={app.screen.height / 2 - 200}
        rotation={0.5}
        ref={(g) => {
          g.context = context;
        }}
      />
    </>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/panda.png");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application antialias background="white">
        <Show when={texture()}>
          <Example texture={texture()} />
        </Show>
      </Application>
    </Suspense>
  );
}
