import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense, b as createSignal } from "./index-CLtqof-7.js";
import "./index-GvB5cAXK.js";
import { A as Application, u as useApp, o as onTick, a as TilingSprite } from "./pixi-B8zznZ_z.js";
import { A as Assets } from "./Assets-DIP7PhJT.js";
import "./BitmapFontManager-DCPvN_9I.js";
import "./TextStyle-BtKWHGrr.js";
import "./GraphicsContext-Dm-DEkXx.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = (props) => {
  const app = useApp();
  const [seconds, setSeconds] = createSignal(0);
  onTick((tick) => {
    setSeconds((n) => n + tick.deltaMS / 1e3);
  });
  const scale = () => ({
    x: 2 + Math.sin(seconds() * 0.25),
    y: 2 + Math.cos(seconds() * 0.25)
  });
  const tilePosition = () => {
    return {
      x: seconds() * 50,
      y: seconds() * 50
    };
  };
  return createComponent(TilingSprite, {
    get texture() {
      return props.texture;
    },
    get width() {
      return app.screen.width;
    },
    get height() {
      return app.screen.height;
    },
    get tilePosition() {
      return tilePosition();
    },
    get tileScale() {
      return scale();
    }
  });
};
function tilingSprite() {
  const [texture] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/p2.jpeg");
  });
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Show, {
        get when() {
          return texture();
        },
        get children() {
          return createComponent(Application, {
            get children() {
              return createComponent(Example, {
                get texture() {
                  return texture();
                }
              });
            }
          });
        }
      });
    }
  });
}
export {
  tilingSprite as default
};
//# sourceMappingURL=tiling-sprite-BVm6tSr0.js.map
