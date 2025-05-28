import { Application, MeshPlane, onTick } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import { createResource, Suspense, type Component, Show } from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  let timer = 0;

  return (
    <MeshPlane
      ref={(el) => {
        const { buffer } = el.geometry.getAttribute("aPosition");
        onTick(() => {
          for (let i = 0; i < buffer.data.length; i++) {
            buffer.data[i] += Math.sin(timer / 10 + i) * 0.5;
          }
          buffer.update();
          timer++;
        });
      }}
      texture={props.texture}
      x={100}
      y={100}
      verticesX={10}
      verticesY={10}
    />
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/bg_grass.jpg");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application backgroundColor={0x1099bb}>
        <Show when={texture()}>
          <Example texture={texture()} />
        </Show>
      </Application>
    </Suspense>
  );
}
