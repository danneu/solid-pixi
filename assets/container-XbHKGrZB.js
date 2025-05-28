import { a as createResource, c as createComponent, A as Application, k as Show, t as template, S as Suspense, u as useApp, b as createSignal, o as onTick, I as Index, d as Sprite, C as Container } from "./index-cqINclcI.js";
import { A as Assets } from "./Assets-D2WwKIu7.js";
import "./BitmapFontManager-gbV2sPtr.js";
import "./TextStyle-DrlgAS9c.js";
import "./GraphicsContext-DHw8to5o.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = (props) => {
  const app = useApp();
  const [rotation, setRotation] = createSignal(0);
  onTick((tick) => {
    setRotation(rotation() - 0.01 * tick.deltaTime);
  });
  return createComponent(Container, {
    get x() {
      return app.screen.width / 2;
    },
    get y() {
      return app.screen.height / 2;
    },
    get rotation() {
      return rotation();
    },
    ref: (el) => {
      el.pivot.x = el.width / 2;
      el.pivot.y = el.height / 2;
    },
    get children() {
      return createComponent(Index, {
        get each() {
          return Array(25).fill(0);
        },
        children: (_, i) => createComponent(Sprite, {
          x: i % 5 * 40,
          get y() {
            return Math.floor(i / 5) * 40;
          },
          get texture() {
            return props.texture;
          }
        })
      });
    }
  });
};
function container() {
  const [texture] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/bunny.png");
  });
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        backgroundColor: 1087931,
        get children() {
          return createComponent(Show, {
            get when() {
              return texture();
            },
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
  container as default
};
//# sourceMappingURL=container-XbHKGrZB.js.map
