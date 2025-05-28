import { a as createResource, c as createComponent, g as Show, t as template, S as Suspense } from "./index-CDSoUQHr.js";
import { A as Application, u as useApp, g as GraphicsContext, G as Graphics } from "./pixi-DQQvmLoy.js";
import { A as Assets } from "./Assets-CoHCNDu0.js";
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
//# sourceMappingURL=texture-D6vYYavc.js.map
