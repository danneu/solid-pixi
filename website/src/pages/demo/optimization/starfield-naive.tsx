import "./PixiStats.css";
import * as PIXI from "pixi.js";
import {
  createResource,
  createSignal,
  Index,
  onCleanup,
  Suspense,
  type Component,
} from "solid-js";
import {
  Application,
  Container,
  onTick,
  Sprite,
  Text,
} from "@danneu/solid-pixi";
import { Stats } from "pixi-stats";

// https://svelte-pixi.mattjennin.gs/guides/optimizing-performance

const SPEED = 0.025;
const FOV = 20;
const WIDTH = 720;
const HEIGHT = 400;
const STAR_SIZE = 0.05;

const Star: Component<{ texture: PIXI.Texture; cameraZ: number }> = (props) => {
  const deg = Math.random() * Math.PI * 2;
  const initDistance = Math.random() * 50 + 1;
  const initX = Math.cos(deg) * initDistance;
  const initY = Math.sin(deg) * initDistance;
  const [starZ, setStarZ] = createSignal(Math.random() * 1000 + 750);

  // These are all computed values function of cameraZ

  const z = () => {
    let currentZ = starZ() - props.cameraZ;

    // When star goes behind camera, reset it far ahead
    if (currentZ < 1) {
      setStarZ((prev) => prev + Math.random() * 2000 + 1000);
      currentZ = starZ() - props.cameraZ;
    }

    return currentZ;
  };

  const x = () => {
    return initX * (FOV / z()) * WIDTH + WIDTH / 2;
  };

  const y = () => {
    return initY * (FOV / z()) * HEIGHT + HEIGHT / 2;
  };

  const distance = () => {
    return Math.max(0, (2000 - z()) / 2000);
  };

  return (
    <Sprite
      texture={props.texture}
      anchor={{ x: 0.5, y: 0.7 }}
      scale={{
        x: distance() * STAR_SIZE,
        y: distance() * STAR_SIZE,
      }}
      x={x()}
      y={y()}
    />
  );
};

const Example: Component<{ starCount: number }> = (props) => {
  const [cameraZ, setCameraZ] = createSignal(0);

  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("/solid-pixi/img/star.png");
  });

  // move the camera forward
  onTick((tick) => {
    setCameraZ((prev) => (prev += tick.deltaTime * 10 * SPEED));
  });

  return (
    <Index each={Array(props.starCount).fill(0)}>
      {() => <Star texture={texture()} cameraZ={cameraZ()} />}
    </Index>
  );
};

export default function () {
  const options = [100, 1000, 10000];
  const [starCount, setStarCount] = createSignal(100);

  let stats: Stats | undefined;

  onCleanup(() => {
    // Important to call this, else WebGL errors on unmount
    stats?.pixiHooks.release();
  });

  const handleClick = () => {
    setStarCount((prev) => {
      // Pick next option in list
      const nextIndex = (options.indexOf(prev) + 1) % options.length;
      return options[nextIndex];
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Application
          eventMode="static"
          ref={(app) => {
            stats = new Stats(app.renderer, app.canvas.parentElement!);
            app.stage.hitArea = app.screen;
            app.stage.on("pointertap", handleClick);
            onCleanup(() => {
              app.stage.off("pointertap", handleClick);
            });
          }}
        >
          <Container>
            <Text
              text={`${starCount().toLocaleString()} stars. Click anywhere to change.`}
              style={{
                fill: "white",
                fontSize: 16,
              }}
            />
            <Example starCount={starCount()} />
          </Container>
        </Application>
      </Suspense>
    </div>
  );
}
