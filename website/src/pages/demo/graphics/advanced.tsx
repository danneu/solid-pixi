import { Application, Graphics } from "@danneu/solid-pixi";
import * as PIXI from "pixi.js";
import { createResource, Show, Suspense, type Component } from "solid-js";

const Example2: Component<{ texture: PIXI.Texture }> = (props) => {
  return (
    <>
      <Graphics
        ref={(g) => {
          g.moveTo(0, 0);
          g.lineTo(0, -100);
          g.lineTo(150, 150);
          g.lineTo(240, 100);
          g.stroke({ width: 2, color: 0xffffff });

          g.position.x = 320;
          g.position.y = 150;
        }}
      />
      <Show when={props.texture}>
        <Graphics
          ref={(g) => {
            g.bezierCurveTo(0, -100, 150, 150, 240, 100);
            g.stroke({ width: 10, texture: props.texture });

            g.position.x = 320;
            g.position.y = 150;
          }}
        />
      </Show>
    </>
  );
};

export default function () {
  const [texture] = createResource(async () => {
    return await PIXI.Assets.load("https://pixijs.com/assets/bg_rotate.jpg");
  });

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application antialias>
        <Graphics
          ref={(realPath) => {
            realPath.moveTo(0, 0);
            realPath.lineTo(100, 200);
            realPath.lineTo(200, 200);
            realPath.lineTo(240, 100);
            realPath.stroke({ width: 2, color: 0xffffff });

            realPath.position.x = 50;
            realPath.position.y = 50;
          }}
        />

        <Graphics
          ref={(bezier) => {
            bezier.bezierCurveTo(100, 200, 200, 200, 240, 100);
            bezier.stroke({ width: 5, color: 0xaa0000 });

            bezier.position.x = 50;
            bezier.position.y = 50;
          }}
        />

        <Example2 texture={texture()} />
        <Graphics
          ref={(arc) => {
            arc.arc(600, 100, 50, Math.PI, 2 * Math.PI);
            arc.stroke({ width: 5, color: 0xaa00bb });
          }}
        />
        <Graphics
          ref={(arc2) => {
            arc2.arc(650, 270, 60, 2 * Math.PI, (3 * Math.PI) / 2);
            arc2.stroke({ width: 6, color: 0x3333dd });
          }}
        />
        <Show when={texture()}>
          <Graphics
            ref={(arc3) => {
              arc3.arc(650, 420, 60, 2 * Math.PI, (2.5 * Math.PI) / 2);
              arc3.stroke({ width: 20, texture: texture() });
            }}
          />
        </Show>
        <Graphics
          ref={(rectAndHole) => {
            rectAndHole.rect(350, 350, 150, 150);
            rectAndHole.fill(0x00ff00);
            rectAndHole.circle(375, 375, 25);
            rectAndHole.circle(425, 425, 25);
            rectAndHole.circle(475, 475, 25);
            rectAndHole.cut();
          }}
        />

        <Show when={texture()}>
          <Graphics
            ref={(beatifulRect) => {
              beatifulRect.rect(80, 350, 150, 150);
              beatifulRect.fill(0xff0000);
              beatifulRect.stroke({ width: 20, texture: texture() });
            }}
          />
        </Show>
      </Application>
    </Suspense>
  );
}
