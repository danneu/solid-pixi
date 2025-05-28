import {
  AnimatedSprite,
  Application,
  Container,
  useApp,
} from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import {
  createResource,
  Index,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const Example: Component<{ textures: PIXI.Texture[] }> = (props) => {
  const app = useApp();

  return (
    <Index each={Array(50).fill(0)}>
      {() => {
        return (
          <AnimatedSprite
            textures={props.textures}
            x={Math.random() * app.screen.width}
            y={Math.random() * app.screen.height}
            anchor={0.5}
            rotation={Math.random() * 2 * Math.PI}
            scale={0.75 + Math.random() * 0.5}
            ref={(el) => {
              if (el) {
                el.gotoAndPlay((Math.random() * 26) | 0);
              }
            }}
          />
        );
      }}
    </Index>
  );
};

export default function () {
  const [textures] = createResource(async () => {
    await PIXI.Assets.load("https://pixijs.com/assets/spritesheet/mc.json");
    return Array.from({ length: 26 }, (_, i) =>
      PIXI.Texture.from(`Explosion_Sequence_A ${i + 1}.png`)
    );
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application backgroundColor={0x1099bb}>
        <Show when={textures()}>
          {(textures) => (
            <Container>
              <Example textures={textures()} />
            </Container>
          )}
        </Show>
      </Application>
    </Suspense>
  );
}
