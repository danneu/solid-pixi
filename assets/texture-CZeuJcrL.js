import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense } from "./index-BUVMa91q.js";
import "./index-CBZJGsfG.js";
import { A as Assets } from "./Assets-1Z5wmmYW.js";
import { A as Application, u as useApp, G as Graphics } from "./pixi-Dx96M86I.js";
import { G as GraphicsContext } from "./GraphicsContext-CFEDeVfX.js";
import "./BitmapFontManager-9i7DYTn5.js";
import "./TextStyle-BdOZYg1M.js";
var _tmpl$ = /* @__PURE__ */ template(`<div>Loading`);
const Example = (props) => {
  const app = useApp();
  const context = new GraphicsContext().circle(0, 0, 120).fill("green").texture(props.texture, 16777215, -props.texture.width / 2, -props.texture.height / 2).translate(100, 100).scale(0.4).texture(props.texture, "yellow");
  return [createComponent(Graphics, {
    get x() {
      return app.screen.width / 2;
    },
    get y() {
      return app.screen.height / 2;
    },
    ref: (g) => {
      g.context = context;
    }
  }), createComponent(Graphics, {
    get x() {
      return app.screen.width / 2 - 200;
    },
    get y() {
      return app.screen.height / 2 - 200;
    },
    rotation: 0.5,
    ref: (g) => {
      g.context = context;
    }
  })];
};
function texture() {
  const [texture2] = createResource(async () => {
    return await Assets.load("https://pixijs.com/assets/panda.png");
  });
  return createComponent(Suspense, {
    get fallback() {
      return _tmpl$();
    },
    get children() {
      return createComponent(Application, {
        antialias: true,
        background: "white",
        get children() {
          return createComponent(Show, {
            get when() {
              return texture2();
            },
            get children() {
              return createComponent(Example, {
                get texture() {
                  return texture2();
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
  texture as default
};
//# sourceMappingURL=texture-CZeuJcrL.js.map
