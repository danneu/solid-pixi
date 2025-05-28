import { b as createSignal, t as template, i as insert, c as createComponent, o as onCleanup, S as Suspense, a as createResource, I as Index } from "./index-CDSoUQHr.js";
import { d as distExports } from "./index-1_hfx6Fn.js";
import { A as Application, C as Container, T as Text, o as onTick, S as Sprite } from "./pixi-DQQvmLoy.js";
import { A as Assets } from "./Assets-CoHCNDu0.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>`), _tmpl$2 = /* @__PURE__ */ template(`<div>Loading...`);
const SPEED = 0.025;
const FOV = 20;
const WIDTH = 720;
const HEIGHT = 400;
const STAR_SIZE = 0.05;
const Star = (props) => {
  const deg = Math.random() * Math.PI * 2;
  const initDistance = Math.random() * 50 + 1;
  const initX = Math.cos(deg) * initDistance;
  const initY = Math.sin(deg) * initDistance;
  const [starZ, setStarZ] = createSignal(Math.random() * 1e3 + 750);
  const z = () => {
    let currentZ = starZ() - props.cameraZ;
    if (currentZ < 1) {
      setStarZ((prev) => prev + Math.random() * 2e3 + 1e3);
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
    return Math.max(0, (2e3 - z()) / 2e3);
  };
  return createComponent(Sprite, {
    get texture() {
      return props.texture;
    },
    anchor: {
      x: 0.5,
      y: 0.7
    },
    get scale() {
      return {
        x: distance() * STAR_SIZE,
        y: distance() * STAR_SIZE
      };
    },
    get x() {
      return x();
    },
    get y() {
      return y();
    }
  });
};
const Example = (props) => {
  const [cameraZ, setCameraZ] = createSignal(0);
  const [texture] = createResource(async () => {
    return await Assets.load("/solid-pixi/img/star.png");
  });
  onTick((tick) => {
    setCameraZ((prev) => prev += tick.deltaTime * 10 * SPEED);
  });
  return createComponent(Index, {
    get each() {
      return Array(props.starCount).fill(0);
    },
    children: () => createComponent(Star, {
      get texture() {
        return texture();
      },
      get cameraZ() {
        return cameraZ();
      }
    })
  });
};
function starfieldNaive() {
  const options = [100, 1e3, 1e4];
  const [starCount, setStarCount] = createSignal(100);
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
  starfieldNaive as default
};
//# sourceMappingURL=starfield-naive-sSs0XjLC.js.map
