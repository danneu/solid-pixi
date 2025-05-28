import * as PIXI from "pixi.js";
import { Application, Container, MeshRope, onTick } from "@danneu/solid-pixi";
import { createResource, Show, Suspense, type Component } from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const ropeLength = 918 / 20;
  const points = Array.from(
    { length: 20 },
    (_, i) => new PIXI.Point(i * ropeLength, 0)
  );

  let count = 0;

  onTick(() => {
    count += 0.1;

    for (let i = 0; i < points.length; i++) {
      points[i].y = Math.sin(i * 0.5 + count) * 30;
      points[i].x = i * ropeLength + Math.cos(i * 0.3 + count) * 20;
    }
  });

  return (
    <Container x={400} y={300} scale={800 / 1100}>
      <MeshRope texture={props.texture} points={points} x={-459} />;
    </Container>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load<PIXI.Texture>(
      "https://pixijs.com/assets/snake.png"
    );
  });

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application backgroundColor={0x1099bb} eventMode="static">
          <Show when={texture()}>
            {(texture) => <Example texture={texture()} />}
          </Show>
        </Application>
      </Suspense>
    </>
  );
}
