import { Application, Graphics } from "@danneu/solid-pixi";
import { Suspense, type Component } from "solid-js";

const Example: Component = () => {
  return (
    <Graphics
      ref={(g) => {
        // Rectangle
        g.rect(50, 50, 100, 100);
        g.fill(0xde3249);

        // Rectangle + line style 1
        g.rect(200, 50, 100, 100);
        g.fill(0x650a5a);
        g.stroke({ width: 2, color: 0xfeeb77 });

        // Rectangle + line style 2
        g.rect(350, 50, 100, 100);
        g.fill(0xc34288);
        g.stroke({ width: 10, color: 0xffbd01 });

        // Rectangle 2
        g.rect(530, 50, 140, 100);
        g.fill(0xaa4f08);
        g.stroke({ width: 2, color: 0xffffff });

        // Circle
        g.circle(100, 250, 50);
        g.fill(0xde3249, 1);

        // Circle + line style 1
        g.circle(250, 250, 50);
        g.fill(0x650a5a, 1);
        g.stroke({ width: 2, color: 0xfeeb77 });

        // Circle + line style 2
        g.circle(400, 250, 50);
        g.fill(0xc34288, 1);
        g.stroke({ width: 10, color: 0xffbd01 });

        // Ellipse + line style 2
        g.ellipse(600, 250, 80, 50);
        g.fill(0xaa4f08, 1);
        g.stroke({ width: 2, color: 0xffffff });

        // Draw a shape
        g.moveTo(50, 350);
        g.lineTo(250, 350);
        g.lineTo(100, 400);
        g.lineTo(50, 350);
        g.fill(0xff3300);
        g.stroke({ width: 4, color: 0xffd900 });

        // Draw a rounded rectangle
        g.roundRect(50, 440, 100, 100, 16);
        g.fill(0x650a5a, 0.25);
        g.stroke({ width: 2, color: 0xff00ff });

        // Draw star
        g.star(360, 370, 5, 50);
        g.fill(0x35cc5a);
        g.stroke({ width: 2, color: 0xffffff });

        // Draw star 2
        g.star(280, 510, 7, 50);
        g.fill(0xffcc5a);
        g.stroke({ width: 2, color: 0xfffffd });

        // Draw star 3
        g.star(470, 450, 4, 50);
        g.fill(0x55335a);
        g.stroke({ width: 4, color: 0xffffff });

        // Draw polygon
        const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];

        g.poly(path);
        g.fill(0x3500fa);
      }}
    />
  );
};

export default function () {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Application antialias>
        <Example />
      </Application>
    </Suspense>
  );
}
