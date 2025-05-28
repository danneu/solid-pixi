import { Application, Container, onTick, Sprite } from "@danneu/solid-pixi";
import { useApp } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import {
  createResource,
  Index,
  Show,
  Suspense,
  type Component,
} from "solid-js";

const TOTAL_SPRITES = 10_000;

const Example: Component<{ texture: PIXI.Texture }> = (props) => {
  const app = useApp();

  type Maggot = PIXI.Sprite & {
    direction: number;
    turningSpeed: number;
    speed: number;
    offset: number;
  };

  // For performance, we create PIXI.Sprite instances and update them directly.

  const maggots = Array.from({ length: TOTAL_SPRITES }, () => {
    const maggot = new PIXI.Sprite(props.texture) as Maggot;
    maggot.anchor.set(0.5);
    maggot.scale.set(0.8 + Math.random() * 0.3);
    maggot.x = Math.random() * app.screen.width;
    maggot.y = Math.random() * app.screen.height;
    maggot.tint = Math.random() * 0x808080;
    maggot.direction = Math.random() * Math.PI * 2;
    maggot.turningSpeed = Math.random() - 0.8;
    maggot.speed = (2 + Math.random() * 2) * 0.2;
    maggot.offset = Math.random() * 100;
    return maggot;
  });

  const boundingBox = (() => {
    const padding = 100;
    return new PIXI.Rectangle(
      -padding,
      -padding,
      app.screen.width + padding * 2,
      app.screen.height + padding * 2
    );
  })();

  let tick = 0;

  onTick(() => {
    tick += 0.1;

    for (const maggot of maggots) {
      maggot.scale.y = 0.95 + Math.sin(tick + maggot.offset) * 0.05;
      maggot.direction += maggot.turningSpeed * 0.01;
      maggot.x += Math.sin(maggot.direction) * (maggot.speed * maggot.scale.y);
      maggot.y += Math.cos(maggot.direction) * (maggot.speed * maggot.scale.y);
      maggot.rotation = -maggot.direction + Math.PI;

      // Wrap the maggots
      if (maggot.x < boundingBox.x) {
        maggot.x += boundingBox.width;
      } else if (maggot.x > boundingBox.x + boundingBox.width) {
        maggot.x -= boundingBox.width;
      }

      if (maggot.y < boundingBox.y) {
        maggot.y += boundingBox.height;
      } else if (maggot.y > boundingBox.y + boundingBox.height) {
        maggot.y -= boundingBox.height;
      }
    }
  });

  return (
    <Container>
      <Index each={maggots}>{(maggot) => <Sprite as={maggot()} />}</Index>
    </Container>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/maggot_tiny.png");
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
