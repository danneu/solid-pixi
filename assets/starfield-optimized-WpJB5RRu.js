import { b as createSignal, t as template, i as insert, c as createComponent, o as onCleanup, S as Suspense, a as createResource, e as createEffect, f as on } from "./index-CLtqof-7.js";
import { d as distExports } from "./index-1_hfx6Fn.js";
import { S as Sprite } from "./index-GvB5cAXK.js";
import { A as Application, C as Container, T as Text, o as onTick } from "./pixi-B8zznZ_z.js";
import { A as Assets } from "./Assets-DIP7PhJT.js";
import "./BitmapFontManager-DCPvN_9I.js";
import "./TextStyle-BtKWHGrr.js";
import "./GraphicsContext-Dm-DEkXx.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>`), _tmpl$2 = /* @__PURE__ */ template(`<div>Loading...`);
const SPEED = 0.025;
const FOV = 20;
const WIDTH = 720;
const HEIGHT = 400;
const STAR_SIZE = 0.05;
const Example = (props) => {
  const [cameraZ, setCameraZ] = createSignal(0);
  const [container, setContainer] = createSignal(void 0);
  const [texture] = createResource(async () => {
    return await Assets.load("/solid-pixi/img/star.png");
  });
  onTick((tick) => {
    setCameraZ((prev) => prev += tick.deltaTime * 10 * SPEED);
    stars.forEach(updateStar);
  });
  let stars = [];
  createEffect(on(
    // Only run when starCount changes and when container & texture are loaded.
    [() => props.starCount, container, texture],
    ([starCount, container2, texture2]) => {
      if (!container2) return;
      if (!texture2) return;
      stars.forEach((s) => s.destroy());
      stars = Array.from({
        length: starCount
      }, () => {
        const star = new Sprite(texture2);
        const deg = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 1;
        star.initX = Math.cos(deg) * distance;
        star.initY = Math.sin(deg) * distance;
        star.initZ = Math.random() * 1e3 + 750;
        star.x = star.initX;
        star.y = star.initY;
        star.z = star.initZ;
        star.anchor.set(0.5, 0.7);
        return star;
      });
      console.log("adding stars to container", stars.length);
      container2.addChild(...stars);
    }
  ));
  function updateStar(star) {
    let z = star.z - cameraZ();
    if (z < 1) {
      star.z += Math.random() * 2e3 + 1e3;
      z = star.z - cameraZ();
    }
    const distance = Math.max(0, (2e3 - z) / 2e3);
    star.scale.set(distance * STAR_SIZE);
    star.x = star.initX * (FOV / z) * WIDTH + WIDTH / 2;
    star.y = star.initY * (FOV / z) * HEIGHT + HEIGHT / 2;
  }
  onCleanup(() => {
    stars.forEach((s) => s.destroy());
  });
  return createComponent(Container, {
    ref: (c) => setContainer(c)
  });
};
function starfieldOptimized() {
  const options = [100, 1e3, 1e4];
  const [starCount, setStarCount] = createSignal(options[0]);
  let stats;
  onCleanup(() => {
    stats == null ? void 0 : stats.pixiHooks.release();
  });
  const handleClick = () => {
    setStarCount((prev) => {
      const nextIndex = (options.indexOf(prev) + 1) % options.length;
      return options[nextIndex];
    });
  };
  return (() => {
    var _el$ = _tmpl$();
    _el$.style.setProperty("position", "relative");
    insert(_el$, createComponent(Suspense, {
      get fallback() {
        return _tmpl$2();
      },
      get children() {
        return createComponent(Application, {
          eventMode: "static",
          ref: (app) => {
            stats = new distExports.Stats(app.renderer, app.canvas.parentElement);
            app.stage.hitArea = app.screen;
            app.stage.on("pointertap", handleClick);
            onCleanup(() => {
              app.stage.off("pointertap", handleClick);
            });
          },
          get children() {
            return createComponent(Container, {
              get children() {
                return [createComponent(Text, {
                  get text() {
                    return `${starCount().toLocaleString()} stars. Click anywhere to change.`;
                  },
                  style: {
                    fill: "white",
                    fontSize: 16
                  }
                }), createComponent(Example, {
                  get starCount() {
                    return starCount();
                  }
                })];
              }
            });
          }
        });
      }
    }));
    return _el$;
  })();
}
export {
  starfieldOptimized as default
};
//# sourceMappingURL=starfield-optimized-WpJB5RRu.js.map
