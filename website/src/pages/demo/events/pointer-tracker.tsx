import { type FederatedPointerEvent } from "pixi.js";
import { Application, Graphics } from "@danneu/solid-pixi";
import { createSignal, onCleanup, Suspense, type Component } from "solid-js";

const Example: Component<{ position: { x: number; y: number } }> = (props) => {
  // console.log("position", props.position);
  return (
    <Graphics
      position={props.position}
      ref={(g) => {
        g.circle(0, 0, 8)
          .fill({ color: 0xffffff })
          .stroke({ color: 0x111111, alpha: 0.87, width: 1 });
      }}
    />
  );
};

export default function () {
  const [position, setPosition] = createSignal({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e: FederatedPointerEvent) => {
    setPosition({ x: e.global.x, y: e.global.y });
  };

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Application
          backgroundColor={0x1099bb}
          antialias
          eventMode="static"
          ref={(app) => {
            setPosition({
              x: app.screen.width / 2,
              y: app.screen.height / 2,
            });
            app.stage.hitArea = app.screen;
            app.stage.on("pointermove", handlePointerMove);
            onCleanup(() => {
              app.stage.off("pointermove", handlePointerMove);
            });
          }}
        >
          <Example position={position()} />
        </Application>
      </Suspense>
    </>
  );
}
