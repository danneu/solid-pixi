import "./PixiStats.css";
import * as PIXI from "pixi.js";
import {
  createEffect,
  createResource,
  createSignal,
  on,
  onCleanup,
  Suspense,
  type Component,
} from "solid-js";
import { Application, Container, onTick, Text } from "@danneu/solid-pixi";
import { Stats } from "pixi-stats";

// https://svelte-pixi.mattjennin.gs/guides/optimizing-performance

const SPEED = 0.025;
const FOV = 20;
const WIDTH = 720;
const HEIGHT = 400;
const STAR_SIZE = 0.05;

const Example: Component<{ starCount: number }> = (props) => {
  const [cameraZ, setCameraZ] = createSignal(0);
  const [container, setContainer] = createSignal<PIXI.Container | undefined>(
    undefined
  );

  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("/img/star.png");
  });

  // move the camera forward
  onTick((tick) => {
    setCameraZ((prev) => (prev += tick.deltaTime * 10 * SPEED));
    stars.forEach(updateStar);
  });

  type Star = PIXI.Sprite & {
    initX: number;
    initY: number;
    initZ: number;
    z: number;
  };

  let stars: Star[] = [];

  createEffect(
    on(
      // Only run when starCount changes and when container & texture are loaded.
      [() => props.starCount, container, texture],
      ([starCount, container, texture]) => {
        if (!container) return;
        if (!texture) return;
        // We want to run this code when texture and container are loaded + starCount changes.

        // Initially and evey time the star count changes, create a new array of sprites

        // Note: Slow. Would be faster to destroy container and create a new one.
        stars.forEach((s) => s.destroy());

        stars = Array.from({ length: starCount }, () => {
          const star = new PIXI.Sprite(texture) as Star;
          const deg = Math.random() * Math.PI * 2;
          const distance = Math.random() * 50 + 1;

          // these are custom values that we'll use in the updateStar function
          star.initX = Math.cos(deg) * distance;
          star.initY = Math.sin(deg) * distance;
          star.initZ = Math.random() * 1000 + 750;

          star.x = star.initX;
          star.y = star.initY;
          star.z = star.initZ;

          star.anchor.set(0.5, 0.7);

          return star;
        });

        // append the stars to the container
        console.log("adding stars to container", stars.length);
        container.addChild(...stars);
      }
    )
  );

  function updateStar(star: Star) {
    let z = star.z - cameraZ();

    // When star goes behind camera, reset it far ahead
    if (z < 1) {
      star.z += Math.random() * 2000 + 1000; // Move star forward again
      z = star.z - cameraZ(); // Recalculate z
    }

    const distance = Math.max(0, (2000 - z) / 2000);

    star.scale.set(distance * STAR_SIZE);

    star.x = star.initX * (FOV / z) * WIDTH + WIDTH / 2;
    star.y = star.initY * (FOV / z) * HEIGHT + HEIGHT / 2;
  }

  onCleanup(() => {
    // since we created the stars manually we'll need to destroy them manually on unmount
    stars.forEach((s) => s.destroy());
  });

  return <Container ref={(c) => setContainer(c)} />;
};

export default function () {
  const options = [100, 1_000, 10_000];
  const [starCount, setStarCount] = createSignal(options[0]);

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
