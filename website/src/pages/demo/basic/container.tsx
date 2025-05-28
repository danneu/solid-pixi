import {
  Application,
  onTick,
  useApp,
  Sprite,
  Container,
} from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import {
  createResource,
  createSignal,
  Index,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const app = useApp();
  const [rotation, setRotation] = createSignal(0);

  onTick((tick) => {
    setRotation(rotation() - 0.01 * tick.deltaTime);
  });

  return (
    <Container
      x={app.screen.width / 2}
      y={app.screen.height / 2}
      rotation={rotation()}
      ref={(el) => {
        // Wait til container is mounted so that we get its size
        // after its children are mounted
        el.pivot.x = el.width / 2;
        el.pivot.y = el.height / 2;
      }}
    >
      <Index each={Array(25).fill(0)}>
        {(_, i) => (
          <Sprite
            x={(i % 5) * 40}
            y={Math.floor(i / 5) * 40}
            texture={props.texture}
          />
        )}
      </Index>
    </Container>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/bunny.png");
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
